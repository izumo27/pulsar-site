"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[42719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),l=r(86010),i=r(12466),o=r(16550),u=r(91980),s=r(67392),c=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:r,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var f=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==o&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},55026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));r(74866),r(85162);const l={id:"client-libraries-cluster-level-failover",title:"Configure cluster-level failover",sidebar_label:"Configure cluster-level failover",description:"Learn how to configure cluster-level failover in Pulsar."},i=void 0,o={unversionedId:"client-libraries-cluster-level-failover",id:"client-libraries-cluster-level-failover",title:"Configure cluster-level failover",description:"Learn how to configure cluster-level failover in Pulsar.",source:"@site/docs/client-libraries-cluster-level-failover.md",sourceDirName:".",slug:"/client-libraries-cluster-level-failover",permalink:"/docs/next/client-libraries-cluster-level-failover",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-cluster-level-failover.md",tags:[],version:"current",frontMatter:{id:"client-libraries-cluster-level-failover",title:"Configure cluster-level failover",sidebar_label:"Configure cluster-level failover",description:"Learn how to configure cluster-level failover in Pulsar."},sidebar:"docsSidebar",previous:{title:"Work with schema",permalink:"/docs/next/client-libraries-schema"},next:{title:"Overview",permalink:"/docs/next/admin-api-overview"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure cluster-level failover",id:"configure-cluster-level-failover",level:2},{value:"Automatic failover",id:"automatic-failover",level:3},{value:"Controlled failover",id:"controlled-failover",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For more information about cluster-level failover, including concepts, benefits, use cases, constraints, usage and working principles, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-cluster-level-failover"},"Cluster-level failover concepts"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You should configure cluster-level failover only when the cluster contains sufficient resources to handle all possible consequences. Workload intensity on the backup cluster may increase significantly.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Connect your clusters to an uninterruptible power supply (UPS) unit to reduce the risk of unexpected power loss.")))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pulsar Java client 2.10 or later versions."),(0,n.kt)("li",{parentName:"ul"},"For backup clusters:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The number of BookKeeper nodes should be equal to or greater than the ensemble quorum."),(0,n.kt)("li",{parentName:"ul"},"The number of ZooKeeper nodes should be equal to or greater than 3."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Turn on geo-replication")," between the primary cluster and any dependent cluster (primary to backup or backup to backup) to prevent data loss."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/administration-geo#enable-replicated-subscription"},"Enable replicated subscription"),".")),(0,n.kt)("h2",{id:"configure-cluster-level-failover"},"Configure cluster-level failover"),(0,n.kt)("h3",{id:"automatic-failover"},"Automatic failover"),(0,n.kt)("p",null,"This is an example of how to construct a Java Pulsar client to use automatic cluster-level failover. The switchover is triggered automatically."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'private PulsarClient getAutoFailoverClient() throws PulsarClientException {\n    String primaryUrl = "pulsar+ssl://localhost:6651";\n    String secondaryUrl = "pulsar+ssl://localhost:6661";\n    String primaryTlsTrustCertsFilePath = "primary/path";\n    String secondaryTlsTrustCertsFilePath = "secondary/path";\n    Authentication primaryAuthentication = AuthenticationFactory.create(\n        "org.apache.pulsar.client.impl.auth.AuthenticationTls",\n        "tlsCertFile:/path/to/primary-my-role.cert.pem,"\n                + "tlsKeyFile:/path/to/primary-role.key-pk8.pem");\n    Authentication secondaryAuthentication = AuthenticationFactory.create(\n        "org.apache.pulsar.client.impl.auth.AuthenticationTls",\n        "tlsCertFile:/path/to/secondary-my-role.cert.pem,"\n                + "tlsKeyFile:/path/to/secondary-role.key-pk8.pem");\n\n    // You can put more failover cluster config in to map\n    Map<String, String> secondaryTlsTrustCertsFilePaths = new HashMap<>();\n    secondaryTlsTrustCertsFilePaths.put(secondaryUrl, secondaryTlsTrustCertsFilePath);\n    Map<String, Authentication> secondaryAuthentications = new HashMap<>();\n    secondaryAuthentications.put(secondaryUrl, secondaryAuthentication);\n    ServiceUrlProvider failover = AutoClusterFailover.builder()\n        .primary(primaryUrl)\n        .secondary(List.of(secondaryUrl))\n        .failoverDelay(30, TimeUnit.SECONDS)\n        .switchBackDelay(60, TimeUnit.SECONDS)\n        .checkInterval(1000, TimeUnit.MILLISECONDS)\n        .secondaryTlsTrustCertsFilePath(secondaryTlsTrustCertsFilePaths)\n        .secondaryAuthentication(secondaryAuthentications)\n        .build();\n\n    PulsarClient pulsarClient = PulsarClient.builder()\n        .authentication(primaryAuthentication) \n        .tlsTrustCertsFilePath(primaryTlsTrustCertsFilePath)\n        .build();\n\n    failover.initialize(pulsarClient);\n    return pulsarClient;\n}\n')),(0,n.kt)("p",null,"Configure the following parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Default value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"primary")),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service URL of the primary cluster.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"secondary")),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Service URL(s) of one or several backup clusters.",(0,n.kt)("br",null),(0,n.kt)("br",null),"You can specify several backup clusters using a comma-separated list.",(0,n.kt)("br",null),(0,n.kt)("br",null)," Note that:",(0,n.kt)("br",null),"- The backup cluster is chosen in the sequence shown in the list. ",(0,n.kt)("br",null),"- If all backup clusters are available, the Pulsar client chooses the first backup cluster.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"failoverDelay")),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The delay before the Pulsar client switches from the primary cluster to the backup cluster.",(0,n.kt)("br",null),(0,n.kt)("br",null),"Automatic failover is controlled by a probe task: ",(0,n.kt)("br",null),"1) The probe task first checks the health status of the primary cluster. ",(0,n.kt)("br",null)," 2) If the probe task finds the continuous failure time of the primary cluster exceeds ",(0,n.kt)("inlineCode",{parentName:"td"},"failoverDelayMs"),", it switches the Pulsar client to the backup cluster.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"switchBackDelay")),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The delay before the Pulsar client switches from the backup cluster to the primary cluster.",(0,n.kt)("br",null),(0,n.kt)("br",null),"Automatic failover switchover is controlled by a probe task: ",(0,n.kt)("br",null)," 1) After the Pulsar client switches from the primary cluster to the backup cluster, the probe task continues to check the status of the primary cluster. ",(0,n.kt)("br",null)," 2) If the primary cluster functions well and continuously remains active longer than ",(0,n.kt)("inlineCode",{parentName:"td"},"switchBackDelay"),", the Pulsar client switches back to the primary cluster.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"checkInterval")),(0,n.kt)("td",{parentName:"tr",align:null},"30s"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Frequency of performing a probe task (in seconds).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"secondaryTlsTrustCertsFilePath")),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Path to the trusted TLS certificate file of the backup cluster.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"secondaryAuthentication")),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Authentication of the backup cluster.")))),(0,n.kt)("h3",{id:"controlled-failover"},"Controlled failover"),(0,n.kt)("p",null,"This is an example of how to construct a Java Pulsar client to use controlled cluster-level failover. The switchover is triggered by administrators manually."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can have one or several backup clusters but can only specify one.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public PulsarClient getControlledFailoverClient() throws IOException {\n    Map<String, String> header = new HashMap();\n    header.put("service_user_id", "my-user");\n    header.put("service_password", "tiger");\n    header.put("clusterA", "tokenA");\n    header.put("clusterB", "tokenB");\n\n    ServiceUrlProvider provider =\n            ControlledClusterFailover.builder()\n                    .defaultServiceUrl("pulsar://localhost:6650")\n                    .checkInterval(1, TimeUnit.MINUTES)\n                    .urlProvider("http://localhost:8080/test")\n                    .urlProviderHeader(header)\n                    .build();\n\n    PulsarClient pulsarClient =\n            PulsarClient.builder()\n                    .build();\n\n    provider.initialize(pulsarClient);\n    return pulsarClient;\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Default value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required?"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"defaultServiceUrl")),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Pulsar service URL.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"checkInterval")),(0,n.kt)("td",{parentName:"tr",align:null},"30s"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Frequency of performing a probe task (in seconds).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"urlProvider")),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"URL provider service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"urlProviderHeader")),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"urlProviderHeader")," is a map containing tokens and credentials. ",(0,n.kt)("br",null),(0,n.kt)("br",null),"If you enable authentication or authorization between Pulsar clients and primary and backup clusters, you need to provide ",(0,n.kt)("inlineCode",{parentName:"td"},"urlProviderHeader"),".")))),(0,n.kt)("p",null,"Here is an example of how ",(0,n.kt)("inlineCode",{parentName:"p"},"urlProviderHeader")," works."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Workflow of urlProviderHeader in Pulsar",src:r(713).Z,width:"1350",height:"680"})),(0,n.kt)("p",null,"Assume that you want to connect Pulsar client 1 to cluster A."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pulsar client 1 sends the token ",(0,n.kt)("em",{parentName:"p"},"t1")," to the URL provider service.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The URL provider service returns the credential ",(0,n.kt)("em",{parentName:"p"},"c1")," and the cluster A URL to the Pulsar client."),(0,n.kt)("p",{parentName:"li"},"The URL provider service manages all tokens and credentials. It returns different credentials based on different tokens and different target cluster URLs to different Pulsar clients."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The credential must be in a JSON file and contain parameters as shown.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'{\n"serviceUrl": "pulsar+ssl://target:6651",\n"tlsTrustCertsFilePath": "/security/ca.cert.pem",\n"authPluginClassName":"org.apache.pulsar.client.impl.auth.AuthenticationTls",\n"authParamsString": " \\"tlsCertFile\\": \\"/security/client.cert.pem\\"\n    \\"tlsKeyFile\\": \\"/security/client-pk8.pem\\" "\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pulsar client 1 connects to cluster A using credential ",(0,n.kt)("em",{parentName:"p"},"c1"),"."))))}d.isMDXComponent=!0},713:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cluster-level-failover-3-e4c1f0e86f1652f300f2bc54d342b955.png"}}]);