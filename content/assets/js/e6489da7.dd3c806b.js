"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90567],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),i=a(86010),o=a(72389),l=a(67392),s=a(7094),p=a(12466);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:t,block:a,defaultValue:o,values:c,groupId:h,className:m}=e,d=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??d.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,l.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??d.find((e=>e.props.default))?.props.value??d[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,s.U)(),[y,N]=(0,r.useState)(f),A=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==y&&v.some((t=>t.value===e))&&N(e)}const z=e=>{const t=e.currentTarget,a=A.indexOf(t),n=v[a].value;n!==y&&(C(t),N(n),null!=h&&g(h,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":z(e);break;case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;t=A[a]??A[0];break}case"ArrowLeft":{const a=A.indexOf(e.currentTarget)-1;t=A[a]??A[A.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>A.push(e),onKeyDown:P,onClick:z},o,{className:(0,i.Z)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,r.cloneElement)(d.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},d.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function h(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},53987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(65488),o=a(85162);const l={id:"security-athenz",title:"Authentication using Athenz",sidebar_label:"Authentication using Athenz"},s=void 0,p={unversionedId:"security-athenz",id:"security-athenz",title:"Authentication using Athenz",description:"Athenz is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as z-tokens) to establish the identity of the client.",source:"@site/docs/security-athenz.md",sourceDirName:".",slug:"/security-athenz",permalink:"/docs/next/security-athenz",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/security-athenz.md",tags:[],version:"current",frontMatter:{id:"security-athenz",title:"Authentication using Athenz",sidebar_label:"Authentication using Athenz"},sidebar:"docsSidebar",previous:{title:"Authentication using JWT",permalink:"/docs/next/security-jwt"},next:{title:"Authentication using Kerberos",permalink:"/docs/next/security-kerberos"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a tenant domain and service",id:"create-a-tenant-domain-and-service",level:3},{value:"Create a provider domain and add the tenant service to role members",id:"create-a-provider-domain-and-add-the-tenant-service-to-role-members",level:3},{value:"Enable Athenz authentication on brokers/proxies",id:"enable-athenz-authentication-on-brokersproxies",level:2},{value:"Configure Athenz authentication in Pulsar clients",id:"configure-athenz-authentication-in-pulsar-clients",level:2},{value:"Use Copper Argos",id:"use-copper-argos",level:3},{value:"Configure Athenz authentication in CLI tools",id:"configure-athenz-authentication-in-cli-tools",level:2}],h={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz"},"Athenz")," is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as ",(0,r.kt)("em",{parentName:"p"},"z-tokens"),") to establish the identity of the client."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/decent_authz_flow.md"},"decentralized Athenz system")," contains an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zms.md"},"authori",(0,r.kt)("strong",{parentName:"a"},"Z"),"ation ",(0,r.kt)("strong",{parentName:"a"},"M"),"anagement ",(0,r.kt)("strong",{parentName:"a"},"S"),"ystem")," (ZMS) server and an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zts"},"authori",(0,r.kt)("strong",{parentName:"a"},"Z"),"ation ",(0,r.kt)("strong",{parentName:"a"},"T"),"oken ",(0,r.kt)("strong",{parentName:"a"},"S"),"ystem")," (ZTS) server."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To begin, you need to set up Athenz service access control by creating domains for the ",(0,r.kt)("em",{parentName:"p"},"provider")," (which provides some resources to other services with some authentication/authorization policies) and the ",(0,r.kt)("em",{parentName:"p"},"tenant")," (which is provisioned to access some resources in a provider). In this case, the provider corresponds to the Pulsar service itself and the tenant corresponds to each application using Pulsar (typically, a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#tenant"},"tenant")," in Pulsar)."),(0,r.kt)("h3",{id:"create-a-tenant-domain-and-service"},"Create a tenant domain and service"),(0,r.kt)("p",null,"On the tenant side, do the followings:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a domain, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"shopping"),"."),(0,r.kt)("li",{parentName:"ol"},"Generate a private/public key pair."),(0,r.kt)("li",{parentName:"ol"},"Create a service, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"some_app"),", on the domain with the public key.")),(0,r.kt)("p",null,"Note that you need to specify the private key generated in step 2 when the Pulsar client connects to the broker."),(0,r.kt)("p",null,"For more specific steps involving the Athenz UI, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#client-tenant-domain"},"Example Service Access Control Setup"),"."),(0,r.kt)("h3",{id:"create-a-provider-domain-and-add-the-tenant-service-to-role-members"},"Create a provider domain and add the tenant service to role members"),(0,r.kt)("p",null,"On the provider side, you need to do the following things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a domain, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a role."),(0,r.kt)("li",{parentName:"ol"},"Add the tenant service to the members of the role.")),(0,r.kt)("p",null,"Note that you can specify any action and resource in step 2 since they are not used on Pulsar. In other words, Pulsar uses the Athenz role token only for authentication, ",(0,r.kt)("em",{parentName:"p"},"not")," for authorization."),(0,r.kt)("p",null,"For more specific steps involving the Athenz UI, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#server-provider-domain"},"Example Service Access Control Setup"),"."),(0,r.kt)("h2",{id:"enable-athenz-authentication-on-brokersproxies"},"Enable Athenz authentication on brokers/proxies"),(0,r.kt)("p",null,"To configure brokers/proxies to authenticate clients using Authenz, add the following parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," files and provide the class name of the Athenz authentication provider as well as a comma-separated list of provider domain names. If you use a standalone Pulsar, you need to add these parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'# Add the Athenz auth provider\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderAthenz\nathenzDomainNames=pulsar\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, or when the proxy connects to brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nbrokerClientAuthenticationParameters={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n')),(0,r.kt)("h2",{id:"configure-athenz-authentication-in-pulsar-clients"},"Configure Athenz authentication in Pulsar clients"),(0,r.kt)("p",null,"To use Athenz as an authentication provider, you need to provide values for four parameters in a hash:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tenantDomain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tenantService")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providerDomain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"privateKey"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"privateKey")," parameter supports the following three pattern formats:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file:///path/to/file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file:/path/to/file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data:application/x-pem-file;base64,<base64-encoded value>")))),(0,r.kt)("p",null,"You can also set an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"keyId"),". The following is an example."),(0,r.kt)(i.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Node.js",value:"Node.js"},{label:"Go",value:"Go"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> authParams = new HashMap();\nauthParams.put("ztsUrl", "http://localhost:9998");\nauthParams.put("tenantDomain", "shopping"); // Tenant domain name\nauthParams.put("tenantService", "some_app"); // Tenant service name\nauthParams.put("providerDomain", "pulsar"); // Provider domain name\nauthParams.put("privateKey", "file:///path/to/private.pem"); // Tenant private key path\nauthParams.put("keyId", "v1"); // Key id for the tenant private key (optional, default: "0")\n\nAuthentication athenzAuth = AuthenticationFactory\n        .create(AuthenticationAthenz.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(athenzAuth)\n        .build();\n'))),(0,r.kt)(o.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'authPlugin = "athenz"\nauthParams = """\n{\n"tenantDomain": "shopping",\n"tenantService": "some_app",\n"providerDomain": "pulsar",\n"privateKey": "file:///path/to/private.pem",\n"ztsUrl": "http://localhost:9998"\n}\n"""\n\nclient = Client(\n    "pulsar://my-broker.com:6650",\n    authentication=Authentication(authPlugin, authParams),\n)\n'))),(0,r.kt)(o.Z,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string params = R"({\n        "tenantDomain": "shopping",\n        "tenantService": "some_app",\n        "providerDomain": "pulsar",\n        "privateKey": "file:///path/to/private.pem",\n        "ztsUrl": "http://localhost:9998"\n    })";\npulsar::AuthenticationPtr auth = pulsar::AuthAthenz::create(params);\nClientConfiguration config = ClientConfiguration();\nconfig.setAuth(auth);\nClient client("pulsar://my-broker.com:6650", config);\n'))),(0,r.kt)(o.Z,{value:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const auth = new Pulsar.AuthenticationAthenz({\n    tenantDomain: "shopping",\n    tenantService: "some_app",\n    providerDomain: "pulsar",\n    privateKey: "file:///path/to/private.pem",\n    ztsUrl: "http://localhost:9998"\n});\n\nconst client = new Pulsar.Client({\n    serviceUrl: \'pulsar://my-broker.com:6650\',\n    authentication: auth\n});\n'))),(0,r.kt)(o.Z,{value:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'provider := pulsar.NewAuthenticationAthenz(\n        "pulsar",\n        "shopping",\n        "some_app",\n        "file:///path/to/private.pem",\n        "v1",\n        "",\n        "http://localhost:9998")\nclient, err := pulsarNewClient(ClientOptions{\n        URL:                   "pulsar://my-broker.com:6650",\n        Authentication:        basicAuth,\n    })\n')))),(0,r.kt)("h3",{id:"use-copper-argos"},"Use Copper Argos"),(0,r.kt)("p",null,"Athenz has a mechanism called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AthenZ/athenz/blob/master/docs/copper_argos.md"},"Copper Argos"),". This means that ZTS distributes an X.509 certificate and private key pair to each service, which it can use to identify itself to other services within the organization."),(0,r.kt)("p",null,"Pulsar currently supports Copper Argos only in the Java client. When using Copper Argos, you need to provide at least the following four parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providerDomain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x509CertChain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"privateKey")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"caCert"))),(0,r.kt)("p",null,"In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"tenantDomain"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tenantService")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"keyId")," are ignored."),(0,r.kt)(i.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> authParams = new HashMap();\nauthParams.put("ztsUrl", "http://localhost:9998");\nauthParams.put("providerDomain", "pulsar"); // Provider domain name\nauthParams.put("x509CertChain", "file:///path/to/x509cert.pem"); // Distributed X.509 certificate path\nauthParams.put("privateKey", "file:///path/to/private.pem"); // Distributed private key path\nauthParams.put("caCert", "file:///path/to/cacert.pem"); // CA certificate path\n\nAuthentication athenzAuth = AuthenticationFactory\n        .create(AuthenticationAthenz.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(athenzAuth)\n        .build();\n')))),(0,r.kt)("h2",{id:"configure-athenz-authentication-in-cli-tools"},"Configure Athenz authentication in CLI tools"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},"Command-line tools")," like ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,r.kt)("p",null,"You need to add the following authentication parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file to use Athenz with CLI tools of Pulsar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'# URL for the broker\nserviceUrl=http://broker.example.com:8080\n\n# Set Athenz auth plugin and its parameters\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nauthParams={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n')))}d.isMDXComponent=!0}}]);