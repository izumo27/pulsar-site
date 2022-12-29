"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const a={id:"txn-why",title:"Why transactions?",sidebar_label:"Why transactions?",original_id:"txn-why"},o=void 0,i={unversionedId:"txn-why",id:"version-2.10.x/txn-why",title:"Why transactions?",description:"Pulsar transactions (txn) enable event streaming applications to consume, process, and produce messages in one atomic operation. The reason for developing this feature can be summarized as below.",source:"@site/versioned_docs/version-2.10.x/txn-why.md",sourceDirName:".",slug:"/txn-why",permalink:"/docs/2.10.x/txn-why",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/txn-why.md",tags:[],version:"2.10.x",frontMatter:{id:"txn-why",title:"Why transactions?",sidebar_label:"Why transactions?",original_id:"txn-why"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Aliyun OSS offloader",permalink:"/docs/2.10.x/tiered-storage-aliyun"},next:{title:"What are transactions?",permalink:"/docs/2.10.x/txn-what"}},c={},l=[{value:"Demand of stream processing",id:"demand-of-stream-processing",level:2},{value:"Limitation of idempotent producer",id:"limitation-of-idempotent-producer",level:2}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Pulsar transactions (txn) enable event streaming applications to consume, process, and produce messages in one atomic operation. The reason for developing this feature can be summarized as below."),(0,s.kt)("h2",{id:"demand-of-stream-processing"},"Demand of stream processing"),(0,s.kt)("p",null,"The demand for stream processing applications with stronger processing guarantees has grown along with the rise of stream processing. For example, in the financial industry, financial institutions use stream processing engines to process debits and credits for users. This type of use case requires that every message is processed exactly once, without exception."),(0,s.kt)("p",null,"In other words, if a stream processing application consumes message A and\nproduces the result as a message B (B = f(A)), then exactly-once processing\nguarantee means that A can only be marked as consumed if and only if B is\nsuccessfully produced, and vice versa."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(99589).Z,width:"1638",height:"812"})),(0,s.kt)("p",null,"The Pulsar transactions API strengthens the message delivery semantics and the processing guarantees for stream processing. It enables stream processing applications to consume, process, and produce messages in one atomic operation. That means, a batch of messages in a transaction can be received from, produced to and acknowledged by many topic partitions. All the operations involved in a transaction succeed or fail as one single unit."),(0,s.kt)("h2",{id:"limitation-of-idempotent-producer"},"Limitation of idempotent producer"),(0,s.kt)("p",null,"Avoiding data loss or duplication can be achieved by using the Pulsar idempotent producer, but it does not provide guarantees for writes across multiple partitions. "),(0,s.kt)("p",null,"In Pulsar, the highest level of message delivery guarantee is using an ",(0,s.kt)("a",{parentName:"p",href:"/docs/2.10.x/concepts-messaging#producer-idempotency"},"idempotent producer")," with the exactly once semantic at one single partition, that is, each message is persisted exactly once without data loss and duplication. However, there are some limitations in this solution:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Due to the monotonic increasing sequence ID, this solution only works on a single partition and within a single producer session (that is, for producing one message), so there is no atomicity when producing multiple messages to one or multiple partitions. "),(0,s.kt)("p",{parentName:"li"},"In this case, if there are some failures  (for example, client / broker / bookie crashes, network failure, and more) in the process of producing and receiving messages, messages are re-processed and re-delivered, which may cause data loss or data duplication: "),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the producer: if the producer retry sending messages, some messages are persisted multiple times; if the producer does not retry sending messages, some messages are persisted once and other messages are lost. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the consumer: since the consumer does not know whether the broker has received messages or not, the consumer may not retry sending acks, which causes it to receive duplicate messages.  ")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Similarly, for Pulsar Function, it only guarantees exactly once semantics for an idempotent function on a single event rather than processing multiple events or producing multiple results that can happen exactly. "),(0,s.kt)("p",{parentName:"li"},"For example, if a function accepts multiple events and produces one result (for example, window function), the function may fail between producing the result and acknowledging the incoming messages, or even between acknowledging individual events, which causes all (or some) incoming messages to be re-delivered and reprocessed, and a new result is generated."),(0,s.kt)("p",{parentName:"li"},"However, many scenarios need atomic guarantees across multiple partitions and sessions.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Consumers need to rely on more mechanisms to acknowledge (ack) messages once. "),(0,s.kt)("p",{parentName:"li"},"For example, consumers are required to store the MessageID along with its acked state. After the topic is unloaded, the subscription can recover the acked state of this MessageID in memory when the topic is loaded again."))))}d.isMDXComponent=!0},99589:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/txn-1-26fb642d38d5603bf6f7e0c5811d52c7.png"}}]);