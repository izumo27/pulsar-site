"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[19194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),h=n,f=s["".concat(o,".").concat(h)]||s[h]||m[h]||i;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},92543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"client-cpp-2.8.1",title:"Client CPP 2.8.1",sidebar_label:"Client CPP 2.8.1"},l=void 0,p={unversionedId:"versioned/client-cpp-2.8.1",id:"versioned/client-cpp-2.8.1",title:"Client CPP 2.8.1",description:"- Use same regex code at ZTSClient #11323",source:"@site/release-notes/versioned/client-cpp-2.8.1.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.8.1",permalink:"/release-notes/versioned/client-cpp-2.8.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-2.8.1.md",tags:[],version:"current",frontMatter:{id:"client-cpp-2.8.1",title:"Client CPP 2.8.1",sidebar_label:"Client CPP 2.8.1"}},o={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use same regex code at ZTSClient ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11323"},"#11323")),(0,n.kt)("li",{parentName:"ul"},"Use sendRequestWithId to add timeout to hasMessageAvailable ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11600"},"#11600")),(0,n.kt)("li",{parentName:"ul"},"Fix bugs that were not exposed by broken C++ CI before ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11557"},"#11557")),(0,n.kt)("li",{parentName:"ul"},"Simple implementation of getting number of references from C++ client ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11535"},"#11535")),(0,n.kt)("li",{parentName:"ul"},"Fix brew error in site docs to compile C++ client. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11512"},"#11512")),(0,n.kt)("li",{parentName:"ul"},"Support Windows Debug mode build ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11302"},"#11302")),(0,n.kt)("li",{parentName:"ul"},"Fix missed header for some compilers ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11152"},"#11152")),(0,n.kt)("li",{parentName:"ul"},"Fix boost download link in Dockerfile ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11129"},"#11129")),(0,n.kt)("li",{parentName:"ul"},"Fix Setting KeySharedMeta in SubscribeCommand ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11088"},"#11088")),(0,n.kt)("li",{parentName:"ul"},"Fix Windows 32 bits compile and runtime failures ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11082"},"#11082")),(0,n.kt)("li",{parentName:"ul"},"Add connection timeout configuration ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11029"},"#11029")),(0,n.kt)("li",{parentName:"ul"},"Fix Windows build issues about static library ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10956"},"#10956")),(0,n.kt)("li",{parentName:"ul"},"Fix incorrect connect timeout implementation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11889"},"#11889")),(0,n.kt)("li",{parentName:"ul"},"Fix CPP build not failing when tests fail ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11575"},"#11575")),(0,n.kt)("li",{parentName:"ul"},"Avoid throwing exceptions when setting socket option ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11329"},"#11329"))))}s.isMDXComponent=!0}}]);