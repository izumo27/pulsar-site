(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[98411],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>v});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=s.createContext({}),c=function(e){var t=s.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,v=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return r?s.createElement(v,a(a({ref:t},d),{},{components:r})):s.createElement(v,a({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53184:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var s=r(87462),n=r(63366),o=r(67294),a=r(86010),l=r(94780),i=r(44063),c=r(68010),d=r(90948),u=r(1588),p=r(34867);function m(e){return(0,p.Z)("MuiTableHead",e)}(0,u.Z)("MuiTableHead",["root"]);var v=r(85893);const b=["className","component"],f=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),N={variant:"head"},g="thead",y=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:o,component:d=g}=r,u=(0,n.Z)(r,b),p=(0,s.Z)({},r,{component:d}),y=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},m,t)})(p);return(0,v.jsx)(i.Z.Provider,{value:N,children:(0,v.jsx)(f,(0,s.Z)({as:d,className:(0,a.Z)(y.root,o),ref:t,role:d===g?null:"rowgroup",ownerState:p},u))})}))},8590:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var s=r(87462),n=(r(67294),r(3905)),o=r(55063),a=r(95549),l=r.n(a);const i={id:"client-cs",title:"C# Client Release Notes",sidebar_label:"C# Client"},c=void 0,d={unversionedId:"client-cs",id:"client-cs",title:"C# Client Release Notes",description:"",source:"@site/release-notes/client-cs.mdx",sourceDirName:".",slug:"/client-cs",permalink:"/release-notes/client-cs",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/client-cs.mdx",tags:[],version:"current",frontMatter:{id:"client-cs",title:"C# Client Release Notes",sidebar_label:"C# Client"},sidebar:"releaseNote",previous:{title:"Node.js Client",permalink:"/release-notes/client-node"},next:{title:"Pulsar Manager Release Notes",permalink:"/release-notes/pulsar-manager"}},u={},p=[],m={toc:p};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{data:l(),mdxType:"ClientReleaseTable"}))}v.isMDXComponent=!0},95549:e=>{e.exports=[{tagName:"2.4.1",releaseNotes:"/release-notes/versioned/pulsar-cs-2.4.1/",doc:"/docs/client-libraries-dotnet",version:"2.4.x"},{tagName:"2.4.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.4.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"2.3.1",releaseNotes:"/release-notes/versioned/pulsar-cs-2.3.1/",doc:"/docs/client-libraries-dotnet",version:"2.3.x"},{tagName:"2.3.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.3.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"2.2.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.2.0/",doc:"/docs/client-libraries-dotnet",version:"2.2.x"},{tagName:"2.1.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.1.0/",doc:"/docs/client-libraries-dotnet",version:"2.1.x"},{tagName:"2.0.1",releaseNotes:"/release-notes/versioned/pulsar-cs-2.0.1/",doc:"/docs/client-libraries-dotnet",version:"2.0.x"},{tagName:"2.0.0",releaseNotes:"/release-notes/versioned/pulsar-cs-2.0.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"1.1.2",releaseNotes:"/release-notes/versioned/pulsar-cs-1.1.2/",doc:"/docs/client-libraries-dotnet",version:"1.1.x"},{tagName:"1.1.1",releaseNotes:"/release-notes/versioned/pulsar-cs-1.1.1/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"1.1.0",releaseNotes:"/release-notes/versioned/pulsar-cs-1.1.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"1.0.2",releaseNotes:"/release-notes/versioned/pulsar-cs-1.0.2/",doc:"/docs/client-libraries-dotnet",version:"1.0.x"},{tagName:"1.0.1",releaseNotes:"/release-notes/versioned/pulsar-cs-1.0.1/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"1.0.0",releaseNotes:"/release-notes/versioned/pulsar-cs-1.0.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"0.11.0",releaseNotes:"/release-notes/versioned/pulsar-cs-0.11.0/",doc:"/docs/client-libraries-dotnet",version:"0.11.x"},{tagName:"0.10.1",releaseNotes:"/release-notes/versioned/pulsar-cs-0.10.1/",doc:"/docs/client-libraries-dotnet",version:"0.10.x"},{tagName:"0.10.0",releaseNotes:"/release-notes/versioned/pulsar-cs-0.10.0/",doc:"/docs/client-libraries-dotnet",version:""},{tagName:"0.9.7",releaseNotes:"/release-notes/versioned/pulsar-cs-0.9.7/",doc:"/docs/client-libraries-dotnet",version:"0.9.x"},{tagName:"0.9.6",releaseNotes:"/release-notes/versioned/pulsar-cs-0.9.6/",doc:"/docs/client-libraries-dotnet",version:""}]},55063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(67294),n=r(7906),o=r(295),a=r(53252),l=r(53184),i=r(53816),c=r(95999);function d(e){return s.createElement(n.Z,{size:"small"},s.createElement(l.Z,null,s.createElement(i.Z,null,["Version","Release Note","Documentation"].map((e=>s.createElement(a.Z,{className:"font-bold",sx:{color:"inherit"},key:e},s.createElement(c.Z,null,e)))))),s.createElement(o.Z,null,e.data.map(((e,t)=>s.createElement(i.Z,{key:t,sx:{color:"inherit"}},s.createElement(a.Z,{sx:{color:"inherit"}},e.version),s.createElement(a.Z,{sx:{color:"inherit"}},s.createElement("a",{href:e.releaseNotes},e.tagName)),s.createElement(a.Z,{sx:{color:"inherit"}},s.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);