"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[93232],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return t?n.createElement(k,o(o({ref:a},d),{},{components:t})):n.createElement(k,o({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74745:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],i={id:"getting-started-standalone",title:"Set up a standalone Pulsar locally",sidebar_label:"Run Pulsar locally",original_id:"getting-started-standalone"},s=void 0,p={unversionedId:"getting-started-standalone",id:"version-2.10.0/getting-started-standalone",title:"Set up a standalone Pulsar locally",description:"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary RocksDB and BookKeeper components running inside of a single Java Virtual Machine (JVM) process.",source:"@site/versioned_docs/version-2.10.0/getting-started-standalone.md",sourceDirName:".",slug:"/getting-started-standalone",permalink:"/docs/getting-started-standalone",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/getting-started-standalone.md",tags:[],version:"2.10.0",frontMatter:{id:"getting-started-standalone",title:"Set up a standalone Pulsar locally",sidebar_label:"Run Pulsar locally",original_id:"getting-started-standalone"},sidebar:"version-2.10.0/docsSidebar",previous:{title:"About",permalink:"/docs/"},next:{title:"Run Pulsar in Docker",permalink:"/docs/getting-started-docker"}},d={},c=[{value:"Install Pulsar standalone",id:"install-pulsar-standalone",level:2},{value:"System requirements",id:"system-requirements",level:3},{value:"Install JDK on M1",id:"install-jdk-on-m1",level:4},{value:"Install Pulsar using binary release",id:"install-pulsar-using-binary-release",level:3},{value:"What your package contains",id:"what-your-package-contains",level:4},{value:"Install builtin connectors (optional)",id:"install-builtin-connectors-optional",level:3},{value:"Install tiered storage offloaders (optional)",id:"install-tiered-storage-offloaders-optional",level:3},{value:"Start Pulsar standalone",id:"start-pulsar-standalone",level:2},{value:"Use Pulsar standalone",id:"use-pulsar-standalone",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Stop Pulsar standalone",id:"stop-pulsar-standalone",level:2}],u={toc:c};function m(e){var a=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary ",(0,l.kt)("a",{parentName:"p",href:"http://rocksdb.org/"},"RocksDB")," and BookKeeper components running inside of a single Java Virtual Machine (JVM) process."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Pulsar in production?"),(0,l.kt)("br",{parentName:"p"}),"\n","If you're looking to run a full production Pulsar installation, see the ",(0,l.kt)("a",{parentName:"p",href:"deploy-bare-metal"},"Deploying a Pulsar instance")," guide.")),(0,l.kt)("h2",{id:"install-pulsar-standalone"},"Install Pulsar standalone"),(0,l.kt)("p",null,"This tutorial guides you through every step of installing Pulsar locally."),(0,l.kt)("h3",{id:"system-requirements"},"System requirements"),(0,l.kt)("p",null,"Currently, Pulsar is available for 64-bit ",(0,l.kt)("strong",{parentName:"p"},"macOS"),", ",(0,l.kt)("strong",{parentName:"p"},"Linux"),", and ",(0,l.kt)("strong",{parentName:"p"},"Windows"),". To use Pulsar, you need to install 64-bit JRE/JDK 8 or later versions"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"By default, Pulsar allocates 2G JVM heap memory to start. It can be changed in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh")," file under ",(0,l.kt)("inlineCode",{parentName:"p"},"PULSAR_MEM"),". This is extra options passed into JVM. "))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Broker is only supported on 64-bit JVM."))),(0,l.kt)("h4",{id:"install-jdk-on-m1"},"Install JDK on M1"),(0,l.kt)("p",null,"In the current version, Pulsar uses a BookKeeper version which in turn uses RocksDB. RocksDB is compiled to work on x86 architecture and not ARM. Therefore, Pulsar can only work with x86 JDK. This is planned to be fixed in future versions of Pulsar."),(0,l.kt)("p",null,"One of the ways to easily install an x86 JDK is to use ",(0,l.kt)("a",{parentName:"p",href:"http://sdkman.io"},"SDKMan")," as outlined in the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"http://sdkman.io"},"SDKMan"),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Method 1: follow instructions on the SDKMan website."),(0,l.kt)("li",{parentName:"ul"},"Method 2: if you have ",(0,l.kt)("a",{parentName:"li",href:"https://brew.sh"},"Homebrew")," installed, enter the following command.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nbrew install sdkman\n\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Turn on Rosetta2 compatibility for SDKMan by editing ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.sdkman/etc/config")," and changing the following property from ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"\nsdkman_rosetta2_compatible=true\n\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Close the current shell / terminal window and open a new one."),(0,l.kt)("li",{parentName:"ol"},"Make sure you don't have any previously installed JVM of the same version by listing existing installed versions.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nsdk list java|grep installed\n\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\n               | >>> | 17.0.3.6.1   | amzn    | installed  | 17.0.3.6.1-amzn\n\n")),(0,l.kt)("p",null,"If you have any Java 17 version installed, uninstall it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nsdk uinstall java 17.0.3.6.1\n\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Install any Java versions greater than Java 8.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n sdk install java 17.0.3.6.1-amzn\n\n")),(0,l.kt)("h3",{id:"install-pulsar-using-binary-release"},"Install Pulsar using binary release"),(0,l.kt)("p",null,"To get started with Pulsar, download a binary tarball release in one of the following ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download from the Apache mirror (",(0,l.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.10.0/apache-pulsar-2.10.0-bin.tar.gz",download:!0},"Pulsar 2.10.0 binary release"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/download"},"downloads page"),"  ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"use ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.10.0/apache-pulsar-2.10.0-bin.tar.gz\n\n")))),(0,l.kt)("p",null,"After you download the tarball, untar it and use the ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," command to navigate to the resulting directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-2.10.0-bin.tar.gz\n$ cd apache-pulsar-2.10.0\n\n")),(0,l.kt)("h4",{id:"what-your-package-contains"},"What your package contains"),(0,l.kt)("p",null,"The Pulsar binary package initially contains the following directories:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bin")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Pulsar's command-line tools, such as ",(0,l.kt)("a",{parentName:"td",href:"/docs/reference-cli-tools#pulsar"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar"))," and ",(0,l.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"conf")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Configuration files for Pulsar, including ",(0,l.kt)("a",{parentName:"td",href:"/docs/reference-configuration#broker"},"broker configuration")," and more.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note:")," Pulsar standalone uses RocksDB as the local metadata store and its configuration file path ",(0,l.kt)("a",{parentName:"td",href:"reference-configuration"},(0,l.kt)("inlineCode",{parentName:"a"},"metadataStoreConfigPath"))," is configurable in the ",(0,l.kt)("inlineCode",{parentName:"td"},"standalone.conf")," file. For more information about the configurations of RocksDB, see ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/facebook/rocksdb/blob/main/examples/rocksdb_option_file_example.ini"},"here")," and related ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/facebook/rocksdb/wiki/RocksDB-Tuning-Guide"},"documentation"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"examples")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A Java JAR file containing ",(0,l.kt)("a",{parentName:"td",href:"functions-overview"},"Pulsar Functions")," example.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"instances")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Artifacts created for ",(0,l.kt)("a",{parentName:"td",href:"functions-overview"},"Pulsar Functions"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"lib")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The ",(0,l.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/JAR_(file_format)"},"JAR")," files used by Pulsar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"licenses")),(0,l.kt)("td",{parentName:"tr",align:"left"},"License files, in the",(0,l.kt)("inlineCode",{parentName:"td"},".txt")," form, for various components of the Pulsar ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar"},"codebase"),".")))),(0,l.kt)("p",null,"These directories are created once you begin running Pulsar."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Directory"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The data storage directory used by RocksDB and BookKeeper.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"logs")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Logs created by the installation.")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you want to use builtin connectors and tiered storage offloaders, you can install them according to the following instructions\uff1a"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-builtin-connectors-optional"},"Install builtin connectors (optional)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#install-tiered-storage-offloaders-optional"},"Install tiered storage offloaders (optional)"),"\nOtherwise, skip this step and perform the next step ",(0,l.kt)("a",{parentName:"li",href:"#start-pulsar-standalone"},"Start Pulsar standalone"),". Pulsar can be successfully installed without installing bulitin connectors and tiered storage offloaders.")))),(0,l.kt)("h3",{id:"install-builtin-connectors-optional"},"Install builtin connectors (optional)"),(0,l.kt)("p",null,"Since ",(0,l.kt)("inlineCode",{parentName:"p"},"2.1.0-incubating")," release, Pulsar releases a separate binary distribution, containing all the ",(0,l.kt)("inlineCode",{parentName:"p"},"builtin")," connectors.\nTo enable those ",(0,l.kt)("inlineCode",{parentName:"p"},"builtin")," connectors, you can download the connectors tarball release in one of the following ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download from the Apache mirror ",(0,l.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.10.0/connectors",download:!0},"Pulsar IO Connectors 2.10.0 release"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"use ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.10.0/connectors/{connector}-2.10.0.nar\n\n")))),(0,l.kt)("p",null,"After you download the nar file, copy the file to the ",(0,l.kt)("inlineCode",{parentName:"p"},"connectors")," directory in the pulsar directory.\nFor example, if you download the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-io-aerospike-2.10.0.nar")," connector file, enter the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ mkdir connectors\n$ mv pulsar-io-aerospike-2.10.0.nar connectors\n\n$ ls connectors\npulsar-io-aerospike-2.10.0.nar\n...\n\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure ",(0,l.kt)("inlineCode",{parentName:"li"},"connectors")," tarball is unzipped in every pulsar directory of the broker (or in every pulsar directory of function-worker if you are running a separate worker cluster for Pulsar Functions)."),(0,l.kt)("li",{parentName:"ul"},"If you are ",(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,l.kt)("a",{parentName:"li",href:"deploy-kubernetes"},"K8S")," or ",(0,l.kt)("a",{parentName:"li",href:"https://dcos.io/"},"DC/OS"),", you can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled ",(0,l.kt)("a",{parentName:"li",href:"/docs/io-overview#working-with-connectors"},"all builtin connectors"),".")))),(0,l.kt)("h3",{id:"install-tiered-storage-offloaders-optional"},"Install tiered storage offloaders (optional)"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Since ",(0,l.kt)("inlineCode",{parentName:"li"},"2.2.0")," release, Pulsar releases a separate binary distribution, containing the tiered storage offloaders."),(0,l.kt)("li",{parentName:"ul"},"To enable tiered storage feature, follow the instructions below; otherwise skip this section.")))),(0,l.kt)("p",null,"To get started with ",(0,l.kt)("a",{parentName:"p",href:"concepts-tiered-storage"},"tiered storage offloaders"),", you need to download the offloaders tarball release on every broker node in one of the following ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download from the Apache mirror ",(0,l.kt)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.10.0/apache-pulsar-offloaders-2.10.0-bin.tar.gz",download:!0},"Pulsar Tiered Storage Offloaders 2.10.0 release"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"download from the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"use ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.10.0/apache-pulsar-offloaders-2.10.0-bin.tar.gz\n\n")))),(0,l.kt)("p",null,"After you download the tarball, untar the offloaders package and copy the offloaders as ",(0,l.kt)("inlineCode",{parentName:"p"},"offloaders"),"\nin the pulsar directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ tar xvfz apache-pulsar-offloaders-2.10.0-bin.tar.gz\n\n// you will find a directory named `apache-pulsar-offloaders-2.10.0` in the pulsar directory\n// then copy the offloaders\n\n$ mv apache-pulsar-offloaders-2.10.0/offloaders offloaders\n\n$ ls offloaders\ntiered-storage-jcloud-2.10.0.nar\n\n")),(0,l.kt)("p",null,"For more information on how to configure tiered storage, see ",(0,l.kt)("a",{parentName:"p",href:"cookbooks-tiered-storage"},"Tiered storage cookbook"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,l.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's pulsar directory."),(0,l.kt)("li",{parentName:"ul"},"If you are ",(0,l.kt)("a",{parentName:"li",href:"/docs/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,l.kt)("a",{parentName:"li",href:"deploy-kubernetes"},"K8S")," or DC/OS), you can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders.")))),(0,l.kt)("h2",{id:"start-pulsar-standalone"},"Start Pulsar standalone"),(0,l.kt)("p",null,"Once you have an up-to-date local copy of the release, you can start a local cluster using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference-cli-tools#pulsar"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar"))," command, which is stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," directory, and specifying that you want to start Pulsar in standalone mode."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar standalone\n\n")),(0,l.kt)("p",null,"If you have started Pulsar successfully, you will see ",(0,l.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n21:59:29.327 [DLM-/stream/storage-OrderedScheduler-3-0] INFO  org.apache.bookkeeper.stream.storage.impl.sc.StorageContainerImpl - Successfully started storage container (0).\n21:59:34.576 [main] INFO  org.apache.pulsar.broker.authentication.AuthenticationService - Authentication is disabled\n21:59:34.576 [main] INFO  org.apache.pulsar.websocket.WebSocketService - Pulsar WebSocket Service started\n\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"The service is running on your terminal, which is under your direct control. If you need to run other commands, open a new terminal window.  ")))),(0,l.kt)("p",null,"You can also run the service as a background process using the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin/pulsar-daemon start standalone")," command. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/reference-cli-tools/#pulsar-daemon"},"pulsar-daemon"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"By default, there is no encryption, authentication, or authorization configured. Apache Pulsar can be accessed from remote server without any authorization. Please do check ",(0,l.kt)("a",{parentName:"p",href:"security-overview"},"Security Overview")," document to secure your deployment.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When you start a local standalone cluster, a ",(0,l.kt)("inlineCode",{parentName:"p"},"public/default")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/concepts-messaging#namespaces"},"namespace")," is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/concepts-messaging#topics"},"Topics"),".")))),(0,l.kt)("h2",{id:"use-pulsar-standalone"},"Use Pulsar standalone"),(0,l.kt)("p",null,"Pulsar provides a CLI tool called ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference-cli-tools#pulsar-client"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-client")),". The pulsar-client tool enables you to consume and produce messages to a Pulsar topic in a running cluster. "),(0,l.kt)("h3",{id:"consume-a-message"},"Consume a message"),(0,l.kt)("p",null,"The following command consumes a message with the subscription name ",(0,l.kt)("inlineCode",{parentName:"p"},"first-subscription")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-topic")," topic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client consume my-topic -s "first-subscription"\n\n')),(0,l.kt)("p",null,"If the message has been successfully consumed, you will see a confirmation like the following in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n22:17:16.781 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 1 messages successfully consumed\n\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"As you have noticed that we do not explicitly create the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-topic")," topic, to which we consume the message. When you consume a message to a topic that does not yet exist, Pulsar creates that topic for you automatically. Producing a message to a topic that does not exist will automatically create that topic for you as well."))),(0,l.kt)("h3",{id:"produce-a-message"},"Produce a message"),(0,l.kt)("p",null,"The following command produces a message saying ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-pulsar")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-topic")," topic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce my-topic --messages "hello-pulsar"\n\n')),(0,l.kt)("p",null,"If the message has been successfully published to the topic, you will see a confirmation like the following in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n22:21:08.693 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 1 messages successfully produced\n\n")),(0,l.kt)("h2",{id:"stop-pulsar-standalone"},"Stop Pulsar standalone"),(0,l.kt)("p",null,"Press ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," to stop a local standalone Pulsar."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If the service runs as a background process using the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin/pulsar-daemon start standalone")," command, then use the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin/pulsar-daemon stop standalone"),"  command to stop the service.\nFor more information, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/reference-cli-tools/#pulsar-daemon"},"pulsar-daemon"),"."))))}m.isMDXComponent=!0}}]);