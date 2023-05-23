"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[77150],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(t),d=l,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return t?n.createElement(k,p(p({ref:a},u),{},{components:t})):n.createElement(k,p({ref:a},u))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[c]="string"==typeof e?e:l,p[1]=s;for(var i=2;i<r;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(67294),l=t(86010);const r={tabItem:"tabItem_Ymn6"};function p(e){let{children:a,hidden:t,className:p}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,p),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>N});var n=t(87462),l=t(67294),r=t(86010),p=t(12466),s=t(16550),o=t(91980),i=t(67392),u=t(50012);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function m(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function k(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=m(e),[p,s]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[o,i]=k({queryString:t,groupId:n}),[c,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,u.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),f=(()=>{const e=o??c;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:p,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),g(e)}),[i,g,r]),tabValues:r}}var f=t(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:s,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,p.o5)(),m=e=>{const a=e.currentTarget,t=u.indexOf(a),n=i[t].value;n!==s&&(c(a),o(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},i.map((e=>{let{value:a,label:t,attributes:p}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>u.push(e),onKeyDown:d,onClick:m},p,{className:(0,r.Z)("tabs__item",h.tabItem,p?.className,{"tabs__item--active":s===a})}),t??a)})))}function b(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function y(e){const a=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(v,(0,n.Z)({},e,a)),l.createElement(b,(0,n.Z)({},e,a)))}function N(e){const a=(0,f.Z)();return l.createElement(y,(0,n.Z)({key:String(a)},e))}},29601:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(87462),l=(t(67294),t(3905)),r=t(74866),p=t(85162);const s={id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},o=void 0,i={unversionedId:"admin-api-packages",id:"version-2.10.x/admin-api-packages",title:"Manage packages",description:"Important",source:"@site/versioned_docs/version-2.10.x/admin-api-packages.md",sourceDirName:".",slug:"/admin-api-packages",permalink:"/docs/2.10.x/admin-api-packages",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/admin-api-packages.md",tags:[],version:"2.10.x",frontMatter:{id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Functions",permalink:"/docs/2.10.x/admin-api-functions"},next:{title:"Kafka client wrapper",permalink:"/docs/2.10.x/adaptors-kafka"}},u={},c=[{value:"What is a package?",id:"what-is-a-package",level:2},{value:"How to use a package",id:"how-to-use-a-package",level:2},{value:"Package management in Pulsar",id:"package-management-in-pulsar",level:2},{value:"Upload a package",id:"upload-a-package",level:3},{value:"Download a package",id:"download-a-package",level:3},{value:"Delete a package",id:"delete-a-package",level:3},{value:"Get the metadata of a package",id:"get-the-metadata-of-a-package",level:3},{value:"Update the metadata of a package",id:"update-the-metadata-of-a-package",level:3},{value:"List all versions of a package",id:"list-all-versions-of-a-package",level:3},{value:"List all packages of a specific type under a namespace",id:"list-all-packages-of-a-specific-type-under-a-namespace",level:3}],m={toc:c},d="wrapper";function k(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important")),(0,l.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.10.x/pulsar-admin/"},"Pulsar admin doc"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.10.x/"},"Java admin API doc"),".")))),(0,l.kt)("p",null,"Package managers or package-management systems automatically manage packages in a consistent manner. These tools simplify the installation tasks, upgrade process, and deletion operations for users. A package is a minimal unit that a package manager deals with. In Pulsar, packages are organized at the tenant- and namespace-level to manage Pulsar Functions and Pulsar IO connectors (i.e., source and sink)."),(0,l.kt)("h2",{id:"what-is-a-package"},"What is a package?"),(0,l.kt)("p",null,"A package is a set of elements that the user would like to reuse in later operations. In Pulsar, a package can be a group of functions, sources, and sinks. You can define a package according to your needs."),(0,l.kt)("p",null,"The package management system in Pulsar stores the data and metadata of each package (as shown in the table below) and tracks the package versions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metadata"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"The description of the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contact"),(0,l.kt)("td",{parentName:"tr",align:null},"The contact information of a package. For example, an email address of the developer team.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time when the package is created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modification_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time when the package is lastly modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"A user-defined key/value map to store other information.")))),(0,l.kt)("h2",{id:"how-to-use-a-package"},"How to use a package"),(0,l.kt)("p",null,"Packages can efficiently use the same set of functions and IO connectors. For example, you can use the same function, source, and sink in multiple namespaces. The main steps are:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a package in the package manager by providing the following information: type, tenant, namespace, package name, and version."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify one of the supported package types: function, sink and source.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tenant"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the tenant where you want to create the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the namespace where you want to create the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the complete name of the package, using the format ",(0,l.kt)("inlineCode",{parentName:"td"},"<tenant>/<namespace>/<package name>"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the version of the package using the format ",(0,l.kt)("inlineCode",{parentName:"td"},"MajorVerion.MinorVersion")," in numerals.")))),(0,l.kt)("p",{parentName:"li"},"The information you provide creates a URL for a package, in the format ",(0,l.kt)("inlineCode",{parentName:"p"},"<type>://<tenant>/<namespace>/<package name>/<version>"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Upload the elements to the package, i.e., the functions, sources, and sinks that you want to use across namespaces.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Apply permissions to this package from various namespaces."))),(0,l.kt)("p",null,"Now, you can use the elements you defined in the package by calling this package from within the package manager. The package manager locates it by the URL. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nsink://public/default/mysql-sink@1.0\nfunction://my-tenant/my-ns/my-function@0.1\nsource://my-tenant/my-ns/mysql-cdc-source@2.3\n\n")),(0,l.kt)("h2",{id:"package-management-in-pulsar"},"Package management in Pulsar"),(0,l.kt)("p",null,"You can use the command line tools, REST API, or the Java client to manage your package resources in Pulsar. More specifically, you can use these tools to ",(0,l.kt)("a",{parentName:"p",href:"#upload-a-package"},"upload"),", ",(0,l.kt)("a",{parentName:"p",href:"#download-a-package"},"download"),", and ",(0,l.kt)("a",{parentName:"p",href:"#delete-a-package"},"delete")," a package, ",(0,l.kt)("a",{parentName:"p",href:"#get-the-metadata-of-a-package"},"get the metadata")," and ",(0,l.kt)("a",{parentName:"p",href:"#update-the-metadata-of-a-package"},"update the metadata")," of a package, ",(0,l.kt)("a",{parentName:"p",href:"#list-all-versions-of-a-package"},"get the versions")," of a package, and ",(0,l.kt)("a",{parentName:"p",href:"#list-all-packages-of-a-specific-type-under-a-namespace"},"get all packages of a specific type under a namespace"),"."),(0,l.kt)("h3",{id:"upload-a-package"},"Upload a package"),(0,l.kt)("p",null,"You can use the following commands to upload a package."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages upload function://public/default/example@v0.1 --path package-file --description package-description\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.4&apiversion=v3#operation/upload"},"POST /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Upload a package to the package management service synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  void upload(PackageMetadata metadata, String packageName, String path) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Upload a package to the package management service asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> uploadAsync(PackageMetadata metadata, String packageName, String path);\n\n")))),(0,l.kt)("h3",{id:"download-a-package"},"Download a package"),(0,l.kt)("p",null,"You can use the following commands to download a package."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages download function://public/default/example@v0.1 --path package-file\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.4&apiversion=v3#operation/download"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Download a package from the package management service synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  void download(String packageName, String path) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Download a package from the package management service asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> downloadAsync(String packageName, String path);\n\n")))),(0,l.kt)("h3",{id:"delete-a-package"},"Delete a package"),(0,l.kt)("p",null,"You can use the following commands to delete a package."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"The following command deletes a package of version 0.1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages delete functions://public/default/example@v0.1\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.4&apiversion=v3#operation/delete"},"DELETE /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Delete a specified package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  void delete(String packageName) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Delete a specified package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> deleteAsync(String packageName);\n\n")))),(0,l.kt)("h3",{id:"get-the-metadata-of-a-package"},"Get the metadata of a package"),(0,l.kt)("p",null,"You can use the following commands to get the metadata of a package."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages get-metadata function://public/default/test@v1\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.4&apiversion=v3#operation/getMeta"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Get the metadata of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  PackageMetadata getMetadata(String packageName) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Get the metadata of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<PackageMetadata> getMetadataAsync(String packageName);\n\n")))),(0,l.kt)("h3",{id:"update-the-metadata-of-a-package"},"Update the metadata of a package"),(0,l.kt)("p",null,"You can use the following commands to update the metadata of a package."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages update-metadata function://public/default/example@v0.1 --description update-description\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.4&apiversion=v3#operation/updateMeta"},"PUT /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"Update the metadata of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  void updateMetadata(String packageName, PackageMetadata metadata) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"Update the metadata of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> updateMetadataAsync(String packageName, PackageMetadata metadata);\n\n")))),(0,l.kt)("h3",{id:"list-all-versions-of-a-package"},"List all versions of a package"),(0,l.kt)("p",null,"You can use the following commands to list all versions of a package."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list-versions type://tenant/namespace/packageName\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.4&apiversion=v3#operation/listPackageVersion"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"List all versions of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  List<String> listPackageVersions(String packageName) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"List all versions of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<List<String>> listPackageVersionsAsync(String packageName);\n\n")))),(0,l.kt)("h3",{id:"list-all-packages-of-a-specific-type-under-a-namespace"},"List all packages of a specific type under a namespace"),(0,l.kt)("p",null,"You can use the following commands to list all packages of a specific type under a namespace."),(0,l.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list --type function public/default\n\n"))),(0,l.kt)(p.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.4&apiversion=v3#operation/listPackages"},"PUT /admin/v3/packages/:type/:tenant/:namespace"))),(0,l.kt)(p.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("p",null,"List all packages of a specific type under a namespace synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  List<String> listPackages(String type, String namespace) throws PulsarAdminException;\n\n")),(0,l.kt)("p",null,"List all packages of a specific type under a namespace asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<List<String>> listPackagesAsync(String type, String namespace);\n\n")))))}k.isMDXComponent=!0}}]);