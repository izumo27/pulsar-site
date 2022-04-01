"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9022],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(r),m=n,d=h["".concat(u,".").concat(m)]||h[m]||s[m]||p;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},63022:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),o=["components"],i={id:"pulsar-2.9.1",title:"Apache Pulsar 2.9.1",sidebar_label:"Apache Pulsar 2.9.1"},u=void 0,l={unversionedId:"versioned/pulsar-2.9.1",id:"versioned/pulsar-2.9.1",title:"Apache Pulsar 2.9.1",description:"security",source:"@site/release-notes/versioned/pulsar-2.9.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.9.1",permalink:"/release-notes/versioned/pulsar-2.9.1",tags:[],version:"current",frontMatter:{id:"pulsar-2.9.1",title:"Apache Pulsar 2.9.1",sidebar_label:"Apache Pulsar 2.9.1"}},c={},s=[{value:"security",id:"security",level:2},{value:"broker",id:"broker",level:2},{value:"key-shared",id:"key-shared",level:2},{value:"compaction",id:"compaction",level:2},{value:"function",id:"function",level:2}],h={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"security"},"security"),(0,p.kt)("p",null,"Bump log4j to 2.16.0 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13277"},"#13277"),(0,p.kt)("br",{parentName:"p"}),"\n","Bump log4j to 2.15.0 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13226"},"#13226"),(0,p.kt)("br",{parentName:"p"}),"\n","[Authorization]"," Revert new AuthorizationProvider method ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13133"},"#13133"),(0,p.kt)("br",{parentName:"p"}),"\n","[Security]"," Upgrade OkHttp3 to address CVE-2021-0341 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13065"},"#13065"),(0,p.kt)("br",{parentName:"p"}),"\n","[Authorization]"," Support CLEAR_BACKLOG namespace op after enable auth ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12963"},"#12963"),"  "),(0,p.kt)("h2",{id:"broker"},"broker"),(0,p.kt)("p",null,"Close old compacted ledger when open new. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13210"},"#13210"),(0,p.kt)("br",{parentName:"p"}),"\n","[Broker]"," Remove tenant permission verification when list partitioned-topic ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13138"},"#13138"),(0,p.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix and improve topic ownership assignment ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13069"},"#13069"),(0,p.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix LeaderElectionService.getCurrentLeader and add support for empheralOwner in MockZooKeeper ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13066"},"#13066"),(0,p.kt)("br",{parentName:"p"}),"\n","Do not reuse the Failed OpAddEntry object which lead bundle unloading timeout. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12993"},"#12993"),(0,p.kt)("br",{parentName:"p"}),"\n","[Authorization]"," Support UNSUBSCRIBE namespace op after enable auth ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12742"},"#12742"),(0,p.kt)("br",{parentName:"p"}),"\n","[Managed Ledger]"," Fix the incorrect total size when BrokerEntryMetadata is enabled ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12714"},"#12714"),(0,p.kt)("br",{parentName:"p"}),"\n","[ML]"," Avoid passing OpAddEntry across a thread boundary in asyncAddEntry ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12606"},"#12606"),(0,p.kt)("br",{parentName:"p"}),"\n","[ML]"," Add OpAddEntry to pendingAddEntries after the state check ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12570"},"#12570"),(0,p.kt)("br",{parentName:"p"}),"\n","[broker]"," Cancel scheduled tasks when deleting ManagedLedgerImpl ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12565"},"#12565"),(0,p.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix messageDedup delete inactive producer name ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12493"},"#12493"),(0,p.kt)("br",{parentName:"p"}),"\n","[managedledger]"," NPE on OpAddEntry while ManagedLedger is closing ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12364"},"#12364"),"  "),(0,p.kt)("h2",{id:"key-shared"},"key-shared"),(0,p.kt)("p",null,"[Issue 12885]","Fix unordered consuming case in Key_Shared subscription. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12890"},"#12890"),"  "),(0,p.kt)("h2",{id:"compaction"},"compaction"),(0,p.kt)("p",null,"Fix the reader skips compacted data which original ledger been removed ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12522"},"#12522"),(0,p.kt)("br",{parentName:"p"}),"\n","Fix compactor skips data from last compacted Ledger ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12429"},"#12429"),"  "),(0,p.kt)("h2",{id:"function"},"function"),(0,p.kt)("p",null,"Fix k8s pulsar functions containers not exposing metrics port for scraping ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12065"},"#12065")))}m.isMDXComponent=!0}}]);