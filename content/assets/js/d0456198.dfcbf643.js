"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[47965],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(g,a(a({ref:t},c),{},{components:o})):n.createElement(g,a({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},43094:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={id:"cookbooks-partitioned",title:"Partitioned topics",sidebar_label:"Partitioned Topics",original_id:"cookbooks-partitioned"},a=void 0,s={unversionedId:"cookbooks-partitioned",id:"version-2.6.2/cookbooks-partitioned",title:"Partitioned topics",description:"By default, Pulsar topics are served by a single broker. Using only a single broker limits a topic's maximum throughput. Partitioned topics are a special type of topic that can span multiple brokers and thus allow for much higher throughput. For an explanation of how partitioned topics work, see the Partitioned Topics concepts.",source:"@site/versioned_docs/version-2.6.2/cookbooks-partitioned.md",sourceDirName:".",slug:"/cookbooks-partitioned",permalink:"/docs/2.6.2/cookbooks-partitioned",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/cookbooks-partitioned.md",tags:[],version:"2.6.2",frontMatter:{id:"cookbooks-partitioned",title:"Partitioned topics",sidebar_label:"Partitioned Topics",original_id:"cookbooks-partitioned"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"Non-persistent messaging",permalink:"/docs/2.6.2/cookbooks-non-persistent"},next:{title:"Message retention and expiry",permalink:"/docs/2.6.2/cookbooks-retention-expiry"}},p={},l=[{value:"Publish to partitioned topics",id:"publish-to-partitioned-topics",level:2},{value:"Routing mode",id:"routing-mode",level:3},{value:"Custom message router",id:"custom-message-router",level:3},{value:"How to choose partitions when using a key",id:"how-to-choose-partitions-when-using-a-key",level:3},{value:"Manage partitioned topics",id:"manage-partitioned-topics",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, Pulsar topics are served by a single broker. Using only a single broker limits a topic's maximum throughput. ",(0,r.kt)("em",{parentName:"p"},"Partitioned topics")," are a special type of topic that can span multiple brokers and thus allow for much higher throughput. For an explanation of how partitioned topics work, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/concepts-messaging#partitioned-topics"},"Partitioned Topics")," concepts."),(0,r.kt)("p",null,"You can publish to partitioned topics using Pulsar client libraries and you can ",(0,r.kt)("a",{parentName:"p",href:"#managing-partitioned-topics"},"create and manage")," partitioned topics using Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/admin-api-overview"},"admin API"),"."),(0,r.kt)("h2",{id:"publish-to-partitioned-topics"},"Publish to partitioned topics"),(0,r.kt)("p",null,"When publishing to partitioned topics, you do not need to explicitly specify a ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/concepts-messaging#routing-modes"},"routing mode")," when you create a new producer. If you do not specify a routing mode, the round robin route mode is used. Take ",(0,r.kt)("a",{parentName:"p",href:"#java"},"Java")," as an example."),(0,r.kt)("p",null,"Publishing messages to partitioned topics in the Java client works much like ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/client-libraries-java#using-producers"},"publishing to normal topics"),". The difference is that you need to specify either one of the currently available message routers or a custom router."),(0,r.kt)("h3",{id:"routing-mode"},"Routing mode"),(0,r.kt)("p",null,"You can specify the routing mode in the ProducerConfiguration object that you use to configure your producer. Three options are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SinglePartition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RoundRobinPartition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CustomPartition"))),(0,r.kt)("p",null,"The following is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString pulsarBrokerRootUrl = "pulsar://localhost:6650";\nString topic = "persistent://my-tenant/my-namespace/my-topic";\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl(pulsarBrokerRootUrl).build();\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .messageRoutingMode(MessageRoutingMode.SinglePartition)\n        .create();\nproducer.send("Partitioned topic message".getBytes());\n\n')),(0,r.kt)("h3",{id:"custom-message-router"},"Custom message router"),(0,r.kt)("p",null,"To use a custom message router, you need to provide an implementation of the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/MessageRouter"},"MessageRouter")," interface, which has just one ",(0,r.kt)("inlineCode",{parentName:"p"},"choosePartition")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\npublic interface MessageRouter extends Serializable {\n    int choosePartition(Message msg);\n}\n\n")),(0,r.kt)("p",null,"The following router routes every message to partition 10:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class AlwaysTenRouter implements MessageRouter {\n    public int choosePartition(Message msg) {\n        return 10;\n    }\n}\n\n")),(0,r.kt)("p",null,"With that implementation in hand, you can send"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nString pulsarBrokerRootUrl = "pulsar://localhost:6650";\nString topic = "persistent://my-tenant/my-cluster-my-namespace/my-topic";\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl(pulsarBrokerRootUrl).build();\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .messageRouter(new AlwaysTenRouter())\n        .create();\nproducer.send("Partitioned topic message".getBytes());\n\n')),(0,r.kt)("h3",{id:"how-to-choose-partitions-when-using-a-key"},"How to choose partitions when using a key"),(0,r.kt)("p",null,"If a message has a key, it supersedes the round robin routing policy. The following example illustrates how to choose partition when you use a key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n// If the message has a key, it supersedes the round robin routing policy\n        if (msg.hasKey()) {\n            return signSafeMod(hash.makeHash(msg.getKey()), topicMetadata.numPartitions());\n        }\n\n        if (isBatchingEnabled) { // if batching is enabled, choose partition on `partitionSwitchMs` boundary.\n            long currentMs = clock.millis();\n            return signSafeMod(currentMs / partitionSwitchMs + startPtnIdx, topicMetadata.numPartitions());\n        } else {\n            return signSafeMod(PARTITION_INDEX_UPDATER.getAndIncrement(this), topicMetadata.numPartitions());\n        }\n\n")),(0,r.kt)("h2",{id:"manage-partitioned-topics"},"Manage partitioned topics"),(0,r.kt)("p",null,"You can use Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/admin-api-overview"},"admin API")," to create and manage ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.2/admin-api-partitioned-topics"},"partitioned topics"),"."))}d.isMDXComponent=!0}}]);