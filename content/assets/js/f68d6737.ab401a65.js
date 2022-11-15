"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7500],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,b=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(86010),l=a(72389),o=a(67392),s=a(7094),d=a(12466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:m,groupId:b,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[C,w]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,d.o5)();if(null!=b){const e=N[b];null!=e&&e!==C&&h.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==C&&(P(t),w(n),null!=b&&y(b,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},k)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>T.push(e),onKeyDown:O,onClick:E},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},12065:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),i=a(65488),l=a(85162);const o={id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication",original_id:"cookbooks-deduplication"},s=void 0,d={unversionedId:"cookbooks-deduplication",id:"version-2.6.1/cookbooks-deduplication",title:"Message deduplication",description:"When Message deduplication is enabled, it ensures that each message produced on Pulsar topics is persisted to disk only once, even if the message is produced more than once. Message deduplication is handled automatically on the server side.",source:"@site/versioned_docs/version-2.6.1/cookbooks-deduplication.md",sourceDirName:".",slug:"/cookbooks-deduplication",permalink:"/docs/2.6.1/cookbooks-deduplication",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/cookbooks-deduplication.md",tags:[],version:"2.6.1",frontMatter:{id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication",original_id:"cookbooks-deduplication"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Topic compaction",permalink:"/docs/2.6.1/cookbooks-compaction"},next:{title:"Non-persistent messaging",permalink:"/docs/2.6.1/cookbooks-non-persistent"}},p={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure message deduplication",id:"configure-message-deduplication",level:2},{value:"Set default value at the broker-level",id:"set-default-value-at-the-broker-level",level:3},{value:"Enable message deduplication",id:"enable-message-deduplication",level:3},{value:"Disable message deduplication",id:"disable-message-deduplication",level:3},{value:"Pulsar clients",id:"pulsar-clients",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When ",(0,r.kt)("strong",{parentName:"p"},"Message deduplication")," is enabled, it ensures that each message produced on Pulsar topics is persisted to disk ",(0,r.kt)("em",{parentName:"p"},"only once"),", even if the message is produced more than once. Message deduplication is handled automatically on the server side. "),(0,r.kt)("p",null,"To use message deduplication in Pulsar, you need to configure your Pulsar brokers and clients."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"You can enable or disable message deduplication on a per-namespace basis. By default, it is disabled on all namespaces. You can enable it in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable for all namespaces at the broker-level"),(0,r.kt)("li",{parentName:"ul"},"Enable for specific namespaces with the ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar-admin namespaces")," interface")),(0,r.kt)("h2",{id:"configure-message-deduplication"},"Configure message deduplication"),(0,r.kt)("p",null,"You can configure message deduplication in Pulsar using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-configuration#broker"},(0,r.kt)("inlineCode",{parentName:"a"},"broker.conf"))," configuration file. The following deduplication-related parameters are available."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEnabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the default behavior for message deduplication in the Pulsar broker. If it is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", message deduplication is enabled by default on all namespaces; if it is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", you have to enable or disable deduplication on a per-namespace basis."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationMaxNumberOfProducers")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum number of producers for which information is stored for deduplication purposes."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEntriesInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of entries after which a deduplication informational snapshot is taken. A larger interval leads to fewer snapshots being taken, though this lengthens the topic recovery time (the time required for entries published after the snapshot to be replayed)."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationProducerInactivityTimeoutMinutes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The time of inactivity (in minutes) after which the broker discards deduplication information related to a disconnected producer."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"360")," (6 hours)")))),(0,r.kt)("h3",{id:"set-default-value-at-the-broker-level"},"Set default value at the broker-level"),(0,r.kt)("p",null,"By default, message deduplication is ",(0,r.kt)("em",{parentName:"p"},"disabled")," on all Pulsar namespaces. To enable it by default on all namespaces, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and re-start the broker."),(0,r.kt)("p",null,"Even if you set the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled"),", enabling or disabling via Pulsar admin CLI overrides the default settings at the broker-level."),(0,r.kt)("h3",{id:"enable-message-deduplication"},"Enable message deduplication"),(0,r.kt)("p",null,"Though message deduplication is disabled by default at broker-level, you can enable message deduplication for specific namespaces using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#namespace-set-deduplication"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespace set-deduplication"))," command. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--enable"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," flag and specify the namespace. The following is an example with ",(0,r.kt)("inlineCode",{parentName:"p"},"<tenant>/<namespace>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --enable # or just -e\n\n")),(0,r.kt)("h3",{id:"disable-message-deduplication"},"Disable message deduplication"),(0,r.kt)("p",null,"Even if you enable message deduplication at broker-level, you can disable message deduplication for a specific namespace using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-pulsar-admin#namespace-set-deduplication"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespace set-deduplication"))," command. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag and specify the namespace. The following is an example with ",(0,r.kt)("inlineCode",{parentName:"p"},"<tenant>/<namespace>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --disable # or just -d\n\n")),(0,r.kt)("h2",{id:"pulsar-clients"},"Pulsar clients"),(0,r.kt)("p",null,"If you enable message deduplication in Pulsar brokers, you need complete the following tasks for your client producers:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Specify a name for the producer."),(0,r.kt)("li",{parentName:"ol"},"Set the message timeout to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," (namely, no timeout).")),(0,r.kt)("p",null,"The instructions for Java, Python, and C++ clients are different."),(0,r.kt)(i.Z,{defaultValue:"Java clients",values:[{label:"Java clients",value:"Java clients"},{label:"Python clients",value:"Python clients"},{label:"C++ clients",value:"C++ clients"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java clients",mdxType:"TabItem"},(0,r.kt)("p",null,"To enable message deduplication on a ",(0,r.kt)("a",{parentName:"p",href:"client-libraries-java.md#producers"},"Java producer"),", set the producer name using the ",(0,r.kt)("inlineCode",{parentName:"p"},"producerName")," setter, and set the timeout to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"sendTimeout")," setter. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Producer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport java.util.concurrent.TimeUnit;\n\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\nProducer producer = pulsarClient.newProducer()\n        .producerName("producer-1")\n        .topic("persistent://public/default/topic-1")\n        .sendTimeout(0, TimeUnit.SECONDS)\n        .create();\n\n'))),(0,r.kt)(l.Z,{value:"Python clients",mdxType:"TabItem"},(0,r.kt)("p",null,"To enable message deduplication on a ",(0,r.kt)("a",{parentName:"p",href:"client-libraries-python.md#producers"},"Python producer"),", set the producer name using ",(0,r.kt)("inlineCode",{parentName:"p"},"producer_name"),", and set the timeout to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"send_timeout_millis"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nimport pulsar\n\nclient = pulsar.Client("pulsar://localhost:6650")\nproducer = client.create_producer(\n    "persistent://public/default/topic-1",\n    producer_name="producer-1",\n    send_timeout_millis=0)\n\n'))),(0,r.kt)(l.Z,{value:"C++ clients",mdxType:"TabItem"},(0,r.kt)("p",null,"To enable message deduplication on a ",(0,r.kt)("a",{parentName:"p",href:"client-libraries-cpp.md#producer"},"C++ producer"),", set the producer name using ",(0,r.kt)("inlineCode",{parentName:"p"},"producer_name"),", and set the timeout to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"send_timeout_millis"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://some-tenant/ns1/topic-1";\nstd::string producerName = "producer-1";\n\nClient client(serviceUrl);\n\nProducerConfiguration producerConfig;\nproducerConfig.setSendTimeout(0);\nproducerConfig.setProducerName(producerName);\n\nProducer producer;\n\nResult result = client.createProducer(topic, producerConfig, producer);\n\n')))))}m.isMDXComponent=!0}}]);