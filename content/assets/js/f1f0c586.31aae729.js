"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={id:"concepts-clients",title:"Pulsar Clients",sidebar_label:"Clients",original_id:"concepts-clients"},o=void 0,s={unversionedId:"concepts-clients",id:"version-2.6.2/concepts-clients",title:"Pulsar Clients",description:"Pulsar exposes a client API with language bindings for Java,  Go, Python, C++ and C#. The client API optimizes and encapsulates Pulsar's client-broker communication protocol and exposes a simple and intuitive API for use by applications.",source:"@site/versioned_docs/version-2.6.2/concepts-clients.md",sourceDirName:".",slug:"/concepts-clients",permalink:"/docs/2.6.2/concepts-clients",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/concepts-clients.md",tags:[],version:"2.6.2",frontMatter:{id:"concepts-clients",title:"Pulsar Clients",sidebar_label:"Clients",original_id:"concepts-clients"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"Architecture",permalink:"/docs/2.6.2/concepts-architecture-overview"},next:{title:"Geo Replication",permalink:"/docs/2.6.2/concepts-replication"}},c={},l=[{value:"Client setup phase",id:"client-setup-phase",level:2},{value:"Reader interface",id:"reader-interface",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar exposes a client API with language bindings for ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/client-libraries-java"},"Java"),",  ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/client-libraries-go"},"Go"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/client-libraries-python"},"Python"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/client-libraries-cpp"},"C++")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/client-libraries-dotnet"},"C#"),". The client API optimizes and encapsulates Pulsar's client-broker communication protocol and exposes a simple and intuitive API for use by applications."),(0,r.kt)("p",null,"Under the hood, the current official Pulsar client libraries support transparent reconnection and/or connection failover to brokers, queuing of messages until acknowledged by the broker, and heuristics such as connection retries with backoff."),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"custom-client-libraries"},"Custom client libraries"),(0,r.kt)("p",{parentName:"blockquote"},"If you'd like to create your own client library, we recommend consulting the documentation on Pulsar's custom ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/developing-binary-protocol"},"binary protocol"))),(0,r.kt)("h2",{id:"client-setup-phase"},"Client setup phase"),(0,r.kt)("p",null,"When an application wants to create a producer/consumer, the Pulsar client library will initiate a setup phase that is composed of two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client will attempt to determine the owner of the topic by sending an HTTP lookup request to the broker. The request could reach one of the active brokers which, by looking at the (cached) zookeeper metadata will know who is serving the topic or, in case nobody is serving it, will try to assign it to the least loaded broker."),(0,r.kt)("li",{parentName:"ol"},"Once the client library has the broker address, it will create a TCP connection (or reuse an existing connection from the pool) and authenticate it. Within this connection, client and broker exchange binary commands from a custom protocol. At this point the client will send a command to create producer/consumer to the broker, which will comply after having validated the authorization policy.")),(0,r.kt)("p",null,"Whenever the TCP connection breaks, the client will immediately re-initiate this setup phase and will keep trying with exponential backoff to re-establish the producer or consumer until the operation succeeds."),(0,r.kt)("h2",{id:"reader-interface"},"Reader interface"),(0,r.kt)("p",null,'In Pulsar, the "standard" ',(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/concepts-messaging#consumers"},"consumer interface")," involves using consumers to listen on ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/reference-terminology#topic"},"topics"),", process incoming messages, and finally acknowledge those messages when they've been processed.  Whenever a new subscription is created, it is initially positioned at the end of the topic (by default), and consumers associated with that subscription will begin reading with the first message created afterwards.  Whenever a consumer connects to a topic using a pre-existing subscription, it begins reading from the earliest message un-acked within that subscription.  In summary, with the consumer interface, subscription cursors are automatically managed by Pulsar in response to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/concepts-messaging#acknowledgement"},"message acknowledgements"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"reader interface")," for Pulsar enables applications to manually manage cursors. When you use a reader to connect to a topic---rather than a consumer---you need to specify ",(0,r.kt)("em",{parentName:"p"},"which")," message the reader begins reading from when it connects to a topic. When connecting to a topic, the reader interface enables you to begin with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"earliest")," available message in the topic"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"latest")," available message in the topic"),(0,r.kt)("li",{parentName:"ul"},'Some other message between the earliest and the latest. If you select this option, you\'ll need to explicitly provide a message ID. Your application will be responsible for "knowing" this message ID in advance, perhaps fetching it from a persistent data store or cache.')),(0,r.kt)("p",null,'The reader interface is helpful for use cases like using Pulsar to provide effectively-once processing semantics for a stream processing system. For this use case, it\'s essential that the stream processing system be able to "rewind" topics to a specific message and begin reading there. The reader interface provides Pulsar clients with the low-level abstraction necessary to "manually position" themselves within a topic.'),(0,r.kt)("p",null,"Internally, the reader interface is implemented as a consumer using an exclusive, non-durable subscription to the topic with a randomly-allocated name."),(0,r.kt)("p",null,"[ ",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT")," ]"),(0,r.kt)("p",null,"Unlike subscription/consumer, readers are non-durable in nature and will not prevent data in a topic from being deleted, thus it is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"strongly"))," advised that ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/cookbooks-retention-expiry"},"data retention")," be configured.   If data retention for a topic is not configured for an adequate amount of time, messages that the reader has not yet read might be deleted .  This will cause readers to essentially skip messages.  Configuring the data retention for a topic guarantees the reader with have a certain duration to read a message."),(0,r.kt)("p",null,'Please also note that a reader can have a "backlog", but the metric is just to allow users to know how behind the reader is and is not considered for any backlog quota calculations.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:a(16552).Z,width:"1289",height:"1720"})),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"non-partitioned-topics-only"},"Non-partitioned topics only"),(0,r.kt)("p",{parentName:"blockquote"},"The reader interface for Pulsar cannot currently be used with ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/concepts-messaging#partitioned-topics"},"partitioned topics"),".")),(0,r.kt)("p",null,"Here's a Java example that begins reading from the earliest available message on a topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Message;\nimport org.apache.pulsar.client.api.MessageId;\nimport org.apache.pulsar.client.api.Reader;\n\n// Create a reader on a topic and for a specific message (and onward)\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic("reader-api-test")\n    .startMessageId(MessageId.earliest)\n    .create();\n\nwhile (true) {\n    Message message = reader.readNext();\n\n    // Process the message\n}\n\n')),(0,r.kt)("p",null,"To create a reader that will read from the latest available message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(MessageId.latest)\n    .create();\n\n")),(0,r.kt)("p",null,"To create a reader that will read from some message between earliest and latest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nbyte[] msgIdBytes = // Some byte array\nMessageId id = MessageId.fromByteArray(msgIdBytes);\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(id)\n    .create();\n\n")))}u.isMDXComponent=!0},16552:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-reader-consumer-interfaces-4c838d3fa1b811f2c074087d44b991ea.png"}}]);