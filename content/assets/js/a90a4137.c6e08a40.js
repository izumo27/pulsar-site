"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32226],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=m(n),u=r,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78324:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={id:"io-mongo-sink",title:"MongoDB sink connector",sidebar_label:"MongoDB sink connector"},i=void 0,l={unversionedId:"io-mongo-sink",id:"version-2.11.x/io-mongo-sink",title:"MongoDB sink connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/versioned_docs/version-2.11.x/io-mongo-sink.md",sourceDirName:".",slug:"/io-mongo-sink",permalink:"/docs/2.11.x/io-mongo-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/io-mongo-sink.md",tags:[],version:"2.11.x",frontMatter:{id:"io-mongo-sink",title:"MongoDB sink connector",sidebar_label:"MongoDB sink connector"}},p={},m=[],c={toc:m},s="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,r.kt)("a",{parentName:"p",href:"pathname:///download"},"download page"),"."),(0,r.kt)("p",{parentName:"admonition"},"::::"),(0,r.kt)("p",{parentName:"admonition"},"The MongoDB sink connector pulls messages from Pulsar topics and persists the messages to collections."),(0,r.kt)("h2",{parentName:"admonition",id:"configuration"},"Configuration"),(0,r.kt)("p",{parentName:"admonition"},"The configuration of the MongoDB sink connector has the following properties."),(0,r.kt)("h3",{parentName:"admonition",id:"property"},"Property"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mongoUri")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The MongoDB URI to which the connector connects. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"For more information, see ",(0,r.kt)("a",{parentName:"td",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"connection string URI format"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The database name to which the collection belongs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collection")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The collection name to which the connector writes messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"The batch size of writing messages to collections.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"The batch operation interval in milliseconds.")))),(0,r.kt)("h3",{parentName:"admonition",id:"example"},"Example"),(0,r.kt)("p",{parentName:"admonition"},"Before using the Mongo sink connector, you need to create a configuration file through one of the following methods."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "mongoUri": "mongodb://localhost:27017",\n      "database": "pulsar",\n      "collection": "messages",\n      "batchSize": "2",\n      "batchTimeMs": "500"\n   }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    mongoUri: "mongodb://localhost:27017"\n    database: "pulsar"\n    collection: "messages"\n    batchSize: 2\n    batchTimeMs: 500\n'))))))}d.isMDXComponent=!0}}]);