"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"Announcing Apache Pulsar 3.0: The First Long-Term Support Release",date:new Date("2023-05-02T00:00:00.000Z"),author:"Apache Pulsar Community"},o=void 0,s={permalink:"/blog/2023/05/02/announcing-apache-pulsar-3-0",editUrl:"https://github.com/apache/pulsar-site/edit/main/blog/2023-05-02-announcing-apache-pulsar-3-0.md",source:"@site/blog/2023-05-02-announcing-apache-pulsar-3-0.md",title:"Announcing Apache Pulsar 3.0: The First Long-Term Support Release",description:"The Apache Pulsar community today announces the release of Apache Pulsar 3.0, the first Long-Term Support (LTS) version! This is a remarkable community effort, with over 140 contributors submitting about 1500 commits for feature enhancements and bug fixes. We would like to thank all of them for their contributions!",date:"2023-05-02T00:00:00.000Z",formattedDate:"May 2, 2023",tags:[],readingTime:9.18,hasTruncateMarker:!0,authors:[{name:"Apache Pulsar Community"}],frontMatter:{title:"Announcing Apache Pulsar 3.0: The First Long-Term Support Release",date:"2023-05-02T00:00:00.000Z",author:"Apache Pulsar Community"},nextItem:{title:"What\u2019s New in Apache Pulsar 2.10.4",permalink:"/blog/2023/04/19/Apache-Pulsar-2-10-4"}},l={authorsImageUrls:[void 0]},u=[{value:"Introducing Long-Term Support releases",id:"introducing-long-term-support-releases",level:2},{value:"What\u2019s new in Apache Pulsar 3.0?",id:"whats-new-in-apache-pulsar-30",level:2},{value:"New Pulsar broker load balancer",id:"new-pulsar-broker-load-balancer",level:3},{value:"Large-scale delayed message support",id:"large-scale-delayed-message-support",level:3},{value:"Build multi-arch docker images",id:"build-multi-arch-docker-images",level:3},{value:"BookKeeper direct IO logic optimization",id:"bookkeeper-direct-io-logic-optimization",level:3},{value:"Transaction Buffer segmented snapshot optimization",id:"transaction-buffer-segmented-snapshot-optimization",level:3},{value:"Blue-green cluster deployment support",id:"blue-green-cluster-deployment-support",level:3},{value:"Compatibility between releases",id:"compatibility-between-releases",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Looking forward",id:"looking-forward",level:2},{value:"Getting involved",id:"getting-involved",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The Apache Pulsar community today announces the release of Apache Pulsar 3.0, the first Long-Term Support (LTS) version!")," This is a remarkable community effort, with over 140 contributors submitting about 1500 commits for feature enhancements and bug fixes. We would like to thank all of them for their contributions!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(12524).Z,width:"1200",height:"630"})),(0,n.kt)("h2",{id:"introducing-long-term-support-releases"},"Introducing Long-Term Support releases"),(0,n.kt)("p",null,"Starting from Pulsar 3.0, the Pulsar community plans to release LTS versions to meet the needs of different users for stability and new features, as well as to reduce the burden of maintaining historical releases."),(0,n.kt)("p",null,"The previous release process has short maintenance cycles of approximately 3 to 4 months, while many users are still using old versions. To keep up with new updates and features, they may be forced to perform upgrades within a short timeframe, for which they are not prepared in terms of available time and required efforts."),(0,n.kt)("p",null,"Therefore, the Pulsar community introduces LTS versions with feature releases between them. The project follows a variant of Semantic Versioning, replacing ",(0,n.kt)("inlineCode",{parentName:"p"},"major.minor.patch")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"LTS.feature.patch"),". For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2.11.0 is a feature release;"),(0,n.kt)("li",{parentName:"ul"},"3.0.0 is the first LTS release;"),(0,n.kt)("li",{parentName:"ul"},"3.0.1 is a patch release of the LTS release;"),(0,n.kt)("li",{parentName:"ul"},"3.1.0 is a feature release;"),(0,n.kt)("li",{parentName:"ul"},"3.2.0 is a feature release;"),(0,n.kt)("li",{parentName:"ul"},"3.2.1 is a patch release;"),(0,n.kt)("li",{parentName:"ul"},"4.0.0 is an LTS release.")),(0,n.kt)("p",null,"This pattern provides version support for users seeking stability and those seeking new features. Users who want a more stable release can use versions 3.0.x, while those seeking new features can use versions 3.x. This new release model is a major step for the Pulsar community because it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows users to choose between different releases based on their needs for stability or new features;"),(0,n.kt)("li",{parentName:"ul"},"Clarifies the release cycle for both maintainers and users;"),(0,n.kt)("li",{parentName:"ul"},"Frees maintainers from spending too much time maintaining a long list of old releases.")),(0,n.kt)("p",null,"With the new release model, the Pulsar community looks to release LTS versions every 18 months, with bug fixes continuing for 24 months and security vulnerability patches supported for 36 months. See the image below for details."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(74504).Z,width:"945",height:"440"})),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/15966"},"PIP-175")," and the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///contribute/release-policy/"},"Release policy"),"."),(0,n.kt)("h2",{id:"whats-new-in-apache-pulsar-30"},"What\u2019s new in Apache Pulsar 3.0?"),(0,n.kt)("p",null,"Apache Pulsar 3.0 is an LTS release with a number of important features, enhancements, and fixes. Here are some of the highlighted ones."),(0,n.kt)("h3",{id:"new-pulsar-broker-load-balancer"},"New Pulsar broker load balancer"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/16691"},"PIP-192")," introduces a new load manager implementation, aiming to balance cluster utilization as evenly as possible while minimizing latency and reducing reliance on ZooKeeper."),(0,n.kt)("p",null,"Issues with the previous load manager include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Load data for all brokers and bundles is replicated to all brokers via ZK watchers. This N-replication poses scalability issues when Pulsar clusters grow to thousands of brokers and millions of topics."),(0,n.kt)("li",{parentName:"ul"},"Lookup requires redirection to the leader broker.")),(0,n.kt)("p",null,"In Pulsar 3.0, the broker and bundle load data have been re-evaluated. The new load manager stores this load data in non-persistent topics, while topic ownership information is saved in system topics and maintained with a state machine for eventual consistency. Clients can now connect to any broker for lookup without redirection."),(0,n.kt)("h3",{id:"large-scale-delayed-message-support"},"Large-scale delayed message support"),(0,n.kt)("p",null,"Scheduled and delayed message delivery is a common feature in messaging systems. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/16763"},"PIP-195")," aims to address limitations in this feature, which has been supported since version 2.4.0. The issues with the current implementation include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Memory constraints: The delayed message index is typically maintained in memory, leading to high memory overhead when there are many delayed messages. Although it is possible to utilize multiple brokers\u2019 memory by creating multiple partitions for a topic and distributing them across multiple brokers, the overall memory consumption remains unchanged."),(0,n.kt)("li",{parentName:"ul"},"Expensive index rebuilding: In the case of a large number of delayed messages (e.g. hundreds of millions), when migrating a topic to a different broker or recovering from broker downtime, rebuilding the index requires replaying logs. This process consumes significant resources and affects both the client and catch-up reads.")),(0,n.kt)("p",null,"The objectives of the new delayed message mechanism introduced in Pulsar 3.0 are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supporting delayed message index snapshots to minimize the costs of rebuilding the index;"),(0,n.kt)("li",{parentName:"ul"},"Reducing memory usage for maintaining the delayed message index.")),(0,n.kt)("h3",{id:"build-multi-arch-docker-images"},"Build multi-arch docker images"),(0,n.kt)("p",null,"With 3.0, Pulsar will start publishing Docker images with versions both for Intel x86-64 and Arm64 architectures.\xa0"),(0,n.kt)("p",null,"Users trying to use Pulsar standalone, or running TestContainer tests on a Mac M1/M2 laptop will now see much improved performance and avoid all the issues with the Docker container engine when it emulates x86-64 CPU withing an Arm64 host."),(0,n.kt)("p",null,"At the same time, this image will make it possible to run Pulsar in a Docker/Kubernetes production environment on Arm64 machines."),(0,n.kt)("p",null,"From a user perspective, no change is required: when pulling the image, Docker will select the appropriate version based on the host architecture."),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/19432"},"PR-19432"),"."),(0,n.kt)("h3",{id:"bookkeeper-direct-io-logic-optimization"},"BookKeeper direct IO logic optimization"),(0,n.kt)("p",null,"The current ledger read/write logic in BookKeeper involves multiple buffering and caching layers, which cause limitations in read and write throughput due to memory consumption, inefficient cache utilization, and eviction problems."),(0,n.kt)("p",null,"More specifically, when writing an entry, data is buffered in both the memory table and the OS PageCache (after the memory table is full). When reading an entry, data may be fetched from the memory table, read cache, or read from the entry log file based on cache hits, potentially causing memory waste and reduced cache hit rate. Since the OS PageCache is shared by all read and write files, and the OS will prefetch a fixed amount of data when reading files, it is easy to cause OS PageCache pollution and affect the read and write performance."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/bookkeeper/issues/2943#issuecomment-1086446251"},"BP-47")," introduces optional support to bypass the OS PageCache using the O_DIRECT flag for ",(0,n.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/open.2.html"},"open(2)")," and ",(0,n.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/fallocate.2.html"},"fallocate(2)")," syscalls on supported systems (Linux and macOS). The new implementation uses JNI for direct I/O and incorporates write buffer pools and read buffer management. It helps reduce memory consumption and achieve better control over cache utilization. It modifies the existing ledger read/write logic while maintaining the original organization of the entry log file."),(0,n.kt)("h3",{id:"transaction-buffer-segmented-snapshot-optimization"},"Transaction Buffer segmented snapshot optimization"),(0,n.kt)("p",null,"The current Transaction Buffer in Pulsar involves handling messages sent with transactions and taking periodic snapshots to avoid replaying all messages from the original topic. However, when a topic has long-term data retention and many aborted transactions, a snapshot may become a bottleneck, causing increased costs as the snapshot size grows."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/16913"},"PIP-196")," introduces a segmented transaction buffer snapshot, which allows splitting the snapshot into multiple parts, each with a fixed number of aborted transactions and a maxReadPosition identity. This approach aims to support a large number of aborted transactions, improve transaction buffer recovery speed, and address the write amplification issue in system topic snapshots."),(0,n.kt)("p",null,"In Pulsar 3.0, the new design incorporates multiple snapshot segments through a secondary index, with index and snapshot segments stored in different compact topics. The snapshot segment is an immutable segment that can be configured in size. A new system topic is used to store snapshot segments, while a separate index topic stores the snapshot segment indexes, allowing for more efficient recovery and reduced memory overhead."),(0,n.kt)("p",null,"The proposal modifies the existing transaction buffer logic while maintaining the original organization of the transaction buffer, with the goal of improving overall performance and resource utilization."),(0,n.kt)("h3",{id:"blue-green-cluster-deployment-support"},"Blue-green cluster deployment support"),(0,n.kt)("p",null,"Blue-green deployment is a widely-used solution for migrating live traffic from one cluster to another. In this model, traffic is gradually transferred from the blue cluster to the green cluster, allowing for smooth upgrades and the possibility of rollbacks if necessary."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/16551"},"PIP-188")," implements blue-green deployment in Pulsar by introducing changes to the broker, client, and managedLedger. The broker will support an admin API that allows marking a cluster for migration and specifying redirection URLs. The migration state and redirection URLs are persisted in the cluster metadata. The broker asynchronously marks each topic owned by that broker as migrated and notifies all the producers and consumers (which have drained the backlog for their subscriptions) with a new client-protocol command called \u201cMigrated-Topic\u201d, which has redirection URLs to the green cluster. Producers and consumers for those topics cache the redirection URLs and retry to connect to the broker with that URL which redirects them to the green cluster."),(0,n.kt)("p",null,"With such capability introduced in Pulsar 3.0, users can achieve seamless traffic migration between clusters without causing downtime for topics."),(0,n.kt)("p",null,"For more information about the Pulsar 3.0 release, see the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///release-notes/versioned/pulsar-3.0.0/"},"release notes"),"."),(0,n.kt)("h2",{id:"compatibility-between-releases"},"Compatibility between releases"),(0,n.kt)("p",null,"When upgrading an existing Pulsar version, it is important to upgrade components linearly."),(0,n.kt)("p",null,"Before Pulsar 3.0, upgrades should be performed linearly through each feature version. For example, when upgrading from 2.8 to 2.10, it is important to upgrade to 2.9 before going to 2.10."),(0,n.kt)("p",null,"Starting from 3.0, users can perform live upgrades or downgrades between two consecutive LTS versions. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2705 3.0 -> 4.0 -> 3.0;"),(0,n.kt)("li",{parentName:"ul"},"\u2705 3.2 -> 4.0 -> 3.2;"),(0,n.kt)("li",{parentName:"ul"},"\u2705 3.2 -> 4.4 -> 3.2;"),(0,n.kt)("li",{parentName:"ul"},"\u274c 3.2 -> 5.0.")),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"Pulsar 3.0.0 is now available for download on GitHub. To get started with Pulsar, you can run a Pulsar cluster ",(0,n.kt)("a",{parentName:"p",href:"pathname:///docs/3.0.x/getting-started-home/"},"on your local machine, Docker, or Kubernetes"),"."),(0,n.kt)("h2",{id:"looking-forward"},"Looking forward"),(0,n.kt)("p",null,"With Pulsar 3.0 LTS model, it will be easier for users to choose to stay on LTS stable releases or newer releases with the latest feature and improvements, all with the guarantee of longer support and a path to a live upgrade to the next LTS version."),(0,n.kt)("p",null,"At the same time, several features introduced in 3.0 sets the stage for further improvements. One such example is the new load balancer (PIP-192): while immediately useful and a marked improvement as it is, it also paves the way for many more optimizations in how topics are transferred from one broker to another, with the goal of minimizing the latency impact of such operations."),(0,n.kt)("p",null,"Another exciting area of development is the proposal to rehaul the metric collection and aggregation system described in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/20197"},"PIP-264"),"."),(0,n.kt)("p",null,"Finally, Pulsar 3.0 is benefitting from the performance improvements introduced in Apache BookKeeper 4.16. We see a lot of potential to further improve BookKeeper performance for an even faster Pulsar!"),(0,n.kt)("h2",{id:"getting-involved"},"Getting involved"),(0,n.kt)("p",null,"Apache Pulsar is one of the fastest-growing open-source projects, recognized by the ",(0,n.kt)("a",{parentName:"p",href:"https://thestack.technology/top-apache-projects-in-2021-from-superset-to-nuttx/"},"Apache Software Foundation")," as a Top 5 Project based on engagement. The vitality of Pulsar relies on continued community growth, which would not be possible without each and every contributor to the project. The Pulsar community welcomes contributions from anyone with a passion for open source, messaging and streaming, as well as distributed systems! Looking for more ways to stay connected with the Pulsar community? Check out the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pulsar Virtual Summit Europe 2023 will take place on Tuesday, May 23rd, 2023! ",(0,n.kt)("a",{parentName:"li",href:"https://events.zoom.us/ev/Ap6rsDg9LeVfmdajJ_eB13HH026J1d_o8OoTKkQnl_jzVl-srhwB~AggLXsr32QYFjq8BlYLZ5I06Dg"},"Register now for free")," and follow @PulsarSummit on Twitter for updates and details of this much-anticipated one-day event."),(0,n.kt)("li",{parentName:"ul"},"Read the ",(0,n.kt)("a",{parentName:"li",href:"pathname:///contribute/"},"Apache Pulsar Contribution Guide")," to start your first contribution."),(0,n.kt)("li",{parentName:"ul"},"Visit the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar"},"Pulsar GitHub repository"),", follow the project on Twitter ",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),", and join the ",(0,n.kt)("a",{parentName:"li",href:"https://apache-pulsar.slack.com/"},"Pulsar community on Slack"),".")))}h.isMDXComponent=!0},12524:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/annoucing-pulsar-3-0-49cfa343860a724ce7cd41a79b36e6db.jpeg"},74504:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/pulsar-new-release-model-e50bbfe6a0ce07a6f8089bacfdd4a761.png"}}]);