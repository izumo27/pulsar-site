"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[37663],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(h,i(i({ref:t},o),{},{components:a})):r.createElement(h,i({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58495:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++ client"},i=void 0,s={unversionedId:"client-libraries-cpp",id:"client-libraries-cpp",title:"Pulsar C++ client",description:"You can use a Pulsar C++ client to create Pulsar producers, consumers, and readers in C++. All the methods in Pulsar C++ clients are thread-safe.",source:"@site/docs/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/next/client-libraries-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-cpp.md",tags:[],version:"current",frontMatter:{id:"client-libraries-cpp",title:"Pulsar C++ client",sidebar_label:"C++ client"},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/next/client-libraries-java-use"},next:{title:"Set up",permalink:"/docs/next/client-libraries-cpp-setup"}},p={},c=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2},{value:"Changes for 3.0.0 and later versions",id:"changes-for-300-and-later-versions",level:2}],o={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use a Pulsar C++ client to create Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#producer"},"producers"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#consumer"},"consumers"),", and ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#reader"},"readers")," in C++. All the methods in Pulsar C++ clients are thread-safe."),(0,n.kt)("h2",{id:"get-started"},"Get started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-cpp-setup"},"Set up C++ client library")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-cpp-initialize"},"Initialize a C++ client")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-cpp-use"},"Use a C++ client"))),(0,n.kt)("h2",{id:"whats-next"},"What's next?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-clients"},"Work with clients")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-producers"},"Work with producers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-consumers"},"Work with consumers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-readers"},"Work with readers"))),(0,n.kt)("h2",{id:"reference-doc"},"Reference doc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.2.x"},"C++ client API docs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.2.x/classpulsar_1_1_client_configuration.html"},"Client configurations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.2.x/classpulsar_1_1_producer_configuration.html"},"Producer configurations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.2.x/classpulsar_1_1_consumer_configuration.html"},"Consumer configurations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/cpp/3.2.x/classpulsar_1_1_reader_configuration.html"},"Reader configurations")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/release-notes/client-cpp"},"Release notes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/tree/main/examples"},"Code examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/blob/main/include/pulsar/Schema.h"},"Supported schema types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/client-feature-matrix/"},"Client feature matrix"))),(0,n.kt)("h2",{id:"changes-for-300-and-later-versions"},"Changes for 3.0.0 and later versions"),(0,n.kt)("p",null,"The new version of the Pulsar C++ client starts from 3.0.0 and has been no longer consistent with Pulsar since 2.10.x. For the latest releases, see the ",(0,n.kt)("a",{parentName:"p",href:"/download/"},"Download")," page."),(0,n.kt)("p",null,"Take the ",(0,n.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.0.0/"},"3.0.0 release")," for example, there are following subdirectories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"apk-arm64: the Alpine Linux packages for ARM64 architectures"),(0,n.kt)("li",{parentName:"ul"},"apk-x86_64: the Alpine Linux packages for x64 architectures"),(0,n.kt)("li",{parentName:"ul"},"deb-arm64: the Debian-based Linux packages for ARM64 architectures"),(0,n.kt)("li",{parentName:"ul"},"deb-x86_64: the Debian-based Linux packages for x64 architectures"),(0,n.kt)("li",{parentName:"ul"},"rpm-arm64: the RedHat-based Linux packages for ARM64 architectures"),(0,n.kt)("li",{parentName:"ul"},"rpm-x86_64: the RedHat-based Linux packages for x64 architectures")),(0,n.kt)("p",null,"These Linux packages above all contain the C++ headers installed under ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/include")," and the following libraries installed under ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"libpulsar.so: the shared library that links 3rd party dependencies statically"),(0,n.kt)("li",{parentName:"ul"},"libpulsar.a: the static library"),(0,n.kt)("li",{parentName:"ul"},"libpulsarwithdeps.a: the fat static library that includes all 3rd party dependencies")),(0,n.kt)("p",null,"Here is an example to link these libraries for a C++ source file named ",(0,n.kt)("inlineCode",{parentName:"p"},"main.cc"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Link to libpulsar.so\ng++ -std=c++11 main.cc -lpulsar\n# Link to libpulsarwithdeps.a\ng++ -std=c++11 main.cc /usr/lib/libpulsarwithdeps.a -lpthread -ldl\n# Link to libpulsar.a\ng++ -std=c++11 main.cc /usr/lib/libpulsar.a \\\n  -lprotobuf -lcurl -lssl -lcrypto -lz -lzstd -lsnappy -lpthread -ldl\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Linking to ",(0,n.kt)("inlineCode",{parentName:"p"},"libpulsar.a")," can be difficult for beginners because the 3rd party dependencies must be compatible. For example, the protobuf version must be 3.20.0 or higher for Pulsar C++ client 3.0.0. It's better to link to ",(0,n.kt)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," instead.")),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Before 3.0.0, there was a ",(0,n.kt)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),", which is removed now.")))}d.isMDXComponent=!0}}]);