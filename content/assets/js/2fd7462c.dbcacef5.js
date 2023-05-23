"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),l=n(67294),r=n(86010),o=n(12466),s=n(16550),i=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=i??p;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var b=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,r.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},l.createElement(v,(0,a.Z)({},e,t)),l.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return l.createElement(k,(0,a.Z)({key:String(t)},e))}},12047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),l=(n(67294),n(3905)),r=n(74866),o=n(85162);const s={id:"administration-pulsar-shell",title:"Pulsar Shell",sidebar_label:"Pulsar Shell"},i=void 0,u={unversionedId:"administration-pulsar-shell",id:"administration-pulsar-shell",title:"Pulsar Shell",description:"Pulsar shell is a fast and flexible shell for Pulsar cluster management, messaging, and more.",source:"@site/docs/administration-pulsar-shell.md",sourceDirName:".",slug:"/administration-pulsar-shell",permalink:"/docs/next/administration-pulsar-shell",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/administration-pulsar-shell.md",tags:[],version:"current",frontMatter:{id:"administration-pulsar-shell",title:"Pulsar Shell",sidebar_label:"Pulsar Shell"},sidebar:"docsSidebar",previous:{title:"Pulsar Manager",permalink:"/docs/next/administration-pulsar-manager"},next:{title:"Load balance",permalink:"/docs/next/administration-load-balance"}},c={},p=[{value:"Use case",id:"use-case",level:2},{value:"Install Pulsar Shell",id:"install-pulsar-shell",level:2},{value:"Connect to your cluster",id:"connect-to-your-cluster",level:2},{value:"Run commands sequentially",id:"run-commands-sequentially",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pulsar shell is a fast and flexible shell for Pulsar cluster management, messaging, and more.\nIt's great for quickly switching between different clusters, and can modify cluster or tenant configurations in an instant."),(0,l.kt)("h2",{id:"use-case"},"Use case"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Administration: find all the ",(0,l.kt)("a",{parentName:"li",href:"/docs/next/admin-api-overview"},"Admin API")," features under the ",(0,l.kt)("inlineCode",{parentName:"li"},"admin")," command."),(0,l.kt)("li",{parentName:"ul"},"Client: find all the ",(0,l.kt)("a",{parentName:"li",href:"pathname:///reference/#/next/pulsar-client/"},"pulsar-client")," features under the ",(0,l.kt)("inlineCode",{parentName:"li"},"client")," command.")),(0,l.kt)("h2",{id:"install-pulsar-shell"},"Install Pulsar Shell"),(0,l.kt)("p",null,"Download the tarball from the ",(0,l.kt)("a",{parentName:"p",href:"pathname:///download"},"download page")," and extract it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://archive.apache.org/dist/pulsar/pulsar-3.0.0/apache-pulsar-shell-3.0.0-bin.tar.gz\ntar xzvf apache-pulsar-shell-3.0.0-bin.tar.gz\ncd apache-pulsar-shell-3.0.0-bin.tar.gz\n")),(0,l.kt)("p",null,"Now you can enter Pulsar shell's interactive mode:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/pulsar-shell\nWelcome to Pulsar shell!\n  Service URL: pulsar://localhost:6650/\n  Admin URL: http://localhost:8080/\n\nType help to get started or try the autocompletion (TAB button).\nType exit or quit to end the shell session.\n\ndefault(localhost)>\n")),(0,l.kt)("h2",{id:"connect-to-your-cluster"},"Connect to your cluster"),(0,l.kt)("p",null,"By default, the shell tries to connect to a local Pulsar instance.\nTo connect to a different cluster, you have to register the cluster with Pulsar shell. You can do this in a few different ways depending on where your config file is located:"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The configuration file must be a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"client.conf")," file, the same one you use for ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," and other client tools.")),(0,l.kt)(r.Z,{groupId:"shell-config-modes",defaultValue:"url",values:[{label:"Remote URL",value:"url"},{label:"File",value:"file"},{label:"Inline",value:"inline"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"url",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--url")," value must point to a valid remote file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"default(localhost)> config create --url https://<url_to_my_client.conf> mycluster\n"))),(0,l.kt)(o.Z,{value:"file",mdxType:"TabItem"},(0,l.kt)("p",null,"If the file is on your local machine, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--file")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"default(localhost)> config create --file ./my-cluster-my-client.conf mycluster\n"))),(0,l.kt)(o.Z,{value:"inline",mdxType:"TabItem"},(0,l.kt)("p",null,"You can encode the content of the config to base64 and specify it with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--value")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'default(localhost)> config create --value "base64:<client.conf_base64_encoded>" mycluster\n')))),(0,l.kt)("p",null,"Once you've configured your cluster, set it as current:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"default(localhost)> config use mycluster\nWelcome to Pulsar shell!\n  Service URL: pulsar+ssl://mycluster:6651/\n  Admin URL: https://mycluster:8443/\n\nType help to get started or try the autocompletion (TAB button).\nType exit or quit to end the shell session.\n\nmy-cluster(mycluster)>\n")),(0,l.kt)("h2",{id:"run-commands-sequentially"},"Run commands sequentially"),(0,l.kt)("p",null,"To run a bunch of admin commands sequentially, you can use Pulsar shell's non-interactive mode.\nFor example, to set up a new tenant with policies, you would normally need to run multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," commands."),(0,l.kt)("p",null,"Let's say you want to create a new tenant ",(0,l.kt)("inlineCode",{parentName:"p"},"new-tenant")," with a namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"new-namespace")," in it.\nThere are multiple ways to do this with Pulsar shell non-interactive mode:"),(0,l.kt)(r.Z,{groupId:"shell-noninteractive-modes",defaultValue:"single-command",values:[{label:"Single command",value:"single-command"},{label:"File",value:"file"},{label:"Unix pipe",value:"pipe"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"single-command",mdxType:"TabItem"},(0,l.kt)("p",null,"Specify a multi-line command with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-e")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'./bin/pulsar-shell -e "\nconfig use my-cluster\nadmin tenants create new-tenant\nadmin namespaces create new-tenant/new-namespace\n" --fail-on-error\n'))),(0,l.kt)(o.Z,{value:"file",mdxType:"TabItem"},(0,l.kt)("p",null,"Specify a file command with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-f")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "\n# First use my-cluster config\nconfig use my-cluster\n# Now it creates a new tenant\nadmin tenants create new-tenant\n# And then it creates a new namespace inside the tenant\nadmin namespaces create new-tenant/new-namespace\n" > setup-shell.txt\n\n./bin/pulsar-shell -f ./setup-shell.txt --fail-on-error\n'))),(0,l.kt)(o.Z,{value:"pipe",mdxType:"TabItem"},(0,l.kt)("p",null,"Make the shell read from the standard input ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\necho "\n# First use my-cluster config\nconfig use my-cluster\n# Now it creates a new tenant\nadmin tenants create new-tenant\n# And then it creates a new namespace inside the tenant\nadmin namespaces create new-tenant/new-namespace\n" > ./bin/pulsar-shell --fail-on-error -\n\n')))))}f.isMDXComponent=!0}}]);