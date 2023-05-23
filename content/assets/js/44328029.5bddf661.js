"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[46260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={id:"txn-advanced-features",title:"Advanced features",sidebar_label:"Advanced features"},i=void 0,s={unversionedId:"txn-advanced-features",id:"version-3.0.x/txn-advanced-features",title:"Advanced features",description:"You can use the following advanced features with transactions in Pulsar.",source:"@site/versioned_docs/version-3.0.x/txn-advanced-features.md",sourceDirName:".",slug:"/txn-advanced-features",permalink:"/docs/3.0.x/txn-advanced-features",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/txn-advanced-features.md",tags:[],version:"3.0.x",frontMatter:{id:"txn-advanced-features",title:"Advanced features",sidebar_label:"Advanced features"},sidebar:"docsSidebar",previous:{title:"Get started",permalink:"/docs/3.0.x/txn-use"},next:{title:"Monitoring",permalink:"/docs/3.0.x/txn-monitor"}},c={},l=[{value:"Ack batch messages",id:"ack-batch-messages",level:2},{value:"Enable authentication",id:"enable-authentication",level:2},{value:"Guarantee exactly-once semantics",id:"guarantee-exactly-once-semantics",level:2},{value:"Related topics",id:"related-topics",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can use the following advanced features with transactions in Pulsar."),(0,r.kt)("h2",{id:"ack-batch-messages"},"Ack batch messages"),(0,r.kt)("p",null,"If you want to acknowledge batch messages with transactions, set ",(0,r.kt)("inlineCode",{parentName:"p"},"acknowledgmentAtBatchIndexLevelEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/broker.conf"},(0,r.kt)("inlineCode",{parentName:"a"},"broker.conf"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/conf/standalone.conf"},(0,r.kt)("inlineCode",{parentName:"a"},"standalone.conf"))," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"acknowledgmentAtBatchIndexLevelEnabled=true\n")),(0,r.kt)("p",null,"This example enables batch messages ack in transactions in the consumer builder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Consumer<byte[]> consumer = pulsarClient\n    .newConsumer()\n    .topic(transferTopic)\n    .subscriptionName("transaction-sub")\n    .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n    .subscriptionType(SubscriptionType.Shared)\n    .enableBatchIndexAcknowledgment(true) // enable batch index acknowledgment\n    .subscribe();\n')),(0,r.kt)("h2",{id:"enable-authentication"},"Enable authentication"),(0,r.kt)("p",null,"If you want to enable authentication with transactions, follow the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/admin-api-topics#grant-permission"},'Grant "consume" permission')," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"persistent://pulsar/system/transaction_coordinator_assign")," topic.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"security-overview/#authentication"},"Configure authentication")," in a Pulsar client."))),(0,r.kt)("h2",{id:"guarantee-exactly-once-semantics"},"Guarantee exactly-once semantics"),(0,r.kt)("p",null,"If you want to guarantee exactly-once semantics with transactions, you can ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.x/cookbooks-deduplication#enable-message-deduplication-at-namespace-or-topic-level"},"enable message deduplication at the broker, namespace, or topic level"),"."),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To get up quickly, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/txn-use"},"Pulsar transactions - Get started"),".")))}d.isMDXComponent=!0}}]);