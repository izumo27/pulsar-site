"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89829],{3905:function(n,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var t=a(67294);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function u(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e){if(null==n)return{};var a,t,i=function(n,e){if(null==n)return{};var a,t,i={},l=Object.keys(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var r=t.createContext({}),o=function(n){var e=t.useContext(r),a=e;return n&&(a="function"==typeof n?n(e):u(u({},e),n)),a},p=function(n){var e=o(n.components);return t.createElement(r.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(n,e){var a=n.components,i=n.mdxType,l=n.originalType,r=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),c=o(a),d=i,f=c["".concat(r,".").concat(d)]||c[d]||m[d]||l;return a?t.createElement(f,u(u({ref:e},p),{},{components:a})):t.createElement(f,u({ref:e},p))}));function d(n,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=a.length,u=new Array(l);u[0]=c;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=n,s.mdxType="string"==typeof n?n:i,u[1]=s;for(var o=2;o<l;o++)u[o]=a[o];return t.createElement.apply(null,u)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(n,e,a){a.d(e,{Z:function(){return i}});var t=a(67294);function i(n){var e=n.children,a=n.hidden,i=n.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:i},e)}},9877:function(n,e,a){a.d(e,{Z:function(){return p}});var t=a(87462),i=a(67294),l=a(72389),u=a(22662),s=a(86010),r="tabItem_LplD";function o(n){var e,a,l,o=n.lazy,p=n.block,m=n.defaultValue,c=n.values,d=n.groupId,f=n.className,v=i.Children.map(n.children,(function(n){if((0,i.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:v.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),I=(0,u.lx)(k,(function(n,e){return n.value===e.value}));if(I.length>0)throw new Error('Docusaurus error: Duplicate values "'+I.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===m?m:null!=(e=null!=m?m:null==(a=v.find((function(n){return n.props.default})))?void 0:a.props.value)?e:null==(l=v[0])?void 0:l.props.value;if(null!==A&&!k.some((function(n){return n.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+k.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.UB)(),h=g.tabGroupChoices,T=g.setTabGroupChoices,N=(0,i.useState)(A),b=N[0],P=N[1],C=[],y=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=h[d];null!=E&&E!==b&&k.some((function(n){return n.value===E}))&&P(E)}var x=function(n){var e=n.currentTarget,a=C.indexOf(e),t=k[a].value;t!==b&&(y(e),P(t),null!=d&&T(d,t))},S=function(n){var e,a=null;switch(n.key){case"ArrowRight":var t=C.indexOf(n.currentTarget)+1;a=C[t]||C[0];break;case"ArrowLeft":var i=C.indexOf(n.currentTarget)-1;a=C[i]||C[C.length-1]}null==(e=a)||e.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},k.map((function(n){var e=n.value,a=n.label,l=n.attributes;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,key:e,ref:function(n){return C.push(n)},onKeyDown:S,onFocus:x,onClick:x},l,{className:(0,s.Z)("tabs__item",r,null==l?void 0:l.className,{"tabs__item--active":b===e})}),null!=a?a:e)}))),o?(0,i.cloneElement)(v.filter((function(n){return n.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(n,e){return(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==b})}))))}function p(n){var e=(0,l.Z)();return i.createElement(o,(0,t.Z)({key:String(e)},n))}},46391:function(n,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var t=a(87462),i=a(63366),l=(a(67294),a(3905)),u=a(9877),s=a(58215),r=["components"],o={id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions",original_id:"admin-api-functions"},p=void 0,m={unversionedId:"admin-api-functions",id:"version-2.10.0/admin-api-functions",title:"Manage Functions",description:"Important",source:"@site/versioned_docs/version-2.10.0/admin-api-functions.md",sourceDirName:".",slug:"/admin-api-functions",permalink:"/docs/admin-api-functions",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/admin-api-functions.md",tags:[],version:"2.10.0",frontMatter:{id:"admin-api-functions",title:"Manage Functions",sidebar_label:"Functions",original_id:"admin-api-functions"},sidebar:"version-2.10.0/docsSidebar",previous:{title:"Topics",permalink:"/docs/admin-api-topics"},next:{title:"Packages",permalink:"/docs/admin-api-packages"}},c={},d=[{value:"Function resources",id:"function-resources",level:2},{value:"Create a function",id:"create-a-function",level:3},{value:"Update a function",id:"update-a-function",level:3},{value:"Start an instance of a function",id:"start-an-instance-of-a-function",level:3},{value:"Start all instances of a function",id:"start-all-instances-of-a-function",level:3},{value:"Stop an instance of a function",id:"stop-an-instance-of-a-function",level:3},{value:"Stop all instances of a function",id:"stop-all-instances-of-a-function",level:3},{value:"Restart an instance of a function",id:"restart-an-instance-of-a-function",level:3},{value:"Restart all instances of a function",id:"restart-all-instances-of-a-function",level:3},{value:"List all functions",id:"list-all-functions",level:3},{value:"Delete a function",id:"delete-a-function",level:3},{value:"Get info about a function",id:"get-info-about-a-function",level:3},{value:"Get status of an instance of a function",id:"get-status-of-an-instance-of-a-function",level:3},{value:"Get status of all instances of a function",id:"get-status-of-all-instances-of-a-function",level:3},{value:"Get stats of an instance of a function",id:"get-stats-of-an-instance-of-a-function",level:3},{value:"Get stats of all instances of a function",id:"get-stats-of-all-instances-of-a-function",level:3},{value:"Trigger a function",id:"trigger-a-function",level:3},{value:"Put state associated with a function",id:"put-state-associated-with-a-function",level:3},{value:"Fetch state associated with a function",id:"fetch-state-associated-with-a-function",level:3}],f={toc:d};function v(n){var e=n.components,a=(0,i.Z)(n,r);return(0,l.kt)("wrapper",(0,t.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important")),(0,l.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.orghttps://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pulsar Functions")," are lightweight compute processes that"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"consume messages from one or more Pulsar topics"),(0,l.kt)("li",{parentName:"ul"},"apply a user-supplied processing logic to each message"),(0,l.kt)("li",{parentName:"ul"},"publish the results of the computation to another topic")),(0,l.kt)("p",null,"Functions can be managed via the following methods."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Admin CLI")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"functions")," command of the ",(0,l.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"REST API")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"/admin/v3/functions")," endpoint of the admin ",(0,l.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Java Admin API")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"functions")," method of the ",(0,l.kt)("inlineCode",{parentName:"td"},"PulsarAdmin")," object in the ",(0,l.kt)("a",{parentName:"td",href:"client-libraries-java"},"Java API"),".")))),(0,l.kt)("h2",{id:"function-resources"},"Function resources"),(0,l.kt)("p",null,"You can perform the following operations on functions."),(0,l.kt)("h3",{id:"create-a-function"},"Create a function"),(0,l.kt)("p",null,"You can create a Pulsar function in cluster mode (deploy it on a Pulsar cluster) using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-create"},(0,l.kt)("inlineCode",{parentName:"a"},"create"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions create \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --inputs test-input-topic \\\n  --output persistent://public/default/test-output-topic \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --jar /examples/api-examples.jar\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName?version=2.10.0&apiVersion=v3"},"POST /admin/v3/functions/:tenant/:namespace/:functionName?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nfunctionConfig.setProcessingGuarantees(FunctionConfig.ProcessingGuarantees.ATLEAST_ONCE);\nfunctionConfig.setTopicsPattern(sourceTopicPattern);\nfunctionConfig.setSubName(subscriptionName);\nfunctionConfig.setAutoAck(true);\nfunctionConfig.setOutput(sinkTopic);\nadmin.functions().createFunction(functionConfig, fileName);\n\n')))),(0,l.kt)("h3",{id:"update-a-function"},"Update a function"),(0,l.kt)("p",null,"You can update a Pulsar function that has been deployed to a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST Admin API",value:"REST Admin API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-update"},(0,l.kt)("inlineCode",{parentName:"a"},"update"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions update \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --output persistent://public/default/update-output-topic \\\n  # other options\n\n"))),(0,l.kt)(s.Z,{value:"REST Admin API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName?version=2.10.0&apiVersion=v3"},"PUT /admin/v3/functions/:tenant/:namespace/:functionName?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nUpdateOptions updateOptions = new UpdateOptions();\nupdateOptions.setUpdateAuthData(updateAuthData);\nadmin.functions().updateFunction(functionConfig, userCodeFile, updateOptions);\n\n')))),(0,l.kt)("h3",{id:"start-an-instance-of-a-function"},"Start an instance of a function"),(0,l.kt)("p",null,"You can start a stopped function instance with ",(0,l.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-start"},(0,l.kt)("inlineCode",{parentName:"a"},"start"))," subcommand. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/start?version=2.10.0&apiVersion=v3"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/start?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().startFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,l.kt)("h3",{id:"start-all-instances-of-a-function"},"Start all instances of a function"),(0,l.kt)("p",null,"You can start all stopped function instances using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-start"},(0,l.kt)("inlineCode",{parentName:"a"},"start"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/start?version=2.10.0&apiVersion=v3"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/start?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().startFunction(tenant, namespace, functionName);\n\n")))),(0,l.kt)("h3",{id:"stop-an-instance-of-a-function"},"Stop an instance of a function"),(0,l.kt)("p",null,"You can stop a function instance with ",(0,l.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stop"},(0,l.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stop?version=2.10.0&apiVersion=v3"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stop?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().stopFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,l.kt)("h3",{id:"stop-all-instances-of-a-function"},"Stop all instances of a function"),(0,l.kt)("p",null,"You can stop all function instances using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stop"},(0,l.kt)("inlineCode",{parentName:"a"},"stop"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/stop?version=2.10.0&apiVersion=v3"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/stop?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().stopFunction(tenant, namespace, functionName);\n\n")))),(0,l.kt)("h3",{id:"restart-an-instance-of-a-function"},"Restart an instance of a function"),(0,l.kt)("p",null,"Restart a function instance with ",(0,l.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-restart"},(0,l.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/restart?version=2.10.0&apiVersion=v3"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/restart?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().restartFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,l.kt)("h3",{id:"restart-all-instances-of-a-function"},"Restart all instances of a function"),(0,l.kt)("p",null,"You can restart all function instances using Admin CLI, REST API or Java admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-restart"},(0,l.kt)("inlineCode",{parentName:"a"},"restart"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/restart?version=2.10.0&apiVersion=v3"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/restart?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().restartFunction(tenant, namespace, functionName);\n\n")))),(0,l.kt)("h3",{id:"list-all-functions"},"List all functions"),(0,l.kt)("p",null,"You can list all Pulsar functions running under a specific tenant and namespace using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-list"},(0,l.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions list \\\n  --tenant public \\\n  --namespace default\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace?version=2.10.0&apiVersion=v3"},"GET /admin/v3/functions/:tenant/:namespace?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctions(tenant, namespace);\n\n")))),(0,l.kt)("h3",{id:"delete-a-function"},"Delete a function"),(0,l.kt)("p",null,"You can delete a Pulsar function that is running on a Pulsar cluster using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-delete"},(0,l.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions delete \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName?version=2.10.0&apiVersion=v3"},"DELETE /admin/v3/functions/:tenant/:namespace/:functionName?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().deleteFunction(tenant, namespace, functionName);\n\n")))),(0,l.kt)("h3",{id:"get-info-about-a-function"},"Get info about a function"),(0,l.kt)("p",null,"You can get information about a Pulsar function currently running in cluster mode using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-get"},(0,l.kt)("inlineCode",{parentName:"a"},"get"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions get \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName?version=2.10.0&apiVersion=v3"},"GET /admin/v3/functions/:tenant/:namespace/:functionName?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunction(tenant, namespace, functionName);\n\n")))),(0,l.kt)("h3",{id:"get-status-of-an-instance-of-a-function"},"Get status of an instance of a function"),(0,l.kt)("p",null,"You can get the current status of a Pulsar function instance with ",(0,l.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-status"},(0,l.kt)("inlineCode",{parentName:"a"},"status"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/status?version=2.10.0&apiVersion=v3"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/status?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,l.kt)("h3",{id:"get-status-of-all-instances-of-a-function"},"Get status of all instances of a function"),(0,l.kt)("p",null,"You can get the current status of a Pulsar function instance using Admin CLI, REST API or Java Admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-status"},(0,l.kt)("inlineCode",{parentName:"a"},"status"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/status?version=2.10.0&apiVersion=v3"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/status?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName);\n\n")))),(0,l.kt)("h3",{id:"get-stats-of-an-instance-of-a-function"},"Get stats of an instance of a function"),(0,l.kt)("p",null,"You can get the current stats of a Pulsar Function instance with ",(0,l.kt)("inlineCode",{parentName:"p"},"instance-id")," using Admin CLI, REST API or Java admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stats"},(0,l.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stats?version=2.10.0&apiVersion=v3"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/:instanceId/stats?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStats(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n")))),(0,l.kt)("h3",{id:"get-stats-of-all-instances-of-a-function"},"Get stats of all instances of a function"),(0,l.kt)("p",null,"You can get the current stats of a Pulsar function using Admin CLI, REST API or Java admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-stats"},(0,l.kt)("inlineCode",{parentName:"a"},"stats"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/stats?version=2.10.0&apiVersion=v3"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/stats?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionStats(tenant, namespace, functionName);\n\n")))),(0,l.kt)("h3",{id:"trigger-a-function"},"Trigger a function"),(0,l.kt)("p",null,"You can trigger a specified Pulsar function with a supplied value using Admin CLI, REST API or Java admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-trigger"},(0,l.kt)("inlineCode",{parentName:"a"},"trigger"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --topic (the name of input topic) \\\n  --trigger-value \\"hello pulsar\\"\n  # or --trigger-file (the path of trigger file)\n\n'))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/trigger?version=2.10.0&apiVersion=v3"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/trigger?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().triggerFunction(tenant, namespace, functionName, topic, triggerValue, triggerFile);\n\n")))),(0,l.kt)("h3",{id:"put-state-associated-with-a-function"},"Put state associated with a function"),(0,l.kt)("p",null,"You can put the state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-putstate"},(0,l.kt)("inlineCode",{parentName:"a"},"putstate"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin functions putstate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --state "{\\"key\\":\\"pulsar\\", \\"stringValue\\":\\"hello pulsar\\"}"\n\n'))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/state/:key?version=2.10.0&apiVersion=v3"},"POST /admin/v3/functions/:tenant/:namespace/:functionName/state/:key?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nTypeReference<FunctionState> typeRef = new TypeReference<FunctionState>() {};\nFunctionState stateRepr = ObjectMapperFactory.getThreadLocal().readValue(state, typeRef);\nadmin.functions().putFunctionState(tenant, namespace, functionName, stateRepr);\n\n")))),(0,l.kt)("h3",{id:"fetch-state-associated-with-a-function"},"Fetch state associated with a function"),(0,l.kt)("p",null,"You can fetch the current state associated with a Pulsar function using Admin CLI, REST API or Java admin API."),(0,l.kt)(u.Z,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin CLI",value:"Java Admin CLI"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#functions-querystate"},(0,l.kt)("inlineCode",{parentName:"a"},"querystate"))," subcommand. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin functions querystate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --key (the key of state)\n\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/functions-rest-api#/admin/v3/functions/:tenant/:namespace/:functionName/state/:key?version=2.10.0&apiVersion=v3"},"GET /admin/v3/functions/:tenant/:namespace/:functionName/state/:key?version=2.10.0"))),(0,l.kt)(s.Z,{value:"Java Admin CLI",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.functions().getFunctionState(tenant, namespace, functionName, key);\n\n")))))}v.isMDXComponent=!0}}]);