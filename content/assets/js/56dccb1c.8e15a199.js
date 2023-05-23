"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32310],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),l=p(n),f=o,h=l["".concat(s,".").concat(f)]||l[f]||d[f]||i;return n?r.createElement(h,a(a({ref:e},u),{},{components:n})):r.createElement(h,a({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[l]="string"==typeof t?t:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90763:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",original_id:"concepts-authentication"},a=void 0,c={unversionedId:"concepts-authentication",id:"version-2.6.0/concepts-authentication",title:"Authentication and Authorization",description:"Pulsar supports a pluggable authentication mechanism which can be configured at broker and it also supports authorization to identify client and its access rights on topics and tenants.",source:"@site/versioned_docs/version-2.6.0/concepts-authentication.md",sourceDirName:".",slug:"/concepts-authentication",permalink:"/docs/2.6.0/concepts-authentication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.0/concepts-authentication.md",tags:[],version:"2.6.0",frontMatter:{id:"concepts-authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",original_id:"concepts-authentication"},sidebar:"version-2.6.0/docsSidebar",previous:{title:"Multi Tenancy",permalink:"/docs/2.6.0/concepts-multi-tenancy"},next:{title:"Topic Compaction",permalink:"/docs/2.6.0/concepts-topic-compaction"}},s={},p=[],u={toc:p},l="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar supports a pluggable ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.6.0/security-overview"},"authentication")," mechanism which can be configured at broker and it also supports authorization to identify client and its access rights on topics and tenants."))}d.isMDXComponent=!0}}]);