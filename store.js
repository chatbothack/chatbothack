var Promise = require('bluebird');

var mhwebMap = new Map();

mhwebMap.set("HV80235","While Upgrading a MSV-SUF server the NSM restore failed because the backup didn't have /data directo");
mhwebMap.set("HU35580","where running service httpd reload failed to start httpd.");
mhwebMap.set("HV29925","When one node isdown in the FM cluster cli -c show-active-alarm gets return code 13");
mhwebMap.set("HV30223","wantedSoftwareState causing infinite reboot upon upgrade/redeploy/fallback");
mhwebMap.set("HT93489","vsphere deploy Customized template missing property names plus Zookeeper Ppper port and Leader port");
mhwebMap.set("HV91000","vmmanger 1.18.1.  At the end of the vmmanager deploy, getting the following error");
mhwebMap.set("HV31613","vmmanager upgrade oncorrectly applying a previous release's EP patch");
mhwebMap.set("HV95841","vmmanager: missing result printout at failed postdeploy");
mhwebMap.set("HS53210","VM/HYPERVISOR Installation Procedure forInstall VM's/KVM");
mhwebMap.set("HT77754","Ver 0.6.9 Upgrade");
mhwebMap.set("HT82348","Ver 0.6.9 MSV Install and Deploy Guide - Overall Comments for 0.6.9 LSV");
mhwebMap.set("HT70375","Ver 0.6.7 Post deploy MSV-ADM linux window hangs");
mhwebMap.set("HT72871","Ver 0.6.7 MSV Install and Deploy Guide - PM Reports and Log Streaming questionaires incorrect sequen");
mhwebMap.set("HT68975","Ver 0.6.7 MSV Install and Deploy Guide - MSV-LGM DV - Corrections and Comments");
mhwebMap.set("HT69135","Ver 0.6.7 MSV Install and Deploy Guide - MSV-IDM DV - Corrections and Comments");
mhwebMap.set("HT68976","Ver 0.6.7 MSV Install and Deploy Guide - MSV-FM DV - Corrections and Comments");
mhwebMap.set("HT69936","Ver 0.6.7 MSV Install and Deploy Guide - MSV-AUTH DV - Corrections and Comments");
mhwebMap.set("HT70391","Ver 0.6.7 MSV Install and Deploy Guide - MSV-ADM DV - Corrections and Comments");
mhwebMap.set("HT74933","Ver 0.6.7 MSV Install and Deploy Guide -Load Balancer + Scalability MSV-ADM/LGM Cmts");
mhwebMap.set("HT72873","Ver 0.6.7 -- login directly to the OpenAM GUI as amadmin to do superuser type activities");
mhwebMap.set("HV16388","UX: MSV Administration Portal should be reached on an URL following de facto standard");
mhwebMap.set("HV63350","userid openam and opendj which is created as software use ID that expires");
mhwebMap.set("HT57907","Usage of the import/export not clear related to bkup and restore of zk db");
mhwebMap.set("HV29438","um-openam-rest-client returning wrong results when resource have wildcard characters");
mhwebMap.set("HU20293","umConfiguration.sh  no procedures to support mixed mode 1.1 TPGs to 2.0 server");
mhwebMap.set("HS92534","Trace logs is not presented correctly in Adminportal");
mhwebMap.set("HU86365","The Vmmanager upgrade does not allow the user to select which server to upgrade and no checkpointing");
mhwebMap.set("HS56521","The Security Banner that appears during login to a Linux machin shows spelling and grammar mistakes.");
mhwebMap.set("HV18781","There is a fault scenario when deploying MSV-ALL where MSV application configuration is never stored");
mhwebMap.set("HV47061","There are very limited log information inside Service proxy");
mhwebMap.set("HU74700","The point of not having real hostnames is to prevent unintentional issues - EEA issue");
mhwebMap.set("HT20546","The Openam process is started but does not start for over 45 minutes");
mhwebMap.set("HT66031","The NGEE Administration guide  does not indicate that there are limita");
mhwebMap.set("HS34335","The NGEE_unblock_ports.sh script used for unblocking ports has missing firewall rules.");
mhwebMap.set("HV19956","The configuration management screen (&nbsp in the context menu)");
mhwebMap.set("HT62736","Test TR");
mhwebMap.set("HV32943","swrepo trying to use package.json from folders that were not imported using swrepo import");
mhwebMap.set("HS94739","SUF 3.5 -  SUF Playlist Enhancement - Remove Leading and Trailing White Space");
mhwebMap.set("HS60567","SUF 3.5 -  SUF GUI abort job during install causes SUF unusable and all server process need restart");
mhwebMap.set("HS26169","SUF 3.5 -  SUF CLI job-schedule playlist issue with file_put tag");
mhwebMap.set("HS26167","SUF 3.5 -  SUF CLI job-schedule not working without timezone option");
mhwebMap.set("HS40346","Steps to move/remove model to/from CM-GUI machine required JBOSS restart. JBOSS restart will impact");
mhwebMap.set("HV38401","Some upgrades  fail due to ZK connection timeout  issues but nothing in the ZK log");
mhwebMap.set("HV45981","Service proxy should support out of order proxy registration vs Service registry registration");
mhwebMap.set("HV45982","Service proxy should keep retrying in case the destinations registered in Service registry are unava");
mhwebMap.set("HV32937","SDDIT MSV 2.1.5:  Unable to verify which EP installed on instance");
mhwebMap.set("HV58085","SDDIT MSV 2.1.5:  Unable to verify which EP installed on instance");
mhwebMap.set("HV25170","SDD IT: very high load on MSV-All in container env. not usable");
mhwebMap.set("HV25364","SDD IT: very high load on MSV-All in container env. not usable");
mhwebMap.set("HU91177","SDDIT: MSV-ADM ");
mhwebMap.set("HT42755","SDD Int: MSV Admin Portal, some GUI specific Help information missing");
mhwebMap.set("HS46365","Scheduler configuration playlist failed due to incorrect Java Version");
mhwebMap.set("HV49016","Same OpenAM client certificate is shared between different OpenAM clients");
mhwebMap.set("HV75166","RPM verify fails on MSV 0.6.12 packages");
mhwebMap.set("HV67757","RMCA D1633 After a reload (cache reload) in browser, the GUI hangs in production environment");
mhwebMap.set("HV38741","RMCA Communication from Service Proxy (MSV) to RMCA should be TLSv1.2");
mhwebMap.set("HV16055","Replacement Cassandra procedure is too complicated and not working");
mhwebMap.set("HV27119","Quotes  are not supported for the --service using cli");
mhwebMap.set("HV27115","Quotes are not supported for the --dn");
mhwebMap.set("HU44002","Policy Agent Profile configuration updates are NOT getting synced up in both the OpenAM Servers");
mhwebMap.set("HT23097","Policy Agent not being installed correctly");
mhwebMap.set("HT16178","PM Reports msvIssueNgeeAlarm.sh incorrectly has SNAPSHOT reference");
mhwebMap.set("HS79207","Performance Management Report Collection - Faults in script fo msv_sftp command");
mhwebMap.set("HV59310","OT MSV 1651/2.4.1, MSV Service Proxy issues affects loading RMCA GUI pages");
mhwebMap.set("HU37748","OT d1544 MSV Admin Portal GUI - double ");
mhwebMap.set("HV65642","OT d1544 MSV Admin Portal GUI - double ");
mhwebMap.set("HV67778","OT: Single slf4j event doesn't show in admin portal");
mhwebMap.set("HV22108","OT: MSV-SUF 2.1.4 SUF job failed, NSM server already started!");
mhwebMap.set("HU45077","OT: MSV-SUF 0.7.2 d1550: Wrong NGEE version in MSV-SUF-OVF.ovf");
mhwebMap.set("HU61002","OT: MSV Re-import of infrastructure does not update infrastructure");
mhwebMap.set("HV83175","OT: MSV-LGM msvPMParser overloaded");
mhwebMap.set("HV23852","OT: MSV-LGM 2.1.4 lock of root could NOT be removed");
mhwebMap.set("HU63997","OT: MSV Help in SUF upgrade manager does not include any descriptions");
mhwebMap.set("HV17349","OT: MSV File name removed upon change of other fields");
mhwebMap.set("HV67758","OT: MSV File name removed upon change of other fields");
mhwebMap.set("HV16384","OT: MSV d1550  - Admin Portal, Log files window too small");
mhwebMap.set("HV54411","OT: MSV-AUTH  Upgrade 2.3.0-->2.4.1 Playlist failed! Error in configuring OpenAM");
mhwebMap.set("HU64810","OT: MSV Admin Portal d1550: Alarm not displayed when choosed in Dashboard window");
mhwebMap.set("HV94431","OT : msv 2.9.0: Unable to query application logs in adminportal for few TPGs");
mhwebMap.set("HV83967","OT : msv 2.8.0: LGM installation Fails in multisite");
mhwebMap.set("HW12013","OT: MSV 2.6.0: Count of Charging response codes in Performance Metrics");
mhwebMap.set("HV64767","OT : msv 2.4.1  MultiSite - service proxy will redirect to any site");
mhwebMap.set("HV83172","OT : MSV 2.4.1  Missing SUF Repository Replication for Multisite");
mhwebMap.set("HV72102","OT : msv 2.4.1: Alarm History not working properly");
mhwebMap.set("HW12009","OT : msv 2.4.1: Alarm History not working properly");
mhwebMap.set("HV53764","OT: MSV 2.3.0 Zookeeper Crash /System Crash - Telefonica Full Blown environment");
mhwebMap.set("HV39160","OT: MSV 2.1.5 EP02 Inconsistency in Active alarm handling");
mhwebMap.set("HV25368","OT: MSV 2.1.4 PM Collections is failing.");
mhwebMap.set("HU66042","OT: MSV 1.0.0  massive amount of connections established for opendj/ldap");
mhwebMap.set("HU45070","OT: MSV 0.7.2 Reset of filter on active alarm list does not reset time period");
mhwebMap.set("HT90628","OT: MSV 0.6.9: Missing documentation on handling of discrepancies in configuration");
mhwebMap.set("HV16386","OT: MSV 0.6.7: Missing breadcrumb for reverting to Notification History from Notification Detail");
mhwebMap.set("HV16387","OT: MSV 0.6.7: Missing breadcrumb for reverting to active alarm list from alarm details screen");
mhwebMap.set("HV16666","OT: MSV 0.6.12 No information is showing when datacollection is finished or failed");
mhwebMap.set("HV38704","OT: MSV:TLSv1.0 seen in internal communication MSV-CFG(ZK) MSV-IDM");
mhwebMap.set("HV64772","OT:Document confusion for User Management login user.1645/1633");
mhwebMap.set("HV67775","OT: 17A-10, msvadmin can not modify policies");
mhwebMap.set("HU37746","openFile(/var/log/ngee/ms.ebldadm.log,true) call failed");
mhwebMap.set("HT63938","OpenDJ indexes not created");
mhwebMap.set("HV27164","OpenAM issue on MSV-ALL running with NGEE 2.0.4 EP01 (Playlist/Policy)");
mhwebMap.set("HS55419","OpenAM customized login GUI showing ");
mhwebMap.set("HS38640","OpenAM customized login GUI automatically takes Heading from the URL that is requested");
mhwebMap.set("HV36630","OpenAM bss access control APIs are not usable inside JBOSS");
mhwebMap.set("HS34338","OpenAM/OpenDJ installation is failing.");
mhwebMap.set("HT63943","OpeAM Caching, Time to Live and JVM parameter");
mhwebMap.set("HS61040","Online NonMaiden MSV Installation should transfer the ");
mhwebMap.set("HV83602","On Deploy/Upgrade ");
mhwebMap.set("HT44971","oamnc restart from CLI changes SeLinux security context of oamNC-CH process");
mhwebMap.set("HV80754","oamNC problems due to Oam.py doing cm-add followed by many cm-mods when adding oamFile");
mhwebMap.set("HT79933","oamnc does not process all oamFiles and call their configScripts if oamFiles are loaded quickly");
mhwebMap.set("HV31574","OAM and iptables not in synch. NGEE/LE not updating iptables when OAM is updated.");
mhwebMap.set("HT56237","OA-18 - ZK_SERVERS parameter must  references a short hostname or long hostname (FQDN)");
mhwebMap.set("HT63939","OA-18-0.6.5--4.4.6.6 Prepare PM Collection Configuration Missing for Install / Deploy of PM Rpt");
mhwebMap.set("HV24553","noticed that CM and SM ZK backups issue after apply NGEE 2.0.3 EP04");
mhwebMap.set("HT91788","NGEE ZooKeeper not always starting");
mhwebMap.set("HS94751","NGEE VM Installation Playlist - Not trapping Error during Installation");
mhwebMap.set("HS43400","NGEE software assumes that it can do a groupadd of 3011..for um_openm_client playlist package");
mhwebMap.set("HT59214","NGEE should support software configuration as part of OVF deployment");
mhwebMap.set("HS34336","NGEE openAM/openDJ HA/replication support not yet available.");
mhwebMap.set("HS34331","NGEE hostname and configuration issue");
mhwebMap.set("HT64319","NGEE Hbase/HDFS Replacement Procedures Issues");
mhwebMap.set("HS34334","NGEE hardening software that unblocks ports incorrectly assumes eth0.");
mhwebMap.set("HU24561","NGEE and TPG Config scripts are being invoked twice during first boot - can lead to config. failures");
mhwebMap.set("HV86896","NGEE 2.1.1 openam configuration is taking a long time / ssoadm tool");
mhwebMap.set("HU26618","NGEE2.0 Jboss standalone.xml configuration issue");
mhwebMap.set("HV85074","NGEE's data collector handler hardcodes the path to opendj logs");
mhwebMap.set("HS61090","ngee_um_create_and_sign_certs signs OpenAM cert with defaults in UmConfiguration.sh");
mhwebMap.set("HU15039","Need to be able to change URL to access SUF");
mhwebMap.set("HV30609","Multiple same active alarms");
mhwebMap.set("HV86183","MSV-SUF: sign_csr fails due to locale setting");
mhwebMap.set("HT16939","MSV Portal: After session relogin only Original Kibana surface is displayed");
mhwebMap.set("HT30963","MSV OAM GUI add configuration object does not work");
mhwebMap.set("HT45281","MSV OAM GUI add configuration object does not work");
mhwebMap.set("HV83801","MSV LSV  2.8.0:LGM scheduler  missing");
mhwebMap.set("HV58090","msvLogstash-2.0.1 packaging");
mhwebMap.set("HV44113","MSV is seeing issue with update-service --enable  not being processed due to connection timeout af");
mhwebMap.set("HS53227","MSV Install - Software Downloads 1.4 - Incorrect Repository loc MS-3PP and MSV_REPO_NGEE version");
mhwebMap.set("HS77800","MSV Install Guide - Default Config - Include mscli Passwords");
mhwebMap.set("HS53226","MSV Install Certificate Authority Fails > 1 node looking for wrong CA node");
mhwebMap.set("HS53225","MSV Installation-Unclear/not needed-Install Certificate Authority Not Applicable for NGEE 1.0/0.2.0");
mhwebMap.set("HS75212","MSV Installation Guide - Remove Payload Server");
mhwebMap.set("HS70636","MSV Installation Guide - OpenDJ/OpenAM and Appendix A");
mhwebMap.set("HS53219","MSV Installation Guide - Missing steps in Maiden OS Installation");
mhwebMap.set("HS53214","MSV Installation Guide - Incorrect Repository loc MS-3PP and MSV_REPO_NGEE version");
mhwebMap.set("HS58992","MSV INstallation Guide changes LSV drop 1418");
mhwebMap.set("HV41829","MSV DV OVF creation failed using the Master Playlist Framework for the following ini.   (EP07)");
mhwebMap.set("HT40652","MSV Data collection needs to be updated to support new msv log file names");
mhwebMap.set("HU95197","MSV-CFG Deploy issue - Missing zks-2882 and zks-18881 services");
mhwebMap.set("HV21020","MSV and TPGs are observing hung zookeeper connections");
mhwebMap.set("HT41142","MSV Agent installation guide does not provide information to connect to REDIS");
mhwebMap.set("HS77779","MSV Agent Installation from SUF should not require root");
mhwebMap.set("HS60558","MSV Admin Portal session timeout and redirect to OpenAM login is not handled by NGEE.");
mhwebMap.set("HS58125","MSV Admin Portal session hangs when it times out instead of redirecting to login page");
mhwebMap.set("HV80873","MSV 2.8.0:LGM rmbase-1.3.0-karaf.tar.gz installation steps are missing");
mhwebMap.set("HV80872","MSV 2.8.0:LGM backup is running indefinitely");
mhwebMap.set("HV70378","MSV 2.6.0:Unable to upgrade from 2.4.1 to 2.6.0");
mhwebMap.set("HV65553","MSV 2.6.0:MSV-ALL suf steps need to update in installation document");
mhwebMap.set("HV61138","MSV 2.5.0:MSV-ALL - Wrong Zookeeper port mentioned in CFG restore step");
mhwebMap.set("HV61173","MSV 2.5.0:MSV-ALL - msvladp backup and pmcounters backup not working");
mhwebMap.set("HV63164","MSV 2.5.0:MSV-ALL -Backup configuration file name is wrongly mentioned in manual Backup");
mhwebMap.set("HV60846","MSV 2.5.0:MSV-ALL - alarm details not updated automatically in the operation and maintenance window");
mhwebMap.set("HV63900","MSV 2.5.0:Getting exception while importing infrastructure ini file");
mhwebMap.set("HV73102","MSV 2.5.0:Getting exception while importing infrastructure ini file");
mhwebMap.set("HV64083","MSV2.4.1 Multisite installation not possible on 1651");
mhwebMap.set("HV50440","MSV 2.4.0:MSV-AUTH,MSV-IDM documentaion upgrade steps need to update");
mhwebMap.set("HV43965","MSV 2.3.0: Unable to upgrade from 2.2.0 to 2.3.0 for MSV-SUF");
mhwebMap.set("HV43957","MSV 2.3.0: Unable to upgrade from 2.2.0 to 2.3.0 for MSV-LGM");
mhwebMap.set("HV51485","MSV 2.3.0: Unable to start msvElasticsearch and msvLogstash After MSV-LGM deployment");
mhwebMap.set("HV44565","MSV 2.3.0: MSV-ALL Generate Initial CA Certificates steps not working");
mhwebMap.set("HV30965","MSV 2.1.5 & 2.2.0 Admin Portal - O & M Dashboard not showing the Topology and PM metrics on the GUI");
mhwebMap.set("HV30838","MSV 2.1.5:  Unable to open MSV gui  after perform OS hardening");
mhwebMap.set("HV28208","MSV 2.1.5:  Unable to login as msvsuf and msadm user");
mhwebMap.set("HV31209","MSV 2.1.5: Getting open wrong machine after clicking Sytem Upgarde Framework link in MSV admin GUI");
mhwebMap.set("HV18308","MSV 2.1.3:After MSV-ALL installation one of the process is down");
mhwebMap.set("HV17029","MSV 2.1.1:Multi Site SUF repo implementation not available");
mhwebMap.set("HV17315","MSV 2.1.1:Multisite Certificate Setup steps need to update");
mhwebMap.set("HV17057","MSV 2.1.1:Generate Initial CA Structure steps are not working");
mhwebMap.set("HV45962","MSV 2.1.1, CIL 2.0.2 Cassandra cyclic restart in MSV due to corrupt empty commit log file");
mhwebMap.set("HV57835","MSV -1633: Not able to use Active Alarm/Alarm History tab in adminportal.");
mhwebMap.set("HV47790","MSV -1633: Admin portal trace page not working");
mhwebMap.set("HT80414","MSV1436: Node selection in admin portal GUI");
mhwebMap.set("HV16390","MSV1436: Node selection in admin portal GUI");
mhwebMap.set("HU94258","MSV 1.3.1:Files are missing in /cvar/pmreports/indexed/ after stop and start msvPMParser");
mhwebMap.set("HU93241","MSV 1.3.1:Admin Portal GUI issues");
mhwebMap.set("HU89997","MSV 1.3.0:Getting exception while doing Admin portal, restore");
mhwebMap.set("HU86473","MSV 1.2.1:Getting Failure json logs after FM,LGM,IDM,AUTH,ADM successful deployment");
mhwebMap.set("HU77143","MSV 1.1.0:MSV_All old version(1.0.0)available in the 1.1.0 release");
mhwebMap.set("HU69467","MSV 1.0.1:Login to appcfgcli with error messages and exceptions");
mhwebMap.set("HU69473","MSV 1.0.1:GUI need to update with 16B label message");
mhwebMap.set("HU69133","MSV 1.0.1:Getting exception in the appcfgcli for show-entry command");
mhwebMap.set("HU58334","MSV 0.7.4:SUF daily backup getting failures and unable to decode suf.files.tar.gz.enc");
mhwebMap.set("HU56195","MSV 0.7.4:change default value to user defined values of disk1 and disk2_disksize LGM spreadsheet");
mhwebMap.set("HU56587","MSV 0.7.4:Alarms are not shown in Admin GUI");
mhwebMap.set("HU49603","MSV 0.7.3:Unable to sftp um_openam_clientsdk_config_files.tar.gz to  ZooKeeper server");
mhwebMap.set("HV18138","MSV 0.7.3: mscli gives incorrect exit codes");
mhwebMap.set("HT48024","MSV 0.6.4 - only 1 of 5 LSOAMGroup added to registry");
mhwebMap.set("HT80420","MSV 0.6.3: Events related to socket connections are flooding the zookeeper log");
mhwebMap.set("HT20576","MSV 0.6.0 All-in-one ZK purge script /opt/msv/scr/msvZkPurge.sh, saved as DOS file, errors out");
mhwebMap.set("HV67777","MSV: SR get-service-locations cli command creates service");
mhwebMap.set("HU96729","MSV:ldap exception when creating a user with empty ");
mhwebMap.set("HV64773","MSV: ESA Master Setup For MSV needs to aligne with common UMI solution");
mhwebMap.set("HV39974","MSV: Datacollector scripts takes very long time to run");
mhwebMap.set("HU85135","MSV: agent alarms do not  get shipped to MSV-ALL from msvagent");
mhwebMap.set("HV67772","MSV_ALL 0.6.11: Not possible to have two AdminPortal GUI running at the same time");
mhwebMap.set("HV75992","msserv user for base image");
mhwebMap.set("HS56602","mscli zookeeper commands - help text needs some corrections");
mhwebMap.set("HS79662","mscli zookeeper commands - help text needs some corrections");
mhwebMap.set("HS56094","mscli zk-export command fails (but does not complain) if --path specifies a path that does not exist");
mhwebMap.set("HS69748","mscli software changes to correct spelling and add consistency");
mhwebMap.set("HS84526","mscli software changes to correct spelling and add consistency");
mhwebMap.set("HU59002","More clarification needed on the restore instructions for files");
mhwebMap.set("HU56130","Missing procedures to recover loss data on HA openDJ (two opendj servers)");
mhwebMap.set("HS34333","Mismatch between the service parameters template (eharderning_template.xml) and playlists (cf_eharde");
mhwebMap.set("HV34524","mgmt-domain lock not being removed");
mhwebMap.set("HS27737","Management Server installation Guide - minor spelling, punctuation, and formatting changes needed");
mhwebMap.set("HS46295","Management Server Installation and Deployment - corrections needed");
mhwebMap.set("HS63350","Management Server Command Line Interface document needs to be syncd with mscli help");
mhwebMap.set("HS69737","Management Server Command Line Interface document - additional changes needed");
mhwebMap.set("HV96913","LSV-MSV 4.1.0: MSV Installation: esafm process status reported as FAILED_STARTUP - But is running");
mhwebMap.set("HV90283","LSV-MSV 2.9.0: During CFG upgrade zookeeper process down - potential problem with the SSH tunnels");
mhwebMap.set("HV81747","LSV-MSV 2.8.0: During CFG upgrade zookeeper process down - potential problem with the SSH tunnels");
mhwebMap.set("HV70967","LSV MSV 2.6.0: MSV Specific Fallback Procedure needs to be added to the SPI documenation");
mhwebMap.set("HV84003","LSV MSV 2.6.0: MSV Specific Fallback Procedure needs to be added to the SPI documenation");
mhwebMap.set("HV73152","LSV-EDM:1.12.0  [1711]  Progress bar of SUF job is not working during installation.");
mhwebMap.set("HV84657","LSV-D1717:Exernal certificate signing failure if SAN is not provided");
mhwebMap.set("HV70970","LSV CHA : [CHA 1.12.0] [MSV GUI] Incomplete text in Alarm Detail window if text has a semi-colon");
mhwebMap.set("HV59799","LSV/CIL 2.1.1:  MSV 2.1.5 oamnc agentÂ´MSV goes into cyclic restart if oamgroup with 0 nodes, found");
mhwebMap.set("HV33697","LSV:Service Registry 3.1.0 not handling Optional Data correctly");
mhwebMap.set("HV47815","LSV : MSV D1648: Notification History don't show all entries");
mhwebMap.set("HV90121","LSV:MSV-ALL:4.0.0 + 4.0.0_EP01A:Active Alarm got generated for MSV_AGENT.LGM with error code1247000.");
mhwebMap.set("HV91056","LSV:MSV-ALL:4.0.0 + 4.0.0_EP01A:Active Alarm got generated for MSV_AGENT.LGM with error code1247000.");
mhwebMap.set("HV89035","LSV:MSV-ALL:4.0.0:Misleading info in MSV-ALL 4.0.0 CPI  on 3PP log files under log management.");
mhwebMap.set("HV83012","LSV:MSV-ALL:2.9.0:Misleading info in MSV-ALL 2.9.0 CPI  on OS Hardening.");
mhwebMap.set("HV82949","LSV:MSV-ALL:2.8.0:Warning message occur while applying EP02A  in MSV-ALL 2.8.0.");
mhwebMap.set("HV83554","LSV:MSV-ALL:2.8.0:Warning message occur while applying EP02A  in MSV-ALL 2.8.0.");
mhwebMap.set("HV54272","LSV:MSV(2.4.1):Audit log path is wrongly displayed in MSV Admin portal GUI.");
mhwebMap.set("HV58170","LSV:MSV(2.4.1):Audit log path is wrongly displayed in MSV Admin portal GUI.");
mhwebMap.set("HV53401","LSV:MSV:MSV info on stateless or stateful is missing in Application common procedure on SPI document");
mhwebMap.set("HV66893","LSV:MSV:Misleading info on Admin CLI/MSCLI command in MSV-ALL(2.6.0) CPI Document.");
mhwebMap.set("HV73467","LSV:MSV:2.7.0:RM 17B label message is not visible in Admin portal GUI.");
mhwebMap.set("HV69665","LSV:MSV:2.6.0: MSV server got hanged, while trying to verify show-configuration command in MSCLI.");
mhwebMap.set("HV71057","LSV:MSV:2.6.0:Admin portal GUI need to update with 17B label message.");
mhwebMap.set("HV35257","LSV: Misleading info in CPI document on MSV All-in-one installation(2.2.0)");
mhwebMap.set("HV14077","LSV: Misleading info in CPI document on MSV All-in-one installation(2.1.1)");
mhwebMap.set("HV33328","LSV: delete-alarm-history does not delete alarms when there are more than 65535 entries");
mhwebMap.set("HW12216","LSV_MSV 4.2.0:msvScheduler service is restarting state while dpoing MSV-IDM installation");
mhwebMap.set("HV95604","LSV_MSV 4.1.0:open am user's export is failed");
mhwebMap.set("HV90923","LSV_MSV 4.0.0:vmware vsphere encrypted password information is missing");
mhwebMap.set("HV90918","LSV_MSV 4.0.0:Remove node script successfully running for unknown nodes");
mhwebMap.set("HV92472","LSV_MSV 4.0.0:Global Configuration Database Restore Failure(MSV_LDAP failure)");
mhwebMap.set("HV86374","LSV_MSV 2.9.0:Timeout exception while upgrading from 2.6.0 to 2.9.0 for MSV-CFG");
mhwebMap.set("HV86080","LSV_MSV 2.9.0:LGM and FM  rmbase-1.4.0-karaf.tar.gz upgrade steps are missing");
mhwebMap.set("HS85275","Logstash log fills the disk");
mhwebMap.set("HS59624","Log Shipping MAJOR failure alarm keeps incrementing");
mhwebMap.set("HV79064","logshipper json files need to be fixed");
mhwebMap.set("HS70602","Log Shipper cannot connect to redis server");
mhwebMap.set("HS78488","LE Data Collection Guide Linux Extension 1 User Guide needs more python script Information");
mhwebMap.set("HS34332","LCF playlists should not require root usage");
mhwebMap.set("HS21381","Kibana portion of Log Management does not work on physical server");
mhwebMap.set("HS31973","Kibana portion of Log Management does not work");
mhwebMap.set("HT40247","jboss alarm and check for non-existent data source should be removed");
mhwebMap.set("HS34330","Issue with NGEE hardening and unblocking ports");
mhwebMap.set("HS53350","Issue with NGEE hardening and unblocking ports");
mhwebMap.set("HV11529","Issue with keystore and truststore password contain single quote");
mhwebMap.set("HU41579","Issue with /opt/ngee/latest/base/bin/umconfigload.sh msv");
mhwebMap.set("HV66961","issue where cm-del did not delete oamFile");
mhwebMap.set("HV84365","ISSUE ");
mhwebMap.set("HS31017","Integration build not ready for handover to LSV, which is jeopardizing the 1409 drop to SLSV");
mhwebMap.set("HT88066","Inconcistent naming conventions used in MSV admin portal");
mhwebMap.set("HV62590","Inconcistent naming conventions used in MSV admin portal");
mhwebMap.set("HV90739","including tcu-init 1.2.0, MSV-CFG deploy failed where NMS Agent did not get configured");
mhwebMap.set("HT51133","HBASE high number of notifications causing  out of memory for CLI  and  Rest backend timeout issues");
mhwebMap.set("HT21813","hbase_svr_svr_cfg_PlayList playlist sometimes fails");
mhwebMap.set("HU41576","Hadoop configuration info not set in SUF and CFG");
mhwebMap.set("HV40788","Generate Initial CA Certificates documented command does not match file name");
mhwebMap.set("HV29520","following Group level OAM lock is not being removed after the Group level oamFile is proceeded succe");
mhwebMap.set("HU79954","FNT : NGEE zookeeper playlist zookeeper_svr_svr_cfg_PlayList.xml has problem");
mhwebMap.set("HV40385","Falback needs to be able to use scripts from the newer version release (vmmanager)");
mhwebMap.set("HT10662","Failed to execute, command: imploy module: EHardeningSetup reason: Failed To Update System Configura");
mhwebMap.set("HU94172","FAILED_START service status for ");
mhwebMap.set("HV54672","Execution of le_export_vm.xml playlist ends with a successful exit code but resulting VMDK file 404");
mhwebMap.set("HW10074","etcd service is not running after upgrade");
mhwebMap.set("HU95202","Error in zookeeper configure playlist");
mhwebMap.set("HV87232","error from the vmmanger attach disk operation due to extra space in diskfile parameter");
mhwebMap.set("HS21369","Error executing ./mscli command on a Management Server physical server.");
mhwebMap.set("HT13488","Epic 92 MSV 0.6.0 - misspelled words in mscli");
mhwebMap.set("HS97099","Epic 721 - Performance Report Collection failing to add activity/schedule to mscli scheduler");
mhwebMap.set("HS82799","Epic - 372 - ipv6 disabled getting avc denied messages for rpc.mountd;sendmail;rpc.statd;xauth");
mhwebMap.set("HS75270","Epic 368 - Log shipper Notifications do not display Additional Text");
mhwebMap.set("HT45282","Epic 368 - Log shipper Notifications do not display Additional Text");
mhwebMap.set("HS87217","Epic 354: Log Management - illegal path when zk connection is reset");
mhwebMap.set("HS82800","Epic 353 - Admin/Install guide need procedures to change msvsufadm password");
mhwebMap.set("HT57892","Epic 1317 - Post Hardening - Port 25 should not be enabled/listening on all DV's");
mhwebMap.set("HS75902","Epic 1154 - Admin Portal log viewing useability Enhancement");
mhwebMap.set("HS96023","Epic-1105-Healthcheck Incorrectly Fails for LogStash, ElasticSearch and LogShipper");
mhwebMap.set("HS82796","Epic-1083: OSA show-active-alarm not working even when active alarms exist");
mhwebMap.set("HS82792","Epic: 380,418,372: MSV Admin Guide - Remove ipv6 and backup/restore support");
mhwebMap.set("HS82794","Epic: 372 - NGEE needs playlist to enable/disable ipv6");
mhwebMap.set("HT13485","enter key is pressed at the mscli prompt, mscli will exit to system prompt");
mhwebMap.set("HV16657","EEA 16.0 ARK platform install: register-nodes-to-msv.xml fails");
mhwebMap.set("HW12003","deploy of MSV DVs for IPR enable testing, the deploy with IPR sometimes doesn't work (liteagclient)");
mhwebMap.set("HV94760","Deploy of DV with unencrypted disk fails");
mhwebMap.set("HV83558","Deploy fails due to json files in base image with certificatemanager 1.1.2 processing");
mhwebMap.set("HU37350","decommission-node gives exit code 13");
mhwebMap.set("HV99037","DB logs getting filled up on to 100% OpenDJ");
mhwebMap.set("HS96747","Data Collection Process Runs For Hours Until User Kills the Process");
mhwebMap.set("HU56134","Currently, recover loss data on  HA openDJ (two opendj servers) require restore on all the opendj se");
mhwebMap.set("HT63761","CSRF tokens across multiple JBOSS behind load balancer");
mhwebMap.set("HV16385","CPM N-LSV d1550: MSV_0.71 - Wrong SUF path in MSV CPI");
mhwebMap.set("HS76881","Corrections to MSV Operations and Maintenance document");
mhwebMap.set("HV14860","Configuration of Multisite SSO is not working.  This is blocking MSV release of Multisite SSO to RM");
mhwebMap.set("HU34799","Command execution playlist not found");
mhwebMap.set("HU34800","Command execution playlist not found");
mhwebMap.set("HU34801","Command execution playlist not found");
mhwebMap.set("HV32949","COBA LSV TD1639: clear-active-alarm command format issue");
mhwebMap.set("HV68098","COBA LSV TD1639: clear-active-alarm command format issue");
mhwebMap.set("HV71716","COBA:SHOW NODE on MSV returns the server as UP, even when server is OFF the network.");
mhwebMap.set("HV38711","Cleared alarms in GUI do not disappear");
mhwebMap.set("HV71712","Clear Alarm is not working in MSV admin portal");
mhwebMap.set("HU99898","CIL-DEV:  MSV-ALL  2.0.0 EP-Package not automatically installed on new deployments");
mhwebMap.set("HT91390","Changes needed for section 4 MSV Installation and deployment  Guide in Upgrade section");
mhwebMap.set("HV58160","CHA LSV:[CHA 1.7.0] VMMANAGER log has ERROR info after UPGRADE");
mhwebMap.set("HT80418","CHA-CORE - CLI audit files are not recovered when deleted");
mhwebMap.set("HT63522","Cha Access 0.20.0 - Service Registration is retried only for 10 minutes");
mhwebMap.set("HV67776","Cha Access 0.20.0 - Service Registration failure is not captured in log");
mhwebMap.set("HT31430","CHA 0.17.0-MSV 0.6.0: Activities in the schedule can not be removed");
mhwebMap.set("HS62398","CEL Admin GUI Error - Connection Failed CEL Server is not available");
mhwebMap.set("HU97097","Cassandra client - /opt/ngee/latest/cassandra/conf/.truststore (Permission denied)");
mhwebMap.set("HS58711","CA Playlist Failure: ngee_cert_auth/ngee_cert_authPlayList.xml/ngee_cert_auth_post_install.sh");
mhwebMap.set("HS58810","CA Install needs procedure to recover failure - ngee_cert_auth/ngee_cert_authPlayList.xml");
mhwebMap.set("HS58829","CA Install needs procedure to recover failure - ngee_cert_auth/ngee_cert_authPlayList.xml");
mhwebMap.set("HT18991","bsuc - 0A-09; Epic 1036 - Not all MSV services are configured to use DNS Server");
mhwebMap.set("HT23915","bsuc - 0A-09; Epic 1036 - Not all MSV services are configured to use DNS Server");
mhwebMap.set("HT45722","bsuc - 0A-09; Epic 1036 - Not all MSV services are configured to use DNS Server");
mhwebMap.set("HT31438","BSSF-CEL :LSV-TD1439| Unable to execute PUT and DELETE operations on CEL");
mhwebMap.set("HU50392","backup guide should say source in the /etc/profile.d/ngeeEnv.sh is needed to setup backup cron job.");
mhwebMap.set("HV77036","Auditlogs will not work for nsm way to generate PEM");
mhwebMap.set("HV87314","Apache Tomcat is filling up the space and OpenAM got crashed");
mhwebMap.set("HV29136","After scaling (deploying) an additional LGM I get OAMFile unload failed..  firstBootPriority missing");
mhwebMap.set("HU42033","After replacing an opendj server using procedure documented in Execution Environment Administration");
mhwebMap.set("HV32588","After a reload (cache reload) in browser, the GUI hangs in production environment");
mhwebMap.set("HV41828","After applying oamNC-1.7.2-1.el6.noarch.rpm with command rpm -Uvh, the oamnc service got removed");
mhwebMap.set("HV34145","After applying NGEE 2.0.4 EP02 as part of OVF creation, some of the jboss xlm files changes that was");
mhwebMap.set("HV30271","After 2.2.0 redeploy/upgrade  IDM database is out of sync");
mhwebMap.set("HS77809","Admin Portal receive misleading popup System Error on timout");
mhwebMap.set("HT29290","Admin Portal ->  OS LevelConfig  -> LoginProfileprofile -> AllowRootLogin does not work");
mhwebMap.set("HV91234","98_InitBootConfigurationUpgrade deactivates the old server too early in a stateless upgrade scenario");
mhwebMap.set("HT45283","50% CPU cycles and is causing process failues due to ");
mhwebMap.set("HT72857","20A-10-V0.6.7-- Overview of Deploying MSV with a Load Balancer is needed");
mhwebMap.set("HT54746","1317 - userid/password info needs centralization");
mhwebMap.set("HU20286","1.1 Kickstart file not available on 2.0 SUF Install server, nor procedures to follow to get it there");
mhwebMap.set("HT82457","0.6.9-  msvConfigurationAgent process Down on LGM");
mhwebMap.set("HV16389","0.6.9-  msvConfigurationAgent process Down on LGM");
mhwebMap.set("HT79036","0.6.9- Documentation: Install and Deploy guide-Sections 1.4.1 and 1.4.2 -Workflows Issues");
mhwebMap.set("HT83663","0.6.9- Changes required in the FunctionCtrl software where it forms the ZK connection string");
mhwebMap.set("HT82930","0.6.9- Backup, Restore and Recovery");
mhwebMap.set("HT66553","0.6.7 - Corrections/Updates to Installation and Deployment Guide for LSV.");
mhwebMap.set("HT62265","0.6.5- msvSecondNetwrkConfig.sh fails due to incorrect update to Known Issues Document");
mhwebMap.set("HT62292","0.6.5- Documentation: Install and Deploy guide Corrections/Comments");
mhwebMap.set("HT62290","0.6.5- Customer_Questionnaire_MSV-ADM.xlsx  has an incorrect row");
mhwebMap.set("HT30231","0.6.1 and 0.6.2 MSV nc-pending contains list of failed hardening configuration");
mhwebMap.set("HT32609","0.6.1 & 0.6.2 2nd reboot system closck changed after critical processes are up");
mhwebMap.set("HT38130","0.6.1 & 0.6.2 2nd reboot system closck changed after critical processes are up");
mhwebMap.set("HT30554","0.6.0 LogShipper duplicate events shipped");
mhwebMap.set("HT11832","0.4.4 - Log Shipper cannot connect to redis server");
mhwebMap.set("HV72820","[MSV] SDDIT 1708: Opendj expecting full services restart");
mhwebMap.set("HV16693","/dev/mapper/VolGroup-lv_root filled up");
mhwebMap.set("HT26486","Problem description:  RBS 6101 cabinet allows small creatures to enter. In the coastal area of Alabama small frogs are able to get into the RBS6101 cabinet and get stuck in the fans. This has happened over 20 times");

var ReviewsOptions = [
    '“Very stylish, great stay, great staff”',
    '“good hotel awful meals”',
    '“Need more attention to little things”',
    '“Lovely small hotel ideally situated to explore the area.”',
    '“Positive surprise”',
    '“Beautiful suite and resort”'];

module.exports = {
    searchHotels: function (destination) {
        return new Promise(function (resolve) {
                                var hotels = [];

                                mhwebMap.forEach(function (value, key) {
                                    var valueU = value.toUpperCase();
                                    if (valueU.indexOf(destination) !== -1) {
                                                  hotels.push({
                                                    name: key,
                                                       location: value,
                                                       rating: Math.ceil(Math.random() * 5),
                                                       numberOfReviews: 1,
                                                       priceStarting: Math.floor(Math.random() * 450) + 80,
                                                       image: 'https://placeholdit.imgix.net/~text?txtsize=35&txt=' + destination + '&w=500&h=260'
                                                     });
                                    }
                                });

            hotels.sort(function (a, b) { return a.name - b.name; });

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(hotels); }, 1000);
        });
    },

    searchComponent: function (destination) {
        return new Promise(function (resolve) {

            // Filling the hotels results manually just for demo purposes
            var hotels = [];
            for (var i = 1; i <= 1; i++) {
                hotels.push({
                    name: destination + ' ',
                    location: destination,
                    rating: Math.ceil(Math.random() * 5),
                    numberOfReviews: Math.floor(Math.random() * 5000) + 1,
                    priceStarting: Math.floor(Math.random() * 450) + 80,
                    image: 'https://placeholdit.imgix.net/~text?txtsize=35&txt=Hotel+' + i + '&w=500&h=260'
                });
            }

            hotels.sort(function (a, b) { return a.priceStarting - b.priceStarting; });

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(hotels); }, 1000);
        });
    },

    searchHotelReviews: function (hotelName) {
        return new Promise(function (resolve) {

            // Filling the review results manually just for demo purposes
            var reviews = [];
            for (var i = 0; i < 5; i++) {
                reviews.push({
                    title: ReviewsOptions[Math.floor(Math.random() * ReviewsOptions.length)],
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio magna, sodales vel ligula sit amet, vulputate vehicula velit. Nulla quis consectetur neque, sed commodo metus.',
                    image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
                });
            }

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(reviews); }, 1000);
        });
    }
};
