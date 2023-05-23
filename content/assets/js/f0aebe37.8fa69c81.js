"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[56629],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},51959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={id:"client-libraries-java-use",title:"Use a Java client",sidebar_label:"Use"},o=void 0,i={unversionedId:"client-libraries-java-use",id:"version-3.0.x/client-libraries-java-use",title:"Use a Java client",description:"Create a producer",source:"@site/versioned_docs/version-3.0.x/client-libraries-java-use.md",sourceDirName:".",slug:"/client-libraries-java-use",permalink:"/docs/3.0.x/client-libraries-java-use",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/client-libraries-java-use.md",tags:[],version:"3.0.x",frontMatter:{id:"client-libraries-java-use",title:"Use a Java client",sidebar_label:"Use"},sidebar:"docsSidebar",previous:{title:"Initialize",permalink:"/docs/3.0.x/client-libraries-java-initialize"},next:{title:"C++ client",permalink:"/docs/3.0.x/client-libraries-cpp"}},c={},l=[{value:"Create a producer",id:"create-a-producer",level:2},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Create a reader",id:"create-a-reader",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-a-producer"},"Create a producer"),(0,r.kt)("p",null,"Once you've instantiated a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/3.0.x/org/apache/pulsar/client/api/PulsarClient"},"PulsarClient")," object, you can create a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/3.0.x/org/apache/pulsar/client/api/Producer"},"Producer")," for a specific Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-terminology#topic"},"topic"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<byte[]> producer = client.newProducer()\n        .topic("my-topic")\n        .create();\n\n// You can then send messages to the broker and topic you specified:\nproducer.send("My message".getBytes());\n')),(0,r.kt)("p",null,"By default, producers produce messages that consist of byte arrays. You can produce different types by specifying a message ",(0,r.kt)("a",{parentName:"p",href:"#schema"},"schema"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Producer<String> stringProducer = client.newProducer(Schema.STRING)\n        .topic("my-topic")\n        .create();\nstringProducer.send("My message");\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure that you close your producers, consumers, and clients when you do not need them.")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"producer.close();\nconsumer.close();\nclient.close();\n"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Close operations can also be asynchronous:")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'producer.closeAsync()\n   .thenRun(() -> System.out.println("Producer closed"))\n   .exceptionally((ex) -> {\n       System.err.println("Failed to close producer: " + ex);\n       return null;\n   });\n'))),(0,r.kt)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,r.kt)("p",null,"In Pulsar, consumers subscribe to topics and handle messages that producers publish to those topics. You can instantiate a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-terminology#consumer"},"consumer")," by first instantiating a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/3.0.x/org/apache/pulsar/client/api/PulsarClient"},"PulsarClient")," object and passing it a URL for a Pulsar broker (as ",(0,r.kt)("a",{parentName:"p",href:"#client-configuration"},"above"),")."),(0,r.kt)("p",null,"Once you've instantiated a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/3.0.x/org/apache/pulsar/client/api/PulsarClient"},"PulsarClient")," object, you can create a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/3.0.x/org/apache/pulsar/client/api/Consumer"},"Consumer")," by specifying a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-terminology#topic"},"topic")," and a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/concepts-messaging#subscription-types"},"subscription"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Consumer consumer = client.newConsumer()\n        .topic("my-topic")\n        .subscriptionName("my-subscription")\n        .subscribe();\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method will auto-subscribe the consumer to the specified topic and subscription. One way to make the consumer listen to the topic is to set up a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop. In this example loop, the consumer listens for messages, prints the contents of any received message, and then ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-terminology#acknowledgment-ack"},"acknowledges")," that the message has been processed. If the processing logic fails, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/reference-terminology#acknowledgment-ack"},"negative acknowledgment")," to redeliver the message later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'while (true) {\n  // Wait for a message\n  Message msg = consumer.receive();\n\n  try {\n      // Do something with the message\n      System.out.println("Message received: " + new String(msg.getData()));\n\n      // Acknowledge the message\n      consumer.acknowledge(msg);\n  } catch (Exception e) {\n      // Message failed to process, redeliver later\n      consumer.negativeAcknowledge(msg);\n  }\n}\n')),(0,r.kt)("p",null,"If you don't want to block your main thread but constantly listen for new messages, consider using a ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageListener"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageListener")," uses a thread pool inside the client. You can set the number of threads for message listeners in the ClientBuilder. The ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageListener")," will use a thread pool inside the PulsarClient. You can set the number of threads to use for message listeners in the ClientBuilder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'MessageListener myMessageListener = (consumer, msg) -> {\n  try {\n      System.out.println("Message received: " + new String(msg.getData()));\n      consumer.acknowledge(msg);\n  } catch (Exception e) {\n      consumer.negativeAcknowledge(msg);\n  }\n}\n\nConsumer consumer = client.newConsumer()\n     .topic("my-topic")\n     .subscriptionName("my-subscription")\n     .messageListener(myMessageListener)\n     .subscribe();\n')),(0,r.kt)("h2",{id:"create-a-reader"},"Create a reader"),(0,r.kt)("p",null,"With the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/concepts-clients#reader-interface"},"reader interface"),', Pulsar clients can "manually position" themselves within a topic and read all messages from a specified message onward. The Pulsar API for Java enables you to create ',(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/3.0.x/org/apache/pulsar/client/api/Reader"},"Reader")," objects by specifying a topic and a ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/3.0.x/org/apache/pulsar/client/api/MessageId"},"MessageId"),"."),(0,r.kt)("p",null,"The following is an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"byte[] msgIdBytes = // Some message ID byte array\nMessageId id = MessageId.fromByteArray(msgIdBytes);\nReader reader = pulsarClient.newReader()\n        .topic(topic)\n        .startMessageId(id)\n        .create();\n\nwhile (true) {\n    Message message = reader.readNext();\n    // Process message\n}\n")),(0,r.kt)("p",null,"In the example above, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," object is instantiated for a specific topic and message (by ID); the reader iterates over each message in the topic after the message is identified by ",(0,r.kt)("inlineCode",{parentName:"p"},"msgIdBytes")," (how that value is obtained depends on the application)."),(0,r.kt)("p",null,"The code sample above shows pointing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," object to a specific message (by ID), but you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageId.earliest")," to point to the earliest available message on the topic of ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageId.latest")," to point to the most recent available message."))}m.isMDXComponent=!0}}]);