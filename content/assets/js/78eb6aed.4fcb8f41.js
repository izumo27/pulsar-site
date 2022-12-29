"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[74848],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,f=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},41350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",sidebar_label:"Aliyun OSS offloader",original_id:"tiered-storage-aliyun"},o=void 0,i={unversionedId:"tiered-storage-aliyun",id:"version-2.10.x/tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the Aliyun Object Storage Service (OSS) offloader and using it with Pulsar.",source:"@site/versioned_docs/version-2.10.x/tiered-storage-aliyun.md",sourceDirName:".",slug:"/tiered-storage-aliyun",permalink:"/docs/2.10.x/tiered-storage-aliyun",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/tiered-storage-aliyun.md",tags:[],version:"2.10.x",frontMatter:{id:"tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",sidebar_label:"Aliyun OSS offloader",original_id:"tiered-storage-aliyun"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Azure BlobStore offloader",permalink:"/docs/2.10.x/tiered-storage-azure"},next:{title:"Why transactions?",permalink:"/docs/2.10.x/txn-why"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure Aliyun OSS offloader driver",id:"configure-aliyun-oss-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Endpoint (required)",id:"endpoint-required",level:4},{value:"Example",id:"example-1",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Size of block read/write",id:"size-of-block-readwrite",level:4},{value:"Run Aliyun OSS offloader automatically",id:"run-aliyun-oss-offloader-automatically",level:3},{value:"Example",id:"example-2",level:4},{value:"Run Aliyun OSS offloader manually",id:"run-aliyun-oss-offloader-manually",level:3},{value:"Example",id:"example-3",level:4}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter guides you through every step of installing and configuring the Aliyun Object Storage Service (OSS) offloader and using it with Pulsar."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Follow the steps below to install the Aliyun OSS offloader."),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pulsar: 2.8.0 or later versions")),(0,r.kt)("h3",{id:"step"},"Step"),(0,r.kt)("p",null,"This example uses Pulsar 2.8.0."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the Pulsar tarball, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/standalone#install-pulsar-using-binary-release"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package, then copy the Pulsar offloaders as ",(0,r.kt)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/standalone#install-tiered-storage-offloaders-optional"},"here"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"As shown from the output, Pulsar uses ",(0,r.kt)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"GCS"),", ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Azure"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/oss"},"Aliyun OSS")," for long-term storage."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.8.0.nar\ntiered-storage-jcloud-2.8.0.nar\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare-metal cluster, make sure that ",(0,r.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,r.kt)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image. The ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before offloading data from BookKeeper to Aliyun OSS, you need to configure some properties of the Aliyun OSS offload driver.")),(0,r.kt)("p",null,"Besides, you can also configure the Aliyun OSS offloader to run it automatically or trigger it manually."),(0,r.kt)("h3",{id:"configure-aliyun-oss-offloader-driver"},"Configure Aliyun OSS offloader driver"),(0,r.kt)("p",null,"You can configure the Aliyun OSS offloader driver in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Required configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,r.kt)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive."),(0,r.kt)("td",{parentName:"tr",align:null},"aliyun-oss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,r.kt)("td",{parentName:"tr",align:null},"Offloader directory"),(0,r.kt)("td",{parentName:"tr",align:null},"offloaders")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadBucket")),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-topic-offload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadServiceEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://oss-cn-hongkong.aliyuncs.com"},"http://oss-cn-hongkong.aliyuncs.com")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of block read"),(0,r.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of block write"),(0,r.kt)("td",{parentName:"tr",align:null},"64 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,r.kt)("td",{parentName:"tr",align:null},"5000")))))),(0,r.kt)("h4",{id:"bucket-required"},"Bucket (required)"),(0,r.kt)("p",null,"A bucket is a basic container that holds your data. Everything you store in Aliyun OSS must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you cannot nest a bucket."),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("p",null,"This example names the bucket as ",(0,r.kt)("em",{parentName:"p"},"pulsar-topic-offload"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,r.kt)("h4",{id:"endpoint-required"},"Endpoint (required)"),(0,r.kt)("p",null,"The endpoint is the region where a bucket is located."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about Aliyun OSS regions and endpoints,  see ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/31837.htm"},"International website")," or ",(0,r.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/31837.html"},"Chinese website"),".")),(0,r.kt)("h5",{id:"example-1"},"Example"),(0,r.kt)("p",null,"This example sets the endpoint as ",(0,r.kt)("em",{parentName:"p"},"oss-us-west-1-internal"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nmanagedLedgerOffloadServiceEndpoint=http://oss-us-west-1-internal.aliyuncs.com\n\n")),(0,r.kt)("h4",{id:"authentication-required"},"Authentication (required)"),(0,r.kt)("p",null,"To be able to access Aliyun OSS, you need to authenticate with Aliyun OSS."),(0,r.kt)("p",null,"Set the environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"ALIYUN_OSS_ACCESS_KEY_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ALIYUN_OSS_ACCESS_KEY_SECRET")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh"),"."),(0,r.kt)("p",null,'"export" is important so that the variables are made available in the environment of spawned processes.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nexport ALIYUN_OSS_ACCESS_KEY_ID=ABC123456789\nexport ALIYUN_OSS_ACCESS_KEY_SECRET=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n")),(0,r.kt)("h4",{id:"size-of-block-readwrite"},"Size of block read/write"),(0,r.kt)("p",null,"You can configure the size of a request sent to or read from Aliyun OSS in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf"),". "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,r.kt)("td",{parentName:"tr",align:null},"Block size for each individual read when reading back data from Aliyun OSS."),(0,r.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,r.kt)("td",{parentName:"tr",align:null},'Maximum size of a "part" sent during a multipart upload to Aliyun OSS. It ',(0,r.kt)("strong",{parentName:"td"},"cannot")," be smaller than 5 MB."),(0,r.kt)("td",{parentName:"tr",align:null},"64 MB")))),(0,r.kt)("h3",{id:"run-aliyun-oss-offloader-automatically"},"Run Aliyun OSS offloader automatically"),(0,r.kt)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Threshold value"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"> 0"),(0,r.kt)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"< 0"),(0,r.kt)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,r.kt)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, the offloader does not work until the current segment is full."),(0,r.kt)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,r.kt)("p",null,"The offload configurations in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-policies options"))," command."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"This example sets the Aliyun OSS offloader threshold size to 10 MB using pulsar-admin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, and default values, see ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"here"),". ")),(0,r.kt)("h3",{id:"run-aliyun-oss-offloader-manually"},"Run Aliyun OSS offloader manually"),(0,r.kt)("p",null,"For individual topics, you can trigger the Aliyun OSS offloader manually using one of the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use REST endpoint.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin). "),(0,r.kt)("p",{parentName:"li"},"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to Aliyun OSS until the threshold is no longer exceeded. Older segments are moved first."))),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example triggers the Aliyun OSS offloader to run manually using pulsar-admin."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, and default values, see ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"here"),". "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example checks the Aliyun OSS offloader status using pulsar-admin."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,r.kt)("p",{parentName:"li"},"To wait for the Aliyun OSS offloader to complete the job, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"-w")," flag."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,r.kt)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, and default values, see ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"here"),". ")))))}u.isMDXComponent=!0}}]);