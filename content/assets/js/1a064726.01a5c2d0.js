"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37484:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"client-java-2.9.1",title:"Client Java 2.9.1",sidebar_label:"Client Java 2.9.1"},i=void 0,l={unversionedId:"versioned/client-java-2.9.1",id:"versioned/client-java-2.9.1",title:"Client Java 2.9.1",description:"- Fixed a data race on the Producer to get a Connection #13176",source:"@site/release-notes/versioned/client-java-2.9.1.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.9.1",permalink:"/release-notes/versioned/client-java-2.9.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-2.9.1.md",tags:[],version:"current",frontMatter:{id:"client-java-2.9.1",title:"Client Java 2.9.1",sidebar_label:"Client Java 2.9.1"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a data race on the Producer to get a Connection ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13176"},"#13176")),(0,a.kt)("li",{parentName:"ul"},"Fixed Producer: Send CloseProducer on timeout ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13161"},"#13161")),(0,a.kt)("li",{parentName:"ul"},"Fixed Producer: Use epoch to version Producer's cnx to prevent early delivery of messages ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12779"},"#12779")),(0,a.kt)("li",{parentName:"ul"},"Removed a data race in MultiTopicsConsumerImpl to ensure correct message order ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12456"},"#12456")),(0,a.kt)("li",{parentName:"ul"},"Fixed message order in Consumer issue when use listener ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13023"},"#13023")),(0,a.kt)("li",{parentName:"ul"},"Audience Field Optional is now optional in OAuth2 Client Credentials ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11988"},"#11988"))))}u.isMDXComponent=!0}}]);