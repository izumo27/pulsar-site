"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7554],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,m=c["".concat(i,".").concat(d)]||c[d]||h[d]||l;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const l={id:"helm-prepare",title:"Prepare Kubernetes resources",sidebar_label:"Prepare"},a=void 0,s={unversionedId:"helm-prepare",id:"version-3.0.x/helm-prepare",title:"Prepare Kubernetes resources",description:"For a fully functional Pulsar cluster, you need a few resources before deploying the Apache Pulsar Helm Chart. This section provides the information about the preparations you need to do before deploying the Pulsar Helm Chart.",source:"@site/versioned_docs/version-3.0.x/helm-prepare.md",sourceDirName:".",slug:"/helm-prepare",permalink:"/docs/3.0.x/helm-prepare",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/helm-prepare.md",tags:[],version:"3.0.x",frontMatter:{id:"helm-prepare",title:"Prepare Kubernetes resources",sidebar_label:"Prepare"},sidebar:"docsSidebar",previous:{title:"Kubernetes",permalink:"/docs/3.0.x/deploy-kubernetes"},next:{title:"Deploy",permalink:"/docs/3.0.x/helm-deploy"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install kubectl",id:"install-kubectl",level:3},{value:"Install Helm",id:"install-helm",level:3},{value:"Create Kubernetes cluster",id:"create-kubernetes-cluster",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For a fully functional Pulsar cluster, you need a few resources before deploying the Apache Pulsar Helm Chart. This section provides the information about the preparations you need to do before deploying the Pulsar Helm Chart."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Set up your environment by installing the required tools."),(0,o.kt)("h3",{id:"install-kubectl"},"Install kubectl"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," 1.18 or higher is the required tool that talks to the Kubernetes API. It needs to be compatible with your cluster (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),"). The server version of ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," cannot be obtained until you connect to a cluster."),(0,o.kt)("p",null,"For the installation instructions, see the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"Kubernetes documentation"),"."),(0,o.kt)("h3",{id:"install-helm"},"Install Helm"),(0,o.kt)("p",null,"Helm is the package manager for Kubernetes. The Apache Pulsar Helm Chart is supported with Helm v3 (3.0.2 or higher)."),(0,o.kt)("p",null,"You can get the Helm from the project's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"releases page"),", or follow other options under the official documentation of ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"installing Helm"),"."),(0,o.kt)("h2",{id:"create-kubernetes-cluster"},"Create Kubernetes cluster"),(0,o.kt)("p",null,"A Kubernetes cluster version 1.18 or higher is required for continuing the deployment. For details about how to create a Kubernetes cluster, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/"},"Kubernetes documentation"),"."))}h.isMDXComponent=!0}}]);