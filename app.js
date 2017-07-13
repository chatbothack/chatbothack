// This loads the environment variables from the .env file
require('dotenv-extended').load();

var builder = require('botbuilder');
var restify = require('restify');
var Store = require('./store');
var spellService = require('./spell-service');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
// Create connector and listen for messages
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {
    session.send('Sorry, I did not understand \'%s\'. Type \'help\' if you need assistance.', session.message.text);
});

// You can provide your own model by specifing the 'LUIS_MODEL_URL' environment variable
// This Url can be obtained by uploading or creating your model from the LUIS portal: https://www.luis.ai/
var recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL);
bot.recognizer(recognizer);

bot.dialog('SearchTRs', [
    function (session, args, next) {
        session.send('Welcome to the issue reslover! We are analyzing your message: \'%s\'', session.message.text);

        // try extracting entities
        var cityEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'builtin.geography.city');
        var trEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'Issue');
        var cmEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'Component');
        if (cityEntity) {
            // city entity detected, continue to next step
            session.dialogData.searchType = 'city';
            next({ response: cityEntity.entity });
        } else if (trEntity) {
            // airport entity detected, continue to next step
            session.dialogData.searchType = 'tr';
            next({ response: trEntity.entity });
        } else if (cmEntity) {
            // airport entity detected, continue to next step
            session.dialogData.searchType = 'component';
            next({ response: cmEntity.entity });
        } else {
            // no entities detected, ask user for a destination
            builder.Prompts.text(session, 'Please enter your destination');
        }
    },
    function (session, results) {
        var destination = results.response;

        var message = 'Looking for resources';
        if (session.dialogData.searchType === 'tr') {
            message += ' near %s TR...';
        } else {
            message += ' in %s...';
        }

        session.send(message, destination);

        // Async search
        Store
            .searchHotels(destination)
            .then(function (hotels) {
                // args
                session.send('I found %d TRs:', hotels.length);

                var message = new builder.Message()
                    .attachmentLayout(builder.AttachmentLayout.carousel)
                    .attachments(hotels.map(hotelAsAttachment));

                session.send(message);

                // End
                session.endDialog();
            });
    }
]).triggerAction({
    matches: 'SearchTRs',
    onInterrupted: function (session) {
        session.send('Please provide a destination');
    }
});

bot.dialog('getComponentDetails', [
    function (session, args, next) {
        session.send('Welcome to the issue reslover! We are analyzing your message: \'%s\'', session.message.text);

        // try extracting entities

        var cmEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'Component');
        if (cmEntity) {
            // airport entity detected, continue to next step
            session.dialogData.searchType = 'component';
            next({ response: cmEntity.entity });
        } else {
            // no entities detected, ask user for a destination
            builder.Prompts.text(session, 'Please enter your destination');
        }
    },
    function (session, results) {
        var destination = results.response;

        var message = 'Looking for resources';
        if (session.dialogData.searchType === 'tr') {
            message += ' near %s TR...';
        } else {
            message += ' for %s...';
        }

        session.send(message, destination);

        // Async search
        Store
            .searchComponent(destination)
            .then(function (hotels) {
                // args
                //session.send('I found %d :', hotels.length);

                var message = new builder.Message()
                    .attachmentLayout(builder.AttachmentLayout.carousel)
                    .attachments(hotels.map(componentAsAttachment));

                session.send(message);

                // End
                session.endDialog();
            });
    }
]).triggerAction({
    matches: 'getComponentDetails',
    onInterrupted: function (session) {
        session.send('Please provide valid component name');
    }
});

bot.dialog('ShowHotelsReviews', function (session, args) {
    // retrieve hotel name from matched entities
    var hotelEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'Hotel');
    if (hotelEntity) {
        session.send('Looking for reviews of \'%s\'...', hotelEntity.entity);
        Store.searchHotelReviews(hotelEntity.entity)
            .then(function (reviews) {
                var message = new builder.Message()
                    .attachmentLayout(builder.AttachmentLayout.carousel)
                    .attachments(reviews.map(reviewAsAttachment));
                session.endDialog(message);
            });
    }
}).triggerAction({
    matches: 'ShowHotelsReviews'
});

bot.dialog('Help', function (session) {
    session.endDialog('Welcome ! Try asking me things like \'Give me details for function control\', \'Is there any TR for MSV Admin Portal\' or \'Report an issue with SR, here is the login info.\'');
}).triggerAction({
    matches: 'Help'
});

// Spell Check
if (process.env.IS_SPELL_CORRECTION_ENABLED === 'true') {
    bot.use({
        botbuilder: function (session, next) {
            spellService
                .getCorrectedText(session.message.text)
                .then(function (text) {
                    session.message.text = text;
                    next();
                })
                .catch(function (error) {
                    console.error(error);
                    next();
                });
        }
    });
}

// Helpers
function hotelAsAttachment(hotel) {
    return new builder.HeroCard()
        .title(hotel.name)
        .subtitle('TR %d. Status %d. Description %d.', hotel.rating, hotel.numberOfReviews, hotel.priceStarting)
        ///        .images([new builder.CardImage().url(hotel.image)])
        .buttons([
            new builder.CardAction()
                .title('More details')
                .type('openUrl')
                .value('https://mhweb.ericsson.se/TREditWeb/faces/oo/object.xhtml?eriref=HW12615')
/// 'https://www.bing.com/search?q=hotels+in+' + encodeURIComponent(hotel.location))
        ]);
}

function componentAsAttachment(hotel) {
    return new builder.HeroCard()
        .title(hotel.name)
        //.subtitle('Component %s. Status %d. Description %d.', hotel.name, hotel.numberOfReviews, hotel.priceStarting)
        ///        .images([new builder.CardImage().url(hotel.image)])
        .buttons([
            new builder.CardAction()
                .title('Wiki Link')
                .type('openUrl')
                .value('https://openalm.lmera.ericsson.se/plugins/mediawiki/wiki/mlm/index.php/Main_Page')
/// 'https://www.bing.com/search?q=hotels+in+' + encodeURIComponent(hotel.location))
        ]);
}

function reviewAsAttachment(review) {
    return new builder.ThumbnailCard()
        .title(review.title)
        .text(review.text)
        .images([new builder.CardImage().url(review.image)]);
}
