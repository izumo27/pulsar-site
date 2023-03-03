"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[23998],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?n.createElement(k,r(r({ref:a},c),{},{components:t})):n.createElement(k,r({ref:a},c))}));function k(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294),o=t(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),o=t(67294),i=t(86010),r=t(72389),l=t(67392),s=t(7094),p=t(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:a,block:t,defaultValue:r,values:u,groupId:m,className:d}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=u??k.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),h=(0,l.l)(b,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===r?r:r??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[g,N]=(0,o.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=m){const e=v[m];null!=e&&e!==g&&b.some((a=>a.value===e))&&N(e)}const P=e=>{const a=e.currentTarget,t=w.indexOf(a),n=b[t].value;n!==g&&(I(a),N(n),null!=m&&y(m,String(n)))},T=e=>{let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}a?.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",c.tabList)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},d)},b.map((e=>{let{value:a,label:t,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===a?0:-1,"aria-selected":g===a,key:a,ref:e=>w.push(e),onKeyDown:T,onClick:P},r,{className:(0,i.Z)("tabs__item",c.tabItem,r?.className,{"tabs__item--active":g===a})}),t??a)}))),a?(0,o.cloneElement)(k.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==g})))))}function m(e){const a=(0,r.Z)();return o.createElement(u,(0,n.Z)({key:String(a)},e))}},21197:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=t(87462),o=(t(67294),t(3905)),i=t(65488),r=t(85162);const l={id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation",original_id:"administration-isolation"},s=void 0,p={unversionedId:"administration-isolation",id:"version-2.10.x/administration-isolation",title:"Pulsar isolation",description:"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences.",source:"@site/versioned_docs/version-2.10.x/administration-isolation.md",sourceDirName:".",slug:"/administration-isolation",permalink:"/docs/2.10.x/administration-isolation",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/administration-isolation.md",tags:[],version:"2.10.x",frontMatter:{id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation",original_id:"administration-isolation"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Upgrade",permalink:"/docs/2.10.x/administration-upgrade"},next:{title:"Overview",permalink:"/docs/2.10.x/security-overview"}},c={},u=[{value:"Broker isolation",id:"broker-isolation",level:2},{value:"Bookie isolation",id:"bookie-isolation",level:2}],m={toc:u},d="wrapper";function k(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences."),(0,o.kt)("p",null,"To enforce resource isolation, you can use the Pulsar isolation policy, which allows you to allocate resources (",(0,o.kt)("strong",{parentName:"p"},"broker")," and ",(0,o.kt)("strong",{parentName:"p"},"bookie"),") for the namespace."),(0,o.kt)("h2",{id:"broker-isolation"},"Broker isolation"),(0,o.kt)("p",null,"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers."),(0,o.kt)("p",null,"You can set a namespace isolation policy for a cluster using one of the following methods. "),(0,o.kt)(i.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npulsar-admin ns-isolation-policy set options\n\n")),(0,o.kt)("p",null,"For more information about the command ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin ns-isolation-policy set options"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin ns-isolation-policy set \\\n--auto-failover-policy-type min_available \\\n--auto-failover-policy-params min_limit=1,usage_threshold=80 \\\n--namespaces my-tenant/my-namespace \\\n--primary 10.193.216.*  my-cluster policy-name\n\n"))),(0,o.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api/?version=2.10.3&apiversion=v2#operation/createNamespace"},"PUT /admin/v2/namespaces/{tenant}/{namespace}"))),(0,o.kt)(r.Z,{value:"Java admin API",mdxType:"TabItem"},(0,o.kt)("p",null,"For how to set namespace isolation policy using Java admin API, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L251"},"here"),"."))),(0,o.kt)("h2",{id:"bookie-isolation"},"Bookie isolation"),(0,o.kt)("p",null,"A namespace can be isolated into user-defined groups of bookies, which guarantees all the data that belongs to the namespace is stored in desired bookies. The bookie affinity group uses the BookKeeper ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/latest/api/javadoc/org/apache/bookkeeper/client/EnsemblePlacementPolicy.html"},"rack-aware placement policy")," and it is a way to feed rack information which is stored as JSON format in znode."),(0,o.kt)("p",null,"You can set a bookie affinity group using one of the following methods."),(0,o.kt)(i.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npulsar-admin namespaces set-bookie-affinity-group options\n\n")),(0,o.kt)("p",null,"For more information about the command ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-bookie-affinity-group options"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin bookies set-bookie-rack \\\n--bookie 127.0.0.1:3181 \\\n--hostname 127.0.0.1:3181 \\\n--group group-bookie1 \\\n--rack rack1\n\nbin/pulsar-admin namespaces set-bookie-affinity-group public/default \\\n--primary-group group-bookie1\n\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Do not set a bookie rack name to slash (",(0,o.kt)("inlineCode",{parentName:"li"},"/"),") or an empty string (",(0,o.kt)("inlineCode",{parentName:"li"},'""'),") if you use Pulsar earlier than 2.7.5, 2.8.3, and 2.9.2. If you use Pulsar 2.7.5, 2.8.3, 2.9.2 or later versions, it falls back to ",(0,o.kt)("inlineCode",{parentName:"li"},"/default-rack")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"/default-region/default-rack"),"."),(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"RackawareEnsemblePlacementPolicy")," is enabled, the rack name is not allowed to contain slash (",(0,o.kt)("inlineCode",{parentName:"li"},"/"),") except for the beginning and end of the rack name string. For example, rack name like ",(0,o.kt)("inlineCode",{parentName:"li"},"/rack0")," is okay, but ",(0,o.kt)("inlineCode",{parentName:"li"},"/rack/0")," is not allowed."),(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"RegionawareEnsemblePlacementPolicy")," is enabled, the rack name can only contain one slash (",(0,o.kt)("inlineCode",{parentName:"li"},"/"),") except for the beginning and end of the rack name string. For example, rack name like ",(0,o.kt)("inlineCode",{parentName:"li"},"/region0/rack0")," is okay, but ",(0,o.kt)("inlineCode",{parentName:"li"},"/region0rack0")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"/region0/rack/0")," are not allowed.\nFor the bookie rack name restrictions, see ",(0,o.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"pulsar-admin bookies set-bookie-rack"),".")))),(0,o.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api/?version=2.10.3&apiversion=v2#operation/setBookieAffinityGroup"},"POST /admin/v2/namespaces/{tenant}/{namespace}/persistence/bookieAffinity"))),(0,o.kt)(r.Z,{value:"Java admin API",mdxType:"TabItem"},(0,o.kt)("p",null,"For how to set bookie affinity group for a namespace using Java admin API, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L1164"},"here"),"."))))}k.isMDXComponent=!0}}]);