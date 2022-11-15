"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2475],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>d});var n=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),u=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=t,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(k,i(i({ref:a},p),{},{components:r})):n.createElement(k,i({ref:a},p))}));function d(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85162:(e,a,r)=>{r.d(a,{Z:()=>i});var n=r(67294),t=r(86010);const l="tabItem_Ymn6";function i(e){let{children:a,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,t.Z)(l,i),hidden:r},a)}},65488:(e,a,r)=>{r.d(a,{Z:()=>d});var n=r(87462),t=r(67294),l=r(86010),i=r(72389),o=r(67392),s=r(7094),u=r(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var a;const{lazy:r,block:i,defaultValue:c,values:d,groupId:k,className:b}=e,f=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:a,label:r,attributes:n}}=e;return{value:a,label:r,attributes:n}})),g=(0,o.l)(v,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)??f[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:T}=(0,s.U)(),[N,A]=(0,t.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==N&&v.some((a=>a.value===e))&&A(e)}const I=e=>{const a=e.currentTarget,r=w.indexOf(a),n=v[r].value;n!==N&&(E(a),A(n),null!=k&&T(k,String(n)))},x=e=>{var a;let r=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;r=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;r=w[a]??w[w.length-1];break}}null==(a=r)||a.focus()};return t.createElement("div",{className:(0,l.Z)("tabs-container",p)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},v.map((e=>{let{value:a,label:r,attributes:i}=e;return t.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>w.push(e),onKeyDown:x,onClick:I},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":N===a})}),r??a)}))),r?(0,t.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function d(e){const a=(0,i.Z)();return t.createElement(c,(0,n.Z)({key:String(a)},e))}},68613:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=r(87462),t=(r(67294),r(3905)),l=r(65488),i=r(85162);const o={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},s=void 0,u={unversionedId:"admin-api-brokers",id:"version-2.7.4/admin-api-brokers",title:"Managing Brokers",description:"Pulsar brokers consist of two components:",source:"@site/versioned_docs/version-2.7.4/admin-api-brokers.md",sourceDirName:".",slug:"/admin-api-brokers",permalink:"/docs/2.7.4/admin-api-brokers",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/admin-api-brokers.md",tags:[],version:"2.7.4",frontMatter:{id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},sidebar:"version-2.7.4/docsSidebar",previous:{title:"Tenants",permalink:"/docs/2.7.4/admin-api-tenants"},next:{title:"Namespaces",permalink:"/docs/2.7.4/admin-api-namespaces"}},p={},m=[{value:"Brokers resources",id:"brokers-resources",level:2},{value:"List active brokers",id:"list-active-brokers",level:3},{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",level:4},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",level:3},{value:"List updated values",id:"list-updated-values",level:3},{value:"List all",id:"list-all",level:3}],c={toc:m};function d(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Pulsar brokers consist of two components:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"An HTTP server exposing a ",(0,t.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," interface administration and ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.7.4/reference-terminology#topic"},"topic")," lookup."),(0,t.kt)("li",{parentName:"ol"},"A dispatcher that handles all Pulsar ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.7.4/reference-terminology#message"},"message")," transfers.")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#broker"},"Brokers")," can be managed via:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.7.4/reference-pulsar-admin#brokers"},(0,t.kt)("inlineCode",{parentName:"a"},"brokers"))," command of the ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.7.4/reference-pulsar-admin"},(0,t.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers")," endpoint of the admin ",(0,t.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("inlineCode",{parentName:"li"},"brokers")," method of the ",(0,t.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin.html"},"PulsarAdmin")," object in the ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.7.4/client-libraries-java"},"Java API"))),(0,t.kt)("p",null,"In addition to being configurable when you start them up, brokers can also be ",(0,t.kt)("a",{parentName:"p",href:"#dynamic-broker-configuration"},"dynamically configured"),"."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"See the ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#broker"},"Configuration")," page for a full listing of broker-specific configuration parameters.")),(0,t.kt)("h2",{id:"brokers-resources"},"Brokers resources"),(0,t.kt)("h3",{id:"list-active-brokers"},"List active brokers"),(0,t.kt)("p",null,"Fetch all available active brokers that are serving traffic."),(0,t.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list use\n\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\nbroker1.use.org.com:8080\n\n"))),(0,t.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/getActiveBrokers"},"GET /admin/v2/brokers/:cluster"))),(0,t.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getActiveBrokers(clusterName)\n\n")))),(0,t.kt)("h4",{id:"list-of-namespaces-owned-by-a-given-broker"},"list of namespaces owned by a given broker"),(0,t.kt)("p",null,"It finds all namespaces which are owned and served by a given broker."),(0,t.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers namespaces use \\\n  --url broker1.use.org.com:8080\n\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "my-property/use/my-ns/0x00000000_0xffffffff": {\n    "broker_assignment": "shared",\n    "is_controlled": false,\n    "is_active": true\n  }\n}\n\n'))),(0,t.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/getOwnedNamespaes"},"GET /admin/v2/brokers/:cluster/:broker/ownedNamespaces"))),(0,t.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n\n")))),(0,t.kt)("h3",{id:"dynamic-broker-configuration"},"Dynamic broker configuration"),(0,t.kt)("p",null,"One way to configure a Pulsar ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#broker"},"broker")," is to supply a ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#broker"},"configuration")," when the broker is ",(0,t.kt)("a",{parentName:"p",href:"/docs/2.7.4/reference-cli-tools#pulsar-broker"},"started up"),"."),(0,t.kt)("p",null,"But since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,t.kt)("em",{parentName:"p"},"while the broker is running"),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.7.4/reference-pulsar-admin#brokers"},(0,t.kt)("inlineCode",{parentName:"a"},"brokers"))," command for the ",(0,t.kt)("a",{parentName:"li",href:"/docs/2.7.4/reference-pulsar-admin"},(0,t.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,t.kt)("a",{parentName:"li",href:"#update-dynamic-configuration"},"update config values")," and more."),(0,t.kt)("li",{parentName:"ul"},"In the Pulsar admin ",(0,t.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, dynamic configuration is managed through the ",(0,t.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers/configuration")," endpoint.")),(0,t.kt)("h3",{id:"update-dynamic-configuration"},"Update dynamic configuration"),(0,t.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.kt)("p",null,"The ",(0,t.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#brokers-update-dynamic-config"},(0,t.kt)("inlineCode",{parentName:"a"},"update-dynamic-config"))," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,t.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"value")," flag respectively. Here's an example for the ",(0,t.kt)("a",{parentName:"p",href:"reference-configuration.md#broker-brokerShutdownTimeoutMs"},(0,t.kt)("inlineCode",{parentName:"a"},"brokerShutdownTimeoutMs"))," parameter:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n\n"))),(0,t.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/updateDynamicConfiguration"},"POST /admin/v2/brokers/configuration/:configName/:configValue"))),(0,t.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().updateDynamicConfiguration(configName, configValue);\n\n")))),(0,t.kt)("h3",{id:"list-updated-values"},"List updated values"),(0,t.kt)("p",null,"Fetch a list of all potentially updatable configuration parameters."),(0,t.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list-dynamic-config\nbrokerShutdownTimeoutMs\n\n"))),(0,t.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/getDynamicConfigurationName"},"GET /admin/v2/brokers/configuration"))),(0,t.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getDynamicConfigurationNames();\n\n")))),(0,t.kt)("h3",{id:"list-all"},"List all"),(0,t.kt)("p",null,"Fetch a list of all parameters that have been dynamically updated."),(0,t.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers get-all-dynamic-config\nbrokerShutdownTimeoutMs:100\n\n"))),(0,t.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/getAllDynamicConfigurations"},"GET /admin/v2/brokers/configuration/values"))),(0,t.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getAllDynamicConfigurations();\n\n")))))}d.isMDXComponent=!0}}]);