"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2285],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,b=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return t?n.createElement(b,r(r({ref:a},u),{},{components:t})):n.createElement(b,r({ref:a},u))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294),o=t(86010);const i="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(87462),o=t(67294),i=t(86010),r=t(72389),s=t(67392),l=t(7094),p=t(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var a;const{lazy:t,block:r,defaultValue:m,values:d,groupId:b,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),k=(0,s.l)(v,((e,a)=>e.value===a.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,l.U)(),[T,I]=(0,o.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:N}=(0,p.o5)();if(null!=b){const e=g[b];null!=e&&e!==T&&v.some((a=>a.value===e))&&I(e)}const E=e=>{const a=e.currentTarget,t=P.indexOf(a),n=v[t].value;n!==T&&(N(a),I(n),null!=b&&w(b,String(n)))},O=e=>{var a;let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;t=P[a]??P[0];break}case"ArrowLeft":{const a=P.indexOf(e.currentTarget)-1;t=P[a]??P[P.length-1];break}}null==(a=t)||a.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},v.map((e=>{let{value:a,label:t,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>P.push(e),onKeyDown:O,onClick:E},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===a})}),t??a)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function d(e){const a=(0,r.Z)();return o.createElement(m,(0,n.Z)({key:String(a)},e))}},44971:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=t(87462),o=(t(67294),t(3905)),i=t(65488),r=t(85162);const s={id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation",original_id:"administration-isolation"},l=void 0,p={unversionedId:"administration-isolation",id:"version-2.7.2/administration-isolation",title:"Pulsar isolation",description:"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences.",source:"@site/versioned_docs/version-2.7.2/administration-isolation.md",sourceDirName:".",slug:"/administration-isolation",permalink:"/docs/2.7.2/administration-isolation",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/administration-isolation.md",tags:[],version:"2.7.2",frontMatter:{id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation",original_id:"administration-isolation"},sidebar:"version-2.7.2/docsSidebar",previous:{title:"Upgrade",permalink:"/docs/2.7.2/administration-upgrade"},next:{title:"Overview",permalink:"/docs/2.7.2/security-overview"}},u={},c=[{value:"Broker isolation",id:"broker-isolation",level:2},{value:"Bookie isolation",id:"bookie-isolation",level:2}],m={toc:c};function d(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences."),(0,o.kt)("p",null,"To enforce resource isolation, you can use the Pulsar isolation policy, which allows you to allocate resources (",(0,o.kt)("strong",{parentName:"p"},"broker")," and ",(0,o.kt)("strong",{parentName:"p"},"bookie"),") for the namespace."),(0,o.kt)("h2",{id:"broker-isolation"},"Broker isolation"),(0,o.kt)("p",null,"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers."),(0,o.kt)("p",null,"You can set a namespace isolation policy for a cluster using one of the following methods. "),(0,o.kt)(i.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npulsar-admin ns-isolation-policy set options\n\n")),(0,o.kt)("p",null,"For more information about the command ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin ns-isolation-policy set options"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin ns-isolation-policy set \\\n--auto-failover-policy-type min_available \\\n--auto-failover-policy-params min_limit=1,usage_threshold=80 \\\n--namespaces my-tenant/my-namespace \\\n--primary 10.193.216.*  my-cluster policy-name\n\n"))),(0,o.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api/?version=2.7.0&apiversion=v2#operation/createNamespace"},"PUT /admin/v2/namespaces/{tenant}/{namespace}"))),(0,o.kt)(r.Z,{value:"Java admin API",mdxType:"TabItem"},(0,o.kt)("p",null,"For how to set namespace isolation policy using Java admin API, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L251"},"here"),"."))),(0,o.kt)("h2",{id:"bookie-isolation"},"Bookie isolation"),(0,o.kt)("p",null,"A namespace can be isolated into user-defined groups of bookies, which guarantees all the data that belongs to the namespace is stored in desired bookies. The bookie affinity group uses the BookKeeper ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/latest/api/javadoc/org/apache/bookkeeper/client/EnsemblePlacementPolicy.html"},"rack-aware placement policy")," and it is a way to feed rack information which is stored as JSON format in znode."),(0,o.kt)("p",null,"You can set a bookie affinity group using one of the following methods."),(0,o.kt)(i.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npulsar-admin namespaces set-bookie-affinity-group options\n\n")),(0,o.kt)("p",null,"For more information about the command ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-bookie-affinity-group options"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin namespaces set-bookie-affinity-group public/default \\\n--primary-group group-bookie1\n\n"))),(0,o.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api/?version=2.7.0&apiversion=v2#operation/setBookieAffinityGroup"},"POST /admin/v2/namespaces/{tenant}/{namespace}/persistence/bookieAffinity"))),(0,o.kt)(r.Z,{value:"Java admin API",mdxType:"TabItem"},(0,o.kt)("p",null,"For how to set bookie affinity group for a namespace using Java admin API, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L1164"},"here"),"."))))}d.isMDXComponent=!0}}]);