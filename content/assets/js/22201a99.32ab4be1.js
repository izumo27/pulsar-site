"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3770],{82030:function(e){e.exports=JSON.parse('{"pluginId":"release-notes","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"All Releases","href":"/release-notes/","docId":"all"},{"type":"link","label":"Timeline","href":"/release-notes/timeline","docId":"timeline"}]},"docs":{"all":{"id":"all","title":"All Releases","description":"Pulsar Release Notes","sidebar":"docs"},"legacy":{"id":"legacy","title":"Apache Pulsar Release Notes (Legacy)","description":"2.4.2"},"timeline":{"id":"timeline","title":"Timeline","description":"coming soon...","sidebar":"docs"},"versioned/client-cpp-2.5.1":{"id":"versioned/client-cpp-2.5.1","title":"Client CPP 2.5.1","description":"Issue 6461Avoid calling redeliverMessages() when message list is empty #6480"},"versioned/client-cpp-2.5.2":{"id":"versioned/client-cpp-2.5.2","title":"Client CPP 2.5.2","description":"C++] Fix message id error if messages were sent to a partitioned topic [#6938"},"versioned/client-cpp-2.6.1":{"id":"versioned/client-cpp-2.6.1","title":"Client CPP 2.6.1","description":"CPP client]Fix the issuer_url parsing failure in oauth2 [#7791"},"versioned/client-cpp-2.6.2":{"id":"versioned/client-cpp-2.6.2","title":"Client CPP 2.6.2","description":"cpp] Add Snappy library to Docker images for building C++ packages [#8086"},"versioned/client-cpp-2.7.1":{"id":"versioned/client-cpp-2.7.1","title":"Client CPP 2.7.1","description":"featuresupport python end to end encryption #9588"},"versioned/client-cpp-2.7.2":{"id":"versioned/client-cpp-2.7.2","title":"Client CPP 2.7.2","description":"Add CI to verify C++ client could be built on Windows #10387"},"versioned/client-cpp-2.7.3":{"id":"versioned/client-cpp-2.7.3","title":"Client CPP 2.7.3","description":"C++] Avoid sending flow requests with zero permits [#10506"},"versioned/client-cpp-2.7.4":{"id":"versioned/client-cpp-2.7.4","title":"Client CPP 2.7.4","description":"CI Force CMake to find Python2 #9690"},"versioned/client-cpp-2.8.1":{"id":"versioned/client-cpp-2.8.1","title":"Client CPP 2.8.1","description":"C++] Fix incorrect connect timeout implementation [#11889"},"versioned/client-cpp-2.8.2":{"id":"versioned/client-cpp-2.8.2","title":"Client CPP 2.8.2","description":"C++]Fix libcurl miss auth header when broker return 307 [#13112"},"versioned/client-cpp-2.9.0":{"id":"versioned/client-cpp-2.9.0","title":"Client CPP 2.9.0","description":"Remove python3 from vcpkg.json #12092"},"versioned/client-java-2.5.1":{"id":"versioned/client-java-2.5.1","title":"Client Java 2.5.1","description":"Issue 8294Some errors on the official website document of Pulsar Java client #8294 #8296"},"versioned/client-java-2.5.2":{"id":"versioned/client-java-2.5.2","title":"Client Java 2.5.2","description":"Issue 8294Some errors on the official website document of Pulsar Java client #8294 #8296"},"versioned/client-java-2.6.1":{"id":"versioned/client-java-2.6.1","title":"Client Java 2.6.1","description":"Issue 8294Some errors on the official website document of Pulsar Java client #8294 #8296"},"versioned/client-java-2.6.2":{"id":"versioned/client-java-2.6.2","title":"Client Java 2.6.2","description":"C++] Fix message id error when subscribing a single partition [#8341"},"versioned/client-java-2.6.3":{"id":"versioned/client-java-2.6.3","title":"Client Java 2.6.3","description":"Fix NPE when MultiTopicsConsumerImpl receives null value messages #9113"},"versioned/client-java-2.6.4":{"id":"versioned/client-java-2.6.4","title":"Client Java 2.6.4","description":"Compression must be applied during deferred schema preparation and enableBatching is enabled #9396"},"versioned/client-java-2.7.1":{"id":"versioned/client-java-2.7.1","title":"Client Java 2.7.1","description":"Add original info when publishing message to dead letter topic #9655"},"versioned/client-java-2.7.2":{"id":"versioned/client-java-2.7.2","title":"Client Java 2.7.2","description":"apiAdd get version command for pulsar rest api, pulsar-admin, pulsar-client #9975"},"versioned/client-java-2.7.3":{"id":"versioned/client-java-2.7.3","title":"Client Java 2.7.3","description":"fix non-persistent topic get partitioned metadata error on discovery #10806"},"versioned/client-java-2.7.4":{"id":"versioned/client-java-2.7.4","title":"Client Java 2.7.4","description":"Java Client] Send CloseProducer on timeout [#13161"},"versioned/client-java-2.8.1":{"id":"versioned/client-java-2.8.1","title":"Client Java 2.8.1","description":"Handle receiveAsync() failures in MultiTopicsConsumer #11843"},"versioned/client-java-2.8.2":{"id":"versioned/client-java-2.8.2","title":"Client Java 2.8.2","description":"Java Client] Fix producer data race to get cnx [#13176"},"versioned/client-java-2.9.0":{"id":"versioned/client-java-2.9.0","title":"Client Java 2.9.0","description":"Java Client] Use failPendingMessages to ensure proper cleanup [#12259"},"versioned/client-java-2.9.1":{"id":"versioned/client-java-2.9.1","title":"Client Java 2.9.1","description":"Java Client] Fix producer data race to get cnx [#13176"},"versioned/client-python-2.5.2":{"id":"versioned/client-python-2.5.2","title":"Client Python 2.5.2","description":"PY] Fix serialization of enums with json/avro schemas [#6808"},"versioned/client-python-2.6.2":{"id":"versioned/client-python-2.6.2","title":"Client Python 2.6.2","description":"Issue 7050 Limit enum34 installation via environment markers #8213"},"versioned/client-python-2.7.2":{"id":"versioned/client-python-2.7.2","title":"Client Python 2.7.2","description":"Python schema] Support python avro schema set default value. [#10265"},"versioned/client-python-2.7.4":{"id":"versioned/client-python-2.7.4","title":"Client Python 2.7.4","description":"Issue 11473] [Python] Fix fields that are ignoring the required key argument [#11508"},"versioned/client-python-2.8.1":{"id":"versioned/client-python-2.8.1","title":"Client Python 2.8.1","description":"Python Schema] Fix redefined Record or Enum in Python schema [#11595"},"versioned/client-python-2.8.2":{"id":"versioned/client-python-2.8.2","title":"Client Python 2.8.2","description":"Python Schema] Python schema support custom Avro configurations for Enum type [#12642"},"versioned/client-python-2.9.0":{"id":"versioned/client-python-2.9.0","title":"Client Python 2.9.0","description":"Python Schema] Support setting namespace for python schema [#12175"},"versioned/client-websocket-2.5.1":{"id":"versioned/client-websocket-2.5.1","title":"Client Websocket 2.5.1","description":"Websocket] Websocket doesn\'t set the correct cluster data [#6102"},"versioned/client-websocket-2.6.2":{"id":"versioned/client-websocket-2.6.2","title":"Client Websocket 2.6.2","description":"Websocket interface decode URL encoding #8072"},"versioned/client-websocket-2.6.3":{"id":"versioned/client-websocket-2.6.3","title":"Client Websocket 2.6.3","description":"Broker] add if-branch for SubscriptionBusyException [#9017"},"versioned/client-websocket-2.7.1":{"id":"versioned/client-websocket-2.7.1","title":"Client Websocket 2.7.1","description":"Broker] add if-branch for SubscriptionBusyException [#9017"},"versioned/client-websocket-2.7.2":{"id":"versioned/client-websocket-2.7.2","title":"Client Websocket 2.7.2","description":"WebSocket Client] Make the browser client support the token authentication [#9886"},"versioned/client-websocket-2.7.3":{"id":"versioned/client-websocket-2.7.3","title":"Client Websocket 2.7.3","description":"Fix webscoket TLS bug #11243"},"versioned/client-websocket-2.8.1":{"id":"versioned/client-websocket-2.8.1","title":"Client Websocket 2.8.1","description":"websocket] Query parameter \\"negativeAckRedeliveryDelay\\" should be effective even if DLQ is disabled [#11495"},"versioned/client-websocket-2.8.2":{"id":"versioned/client-websocket-2.8.2","title":"Client Websocket 2.8.2","description":"Add debug log for WebSocket. #12458"},"versioned/pulsar-2.5.1":{"id":"versioned/pulsar-2.5.1","title":"Apache Pulsar 2.5.1","description":"function"},"versioned/pulsar-2.5.2":{"id":"versioned/pulsar-2.5.2","title":"Apache Pulsar 2.5.2","description":"function"},"versioned/pulsar-2.6.1":{"id":"versioned/pulsar-2.6.1","title":"Apache Pulsar 2.6.1","description":"security"},"versioned/pulsar-2.6.2":{"id":"versioned/pulsar-2.6.2","title":"Apache Pulsar 2.6.2","description":"security"},"versioned/pulsar-2.6.3":{"id":"versioned/pulsar-2.6.3","title":"Apache Pulsar 2.6.3","description":"security"},"versioned/pulsar-2.6.4":{"id":"versioned/pulsar-2.6.4","title":"Apache Pulsar 2.6.4","description":"security"},"versioned/pulsar-2.7.1":{"id":"versioned/pulsar-2.7.1","title":"Apache Pulsar 2.7.1","description":"build"},"versioned/pulsar-2.7.2":{"id":"versioned/pulsar-2.7.2","title":"Apache Pulsar 2.7.2","description":"schemaregistry"},"versioned/pulsar-2.7.3":{"id":"versioned/pulsar-2.7.3","title":"Apache Pulsar 2.7.3","description":"metrics"},"versioned/pulsar-2.7.4":{"id":"versioned/pulsar-2.7.4","title":"Apache Pulsar 2.7.4","description":"security"},"versioned/pulsar-2.8.1":{"id":"versioned/pulsar-2.8.1","title":"Apache Pulsar 2.8.1","description":"security"},"versioned/pulsar-2.8.2":{"id":"versioned/pulsar-2.8.2","title":"Apache Pulsar 2.8.2","description":"security"},"versioned/pulsar-2.9.0":{"id":"versioned/pulsar-2.9.0","title":"Apache Pulsar 2.9.0","description":"schema"},"versioned/pulsar-2.9.1":{"id":"versioned/pulsar-2.9.1","title":"Apache Pulsar 2.9.1","description":"security"},"versioned/pulsar-client-go-0.1.0":{"id":"versioned/pulsar-client-go-0.1.0","title":"Pulsar Client Go","description":"Client"},"versioned/pulsar-client-go-0.1.1":{"id":"versioned/pulsar-client-go-0.1.1","title":"Pulsar Client Go","description":"Improve"},"versioned/pulsar-client-go-0.2.0":{"id":"versioned/pulsar-client-go-0.2.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.3.0":{"id":"versioned/pulsar-client-go-0.3.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.4.0":{"id":"versioned/pulsar-client-go-0.4.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.5.0":{"id":"versioned/pulsar-client-go-0.5.0","title":"Pulsar Client Go","description":"Fixes"},"versioned/pulsar-client-go-0.6.0":{"id":"versioned/pulsar-client-go-0.6.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.7.0":{"id":"versioned/pulsar-client-go-0.7.0","title":"Pulsar Client Go","description":"Feature"},"versioned/pulsar-client-go-0.8.0":{"id":"versioned/pulsar-client-go-0.8.0","title":"Pulsar Client Go","description":"What\'s Changed"},"versioned/pulsar-client-go-0.8.1":{"id":"versioned/pulsar-client-go-0.8.1","title":"Pulsar Client Go","description":"What\'s Changed"},"versioned/pulsar-client-node-1.0.0":{"id":"versioned/pulsar-client-node-1.0.0","title":"Pulsar Client Node","description":"1.0.0 &mdash; 2019-09-03"},"versioned/pulsar-client-node-1.1.0":{"id":"versioned/pulsar-client-node-1.1.0","title":"Pulsar Client Node","description":"1.1.0 &mdash; 2020-02-18"},"versioned/pulsar-client-node-1.2.0":{"id":"versioned/pulsar-client-node-1.2.0","title":"Pulsar Client Node","description":"1.2.0 &mdash; 2020-08-12"},"versioned/pulsar-client-node-1.3.0":{"id":"versioned/pulsar-client-node-1.3.0","title":"Pulsar Client Node","description":"1.3.0 &mdash; 2021-03-18"},"versioned/pulsar-client-node-1.3.1":{"id":"versioned/pulsar-client-node-1.3.1","title":"Pulsar Client Node","description":"1.3.1 &mdash; 2021-09-17"},"versioned/pulsar-client-node-1.3.2":{"id":"versioned/pulsar-client-node-1.3.2","title":"Pulsar Client Node","description":"1.3.2 &mdash; 2021-10-19"},"versioned/pulsar-client-node-1.4.0":{"id":"versioned/pulsar-client-node-1.4.0","title":"Pulsar Client Node","description":"1.4.0 &mdash; 2021-08-03"},"versioned/pulsar-client-node-1.4.1":{"id":"versioned/pulsar-client-node-1.4.1","title":"Pulsar Client Node","description":"1.4.1 &mdash; 2021-10-19"},"versioned/pulsar-client-node-1.5.0":{"id":"versioned/pulsar-client-node-1.5.0","title":"Pulsar Client Node","description":"1.5.0 &mdash; 2021-12-20"},"versioned/pulsar-client-node-1.6.2":{"id":"versioned/pulsar-client-node-1.6.2","title":"Pulsar Client Node","description":"1.6.2 &mdash; 2022-03-10"},"versioned/pulsar-cs-0.10.0":{"id":"versioned/pulsar-cs-0.10.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-0.10.1":{"id":"versioned/pulsar-cs-0.10.1","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-0.11.0":{"id":"versioned/pulsar-cs-0.11.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-0.9.6":{"id":"versioned/pulsar-cs-0.9.6","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-0.9.7":{"id":"versioned/pulsar-cs-0.9.7","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-1.0.0":{"id":"versioned/pulsar-cs-1.0.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-1.0.1":{"id":"versioned/pulsar-cs-1.0.1","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-1.0.2":{"id":"versioned/pulsar-cs-1.0.2","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-1.1.0":{"id":"versioned/pulsar-cs-1.1.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-1.1.1":{"id":"versioned/pulsar-cs-1.1.1","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-1.1.2":{"id":"versioned/pulsar-cs-1.1.2","title":"Pulsar DotPulsar","description":"Fixed"},"versioned/pulsar-cs-2.0.0":{"id":"versioned/pulsar-cs-2.0.0","title":"Pulsar DotPulsar","description":""},"versioned/pulsar-cs-2.0.1":{"id":"versioned/pulsar-cs-2.0.1","title":"Pulsar DotPulsar","description":"Changed"},"versioned/pulsar-cs-2.1.0":{"id":"versioned/pulsar-cs-2.1.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-2.2.0":{"id":"versioned/pulsar-cs-2.2.0","title":"Pulsar DotPulsar","description":"Added"},"versioned/pulsar-cs-2.3.0":{"id":"versioned/pulsar-cs-2.3.0","title":"Pulsar DotPulsar","description":"Added"}}}')}}]);