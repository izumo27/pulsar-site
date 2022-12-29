"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,k=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79603:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={id:"cookbooks-bookkeepermetadata",title:"BookKeeper Ledger Metadata",original_id:"cookbooks-bookkeepermetadata"},l=void 0,p={unversionedId:"cookbooks-bookkeepermetadata",id:"version-2.10.x/cookbooks-bookkeepermetadata",title:"BookKeeper Ledger Metadata",description:"Pulsar stores data on BookKeeper ledgers, you can understand the contents of a ledger by inspecting the metadata attached to the ledger.",source:"@site/versioned_docs/version-2.10.x/cookbooks-bookkeepermetadata.md",sourceDirName:".",slug:"/cookbooks-bookkeepermetadata",permalink:"/docs/2.10.x/cookbooks-bookkeepermetadata",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/cookbooks-bookkeepermetadata.md",tags:[],version:"2.10.x",frontMatter:{id:"cookbooks-bookkeepermetadata",title:"BookKeeper Ledger Metadata",original_id:"cookbooks-bookkeepermetadata"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Message queue",permalink:"/docs/2.10.x/cookbooks-message-queue"},next:{title:"Simulation tools",permalink:"/docs/2.10.x/develop-tools"}},i={},d=[],c={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar stores data on BookKeeper ledgers, you can understand the contents of a ledger by inspecting the metadata attached to the ledger.\nSuch metadata are stored on ZooKeeper and they are readable using BookKeeper APIs."),(0,n.kt)("p",null,"Description of current metadata:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Scope"),(0,n.kt)("th",{parentName:"tr",align:null},"Metadata name"),(0,n.kt)("th",{parentName:"tr",align:null},"Metadata value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"All ledgers"),(0,n.kt)("td",{parentName:"tr",align:null},"application"),(0,n.kt)("td",{parentName:"tr",align:null},"'pulsar'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"All ledgers"),(0,n.kt)("td",{parentName:"tr",align:null},"component"),(0,n.kt)("td",{parentName:"tr",align:null},"'managed-ledger', 'schema', 'compacted-topic'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Managed ledgers"),(0,n.kt)("td",{parentName:"tr",align:null},"pulsar/managed-ledger"),(0,n.kt)("td",{parentName:"tr",align:null},"name of the ledger")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cursor"),(0,n.kt)("td",{parentName:"tr",align:null},"pulsar/cursor"),(0,n.kt)("td",{parentName:"tr",align:null},"name of the cursor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compacted topic"),(0,n.kt)("td",{parentName:"tr",align:null},"pulsar/compactedTopic"),(0,n.kt)("td",{parentName:"tr",align:null},"name of the original topic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compacted topic"),(0,n.kt)("td",{parentName:"tr",align:null},"pulsar/compactedTo"),(0,n.kt)("td",{parentName:"tr",align:null},"id of the last compacted message")))))}s.isMDXComponent=!0}}]);