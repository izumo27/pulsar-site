"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77519:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={id:"tiered-storage-s3",title:"Use S3 offloader with Pulsar",sidebar_label:"S3 offloader"},l=void 0,i={unversionedId:"tiered-storage-s3",id:"version-3.0.x/tiered-storage-s3",title:"Use S3 offloader with Pulsar",description:'S3 offloader is introduced to serve S3-compatible storage, which means that the storage employs the S3 API as its "language" and applications that speak the S3 API are able to plug and play with S3-compatible storage.',source:"@site/versioned_docs/version-3.0.x/tiered-storage-s3.md",sourceDirName:".",slug:"/tiered-storage-s3",permalink:"/docs/3.0.x/tiered-storage-s3",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/tiered-storage-s3.md",tags:[],version:"3.0.x",frontMatter:{id:"tiered-storage-s3",title:"Use S3 offloader with Pulsar",sidebar_label:"S3 offloader"},sidebar:"docsSidebar",previous:{title:"Aliyun OSS offloader",permalink:"/docs/3.0.x/tiered-storage-aliyun"},next:{title:"Why transactions?",permalink:"/docs/3.0.x/txn-why"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Steps",id:"steps",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure S3 offloader driver",id:"configure-s3-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Endpoint (required)",id:"endpoint-required",level:4},{value:"Example",id:"example-1",level:5},{value:"Authentication (optional)",id:"authentication-optional",level:4},{value:"Run S3 offloader automatically",id:"run-s3-offloader-automatically",level:3},{value:"Example",id:"example-2",level:4},{value:"Run S3 offloader manually",id:"run-s3-offloader-manually",level:3},{value:"Example",id:"example-3",level:4}],s={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'S3 offloader is introduced to serve S3-compatible storage, which means that the storage employs the S3 API as its "language" and applications that speak the S3 API are able to plug and play with S3-compatible storage.'),(0,r.kt)("p",null,"This chapter guides you through every step of installing and configuring the S3 offloader and using it with Pulsar."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Follow the steps below to install the S3 offloader."),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pulsar: 2.9.3 or later versions")),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/getting-started-standalone#download-pulsar-distribution"},"Download the Pulsar tarball"),"."),(0,r.kt)("li",{parentName:"ol"},"Download and untar the Pulsar offloaders package, then copy the Pulsar offloaders as ",(0,r.kt)("inlineCode",{parentName:"li"},"offloaders")," in the Pulsar directory. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.0.x/tiered-storage-overview#how-to-install-tiered-storage-offloaders"},"Install tiered storage offloaders"),".")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before offloading data from BookKeeper to S3-compatible storage, you need to configure some properties of the S3 offload driver. Besides, you can also configure the S3 offloader to run it automatically or trigger it manually.")),(0,r.kt)("h3",{id:"configure-s3-offloader-driver"},"Configure S3 offloader driver"),(0,r.kt)("p",null,"You can configure the S3 offloader driver in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Required configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,r.kt)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive."),(0,r.kt)("td",{parentName:"tr",align:null},"S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"Offloader directory"),(0,r.kt)("td",{parentName:"tr",align:null},"offloaders")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadBucket")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#bucket-required"},"Bucket")),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-topic-offload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadServiceEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#endpoint-required"},"Endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:9000"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Block size for each individual read when reading back data from S3-compatible storage."),(0,r.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum block size sent during a multi-part upload to S3-compatible storage. It ",(0,r.kt)("strong",{parentName:"td"},"cannot")," be smaller than 5 MB."),(0,r.kt)("td",{parentName:"tr",align:null},"64 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": It's ",(0,r.kt)("strong",{parentName:"td"},"not")," recommended to change the default value in a production environment."),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": It's ",(0,r.kt)("strong",{parentName:"td"},"not")," recommended to change the default value in a production environment."),(0,r.kt)("td",{parentName:"tr",align:null},"50000")))))),(0,r.kt)("h4",{id:"bucket-required"},"Bucket (required)"),(0,r.kt)("p",null,"A bucket is a basic container that holds your data. Everything you store in S3-compatible storage must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you cannot nest a bucket."),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("p",null,"This example names the bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-topic-offload"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"managedLedgerOffloadBucket=pulsar-topic-offload\n")),(0,r.kt)("h4",{id:"endpoint-required"},"Endpoint (required)"),(0,r.kt)("p",null,"The endpoint is the region where a bucket is located."),(0,r.kt)("h5",{id:"example-1"},"Example"),(0,r.kt)("p",null,"This example sets the endpoint as ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"managedLedgerOffloadServiceEndpoint=http://localhost:9000\n")),(0,r.kt)("h4",{id:"authentication-optional"},"Authentication (optional)"),(0,r.kt)("p",null,"To be able to access S3-compatible storage, you need to authenticate with S3-compatible storage."),(0,r.kt)("p",null,"Set the environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCESS_KEY_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCESS_KEY_SECRET")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ACCESS_KEY_ID=ABC123456789\nexport ACCESS_KEY_SECRET=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Exporting these environment variables makes them available in the environment of spawned processes.")),(0,r.kt)("h3",{id:"run-s3-offloader-automatically"},"Run S3 offloader automatically"),(0,r.kt)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored in a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Threshold value"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">"," 0"),(0,r.kt)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<"," 0"),(0,r.kt)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,r.kt)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold for a namespace, but few messages are being produced to the topic, the offloader does not work until the current segment is full."),(0,r.kt)("p",null,"You can configure the threshold size using CLI tools, such as ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),"."),(0,r.kt)("p",null,"The offload configurations in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace-level offload policies. Each namespace can have its offload policy. If you want to set an offload policy for a specific namespace, use the command ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/namespaces?id=set-offload-policies"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-offload-policies options"))," command."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"This example sets the S3 offloader threshold size to 10 MB using ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, and default values, see ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},"Pulsar admin docs"),".")),(0,r.kt)("h3",{id:"run-s3-offloader-manually"},"Run S3 offloader manually"),(0,r.kt)("p",null,"For individual topics, you can trigger the S3 offloader manually using one of the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use REST endpoint.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use CLI tools, such as ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),"."),(0,r.kt)("p",{parentName:"li"},"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained in a Pulsar cluster for a topic. If the size of the topic data in the Pulsar cluster exceeds this threshold, segments from the topic are moved to S3-compatible storage until the threshold is no longer exceeded. Older segments are moved first."))),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example triggers the S3 offloader to run manually using ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Offload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, and default values, see ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},"Pulsar admin docs"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example checks the S3 offloader status using ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Offload is currently running\n")),(0,r.kt)("p",{parentName:"li"},"To wait for the S3 offloader to complete the job, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"-w")," flag."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Offload was a success\n")),(0,r.kt)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Error in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, and default values, see ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.0.x/pulsar-admin/"},"Pulsar admin docs"),".")))))}u.isMDXComponent=!0}}]);