"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),d=i,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),i=a(67294),r=a(86010),o=a(72389),s=a(67392),l=a(7094),u=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function h(e){var t;const{lazy:a,block:o,defaultValue:h,values:d,groupId:m,className:b}=e,f=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:h??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,l.U)(),[N,C]=(0,i.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&k.some((t=>t.value===e))&&C(e)}const A=e=>{const t=e.currentTarget,a=P.indexOf(t),n=k[a].value;n!==N&&(T(t),C(n),null!=m&&w(m,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;a=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=P[t]??P[P.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},b)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>P.push(e),onKeyDown:E,onClick:A},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,i.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return i.createElement(h,(0,n.Z)({key:String(t)},e))}},43009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),i=(a(67294),a(3905)),r=a(65488),o=a(85162);const s={id:"security-basic-auth",title:"Authentication using HTTP basic",sidebar_label:"Authentication using HTTP basic",original_id:"security-basic-auth"},l=void 0,u={unversionedId:"security-basic-auth",id:"version-2.7.5/security-basic-auth",title:"Authentication using HTTP basic",description:"Basic authentication is a simple authentication scheme built into the HTTP protocol, which uses base64-encoded username and password pairs as credentials.",source:"@site/versioned_docs/version-2.7.5/security-basic-auth.md",sourceDirName:".",slug:"/security-basic-auth",permalink:"/docs/2.7.5/security-basic-auth",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/security-basic-auth.md",tags:[],version:"2.7.5",frontMatter:{id:"security-basic-auth",title:"Authentication using HTTP basic",sidebar_label:"Authentication using HTTP basic",original_id:"security-basic-auth"},sidebar:"version-2.7.5/docsSidebar",previous:{title:"Authentication using OAuth 2.0 access tokens",permalink:"/docs/2.7.5/security-oauth2"},next:{title:"Authorization and ACLs",permalink:"/docs/2.7.5/security-authorization"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create your authentication file",id:"create-your-authentication-file",level:2},{value:"Enable basic authentication on brokers",id:"enable-basic-authentication-on-brokers",level:2},{value:"Enable basic authentication on proxies",id:"enable-basic-authentication-on-proxies",level:2},{value:"Configure basic authentication in CLI tools",id:"configure-basic-authentication-in-cli-tools",level:2},{value:"Configure basic authentication in Pulsar clients",id:"configure-basic-authentication-in-pulsar-clients",level:2}],h={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic authentication")," is a simple authentication scheme built into the HTTP protocol, which uses base64-encoded username and password pairs as credentials."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Install ",(0,i.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/programs/htpasswd.html"},(0,i.kt)("inlineCode",{parentName:"a"},"htpasswd"))," in your environment to create a password file for storing username-password pairs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Ubuntu/Debian, run the following command to install ",(0,i.kt)("inlineCode",{parentName:"p"},"htpasswd"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2-utils\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For CentOS/RHEL, run the following command to install ",(0,i.kt)("inlineCode",{parentName:"p"},"htpasswd"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yum install httpd-tools\n")))),(0,i.kt)("h2",{id:"create-your-authentication-file"},"Create your authentication file"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently, you can use MD5 (recommended) and CRYPT encryption to authenticate your password.")),(0,i.kt)("p",null,"Create a password file named ",(0,i.kt)("inlineCode",{parentName:"p"},".htpasswd")," with a user account ",(0,i.kt)("inlineCode",{parentName:"p"},"superuser/admin"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use MD5 encryption (recommended):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"htpasswd -cmb /path/to/.htpasswd superuser admin\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use CRYPT encryption:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"htpasswd -cdb /path/to/.htpasswd superuser admin\n")))),(0,i.kt)("p",null,"You can preview the content of your password file by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat path/to/.htpasswd\nsuperuser:$apr1$GBIYZYFZ$MzLcPrvoUky16mLcK6UtX/\n")),(0,i.kt)("h2",{id:"enable-basic-authentication-on-brokers"},"Enable basic authentication on brokers"),(0,i.kt)("p",null,"To configure brokers to authenticate clients, add the following parameters to the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file. If you use a standalone Pulsar, you need to add these parameters to the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},'# Configuration to enable Basic authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderBasic\n\nbasicAuthConf=file:///path/to/.htpasswd\n# basicAuthConf=/path/to/.htpasswd\n# When use the base64 format, you need to encode the .htpaswd content to bas64\n# basicAuthConf=data:;base64,YOUR-BASE64\n# basicAuthConf=YOUR-BASE64\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nbrokerClientAuthenticationParameters={"userId":"superuser","password":"admin"}\n\n# If this flag is set then the broker authenticates the original Auth data\n# else it just accepts the originalPrincipal and authorizes it (if required).\nauthenticateOriginalAuthData=true\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can also set an environment variable named ",(0,i.kt)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," and the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"-Dpulsar.auth.basic.conf=/path/to/.htpasswd"),". Pulsar reads this environment variable to implement HTTP basic authentication.")),(0,i.kt)("h2",{id:"enable-basic-authentication-on-proxies"},"Enable basic authentication on proxies"),(0,i.kt)("p",null,"To configure proxies to authenticate clients, add the following parameters to the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},'# For clients connecting to the proxy\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderBasic\n\nbasicAuthConf=file:///path/to/.htpasswd\n# basicAuthConf=/path/to/.htpasswd\n# When use the base64 format, you need to encode the .htpaswd content to bas64\n# basicAuthConf=data:;base64,YOUR-BASE64\n# basicAuthConf=YOUR-BASE64\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nbrokerClientAuthenticationParameters={"userId":"superuser","password":"admin"}\n\n# Whether client authorization credentials are forwarded to the broker for re-authorization.\n# Authentication must be enabled via authenticationEnabled=true for this to take effect.\nforwardAuthorizationCredentials=true\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can also set an environment variable named ",(0,i.kt)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," and the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"-Dpulsar.auth.basic.conf=/path/to/.htpasswd"),". Pulsar reads this environment variable to implement HTTP basic authentication.")),(0,i.kt)("h2",{id:"configure-basic-authentication-in-cli-tools"},"Configure basic authentication in CLI tools"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/reference-cli-tools"},"Command-line tools"),", such as ",(0,i.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar-admin"),", ",(0,i.kt)("a",{href:"/tools/pulsar-perf/",target:"_blank"},"Pulsar-perf")," and ",(0,i.kt)("a",{href:"/tools/pulsar-client/",target:"_blank"},"Pulsar-client"),", use the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file in your Pulsar installation. To configure basic authentication in Pulsar CLI tools, you need to add the following parameters to the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},'authPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nauthParams={"userId":"superuser","password":"admin"}\n')),(0,i.kt)("h2",{id:"configure-basic-authentication-in-pulsar-clients"},"Configure basic authentication in Pulsar clients"),(0,i.kt)("p",null,"The following example shows how to configure basic authentication when using Pulsar clients."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Java",label:"Java",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'AuthenticationBasic auth = new AuthenticationBasic();\nauth.configure("{\\"userId\\":\\"superuser\\",\\"password\\":\\"admin\\"}");\nPulsarClient client = PulsarClient.builder()\n   .serviceUrl("pulsar://broker.example.com:6650")\n   .authentication(auth)\n   .build();\n'))),(0,i.kt)(o.Z,{value:"C++",label:"C++",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <pulsar/Client.h>\n\nint main() {\n    pulsar::ClientConfiguration config;\n    AuthenticationPtr auth = pulsar::AuthBasic::create("admin", "123456")\n    config.setAuth(auth);\n    pulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n    return 0;\n}\n')))))}d.isMDXComponent=!0}}]);