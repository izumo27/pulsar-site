"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8803],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||o;return t?n.createElement(m,i(i({ref:a},h),{},{components:t})):n.createElement(m,i({ref:a},h))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},18866:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(87462),r=(t(67294),t(3905));const o={id:"administration-load-balance",title:"Load balance across brokers",sidebar_label:"Load balance",original_id:"administration-load-balance"},i=void 0,s={unversionedId:"administration-load-balance",id:"version-2.10.x/administration-load-balance",title:"Load balance across brokers",description:"Pulsar is a horizontally scalable messaging system, so the traffic in a logical cluster must be balanced across all the available Pulsar brokers as evenly as possible, which is a core requirement.",source:"@site/versioned_docs/version-2.10.x/administration-load-balance.md",sourceDirName:".",slug:"/administration-load-balance",permalink:"/docs/2.10.x/administration-load-balance",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/administration-load-balance.md",tags:[],version:"2.10.x",frontMatter:{id:"administration-load-balance",title:"Load balance across brokers",sidebar_label:"Load balance",original_id:"administration-load-balance"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Pulsar statistics",permalink:"/docs/2.10.x/administration-stats"},next:{title:"Pulsar proxy",permalink:"/docs/2.10.x/administration-proxy"}},l={},d=[{value:"Dynamic assignments",id:"dynamic-assignments",level:2},{value:"Create namespaces with assigned bundles",id:"create-namespaces-with-assigned-bundles",level:2},{value:"Split namespace bundles",id:"split-namespace-bundles",level:2},{value:"Shed load automatically",id:"shed-load-automatically",level:2},{value:"ThresholdShedder",id:"thresholdshedder",level:3},{value:"OverloadShedder",id:"overloadshedder",level:3},{value:"Broker overload thresholds",id:"broker-overload-thresholds",level:4},{value:"UniformLoadShedder",id:"uniformloadshedder",level:3},{value:"Unload topics and bundles",id:"unload-topics-and-bundles",level:2},{value:"Distribute anti-affinity namespaces across failure domains",id:"distribute-anti-affinity-namespaces-across-failure-domains",level:2},{value:"Create a failure domain and register brokers",id:"create-a-failure-domain-and-register-brokers",level:3},{value:"Create an anti-affinity namespace group",id:"create-an-anti-affinity-namespace-group",level:3}],h={toc:d};function u(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar is a horizontally scalable messaging system, so the traffic in a logical cluster must be balanced across all the available Pulsar brokers as evenly as possible, which is a core requirement."),(0,r.kt)("p",null,"You can use multiple settings and tools to control the traffic distribution which requires a bit of context to understand how the traffic is managed in Pulsar. Though in most cases, the core requirement mentioned above is true out of the box and you should not worry about it. "),(0,r.kt)("p",null,"The following sections introduce how the load-balanced assignments work across Pulsar brokers and how you can leverage the framework to adjust."),(0,r.kt)("h2",{id:"dynamic-assignments"},"Dynamic assignments"),(0,r.kt)("p",null,"Topics are dynamically assigned to brokers based on the load conditions of all brokers in the cluster. The assignment of topics to brokers is not done at the topic level but at the ",(0,r.kt)("strong",{parentName:"p"},"bundle")," level (a higher level). Instead of individual topic assignments, each broker takes ownership of a subset of the topics for a namespace. This subset is called a bundle and effectively this subset is a sharding mechanism. "),(0,r.kt)("p",null,'In other words, each namespace is an "administrative" unit and sharded into a list of bundles, with each bundle comprising a portion of the overall hash range of the namespace. Topics are assigned to a particular bundle by taking the hash of the topic name and checking in which bundle the hash falls. Each bundle is independent of the others and thus is independently assigned to different brokers.'),(0,r.kt)("p",null,"The benefit of the assignment granularity is to amortize the amount of information that you need to keep track of. Based on CPU, memory, traffic load, and other indexes, topics are assigned to a particular broker dynamically. For example: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a client starts using new topics that are not assigned to any broker, a process is triggered to choose the best-suited broker to acquire ownership of these topics according to the load conditions. "),(0,r.kt)("li",{parentName:"ul"},"If the broker owning a topic becomes overloaded, the topic is reassigned to a less-loaded broker."),(0,r.kt)("li",{parentName:"ul"},"If the broker owning a topic crashes, the topic is reassigned to another active broker.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'For partitioned topics, different partitions are assigned to different brokers. Here "topic" means either a non-partitioned topic or one partition of a topic.')),(0,r.kt)("h2",{id:"create-namespaces-with-assigned-bundles"},"Create namespaces with assigned bundles"),(0,r.kt)("p",null,"When you create a new namespace, a number of bundles are assigned to the namespace. You can set this number in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\n# When a namespace is created without specifying the number of bundles, this\n# value will be used as the default\ndefaultNumberOfNamespaceBundles=4\n\n")),(0,r.kt)("p",null,"Alternatively, you can override the value when you create a new namespace using ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar admin"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin namespaces create my-tenant/my-namespace --clusters us-west --bundles 16\n\n")),(0,r.kt)("p",null,"With the above command, you create a namespace with 16 initial bundles. Therefore the topics for this namespace can immediately be spread across up to 16 brokers."),(0,r.kt)("p",null,"In general, if you know the expected traffic and number of topics in advance, you had better start with a reasonable number of bundles instead of waiting for the system to auto-correct the distribution."),(0,r.kt)("p",null,"On the same note, it is beneficial to start with more bundles than the number of brokers, due to the hashing nature of the distribution of topics into bundles. For example, for a namespace with 1000 topics, using something like 64 bundles achieves a good distribution of traffic across 16 brokers."),(0,r.kt)("h2",{id:"split-namespace-bundles"},"Split namespace bundles"),(0,r.kt)("p",null,"Since the load for the topics in a bundle might change over time and predicting the load might be hard, bundle split is designed to resolve these challenges. The broker splits a bundle into two and the new smaller bundles can be reassigned to different brokers."),(0,r.kt)("p",null,"Pulsar supports the following two bundle split algorithms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"range_equally_divide"),": split the bundle into two parts with the same hash range size."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"topic_count_equally_divide"),": split the bundle into two parts with the same number of topics.")),(0,r.kt)("p",null,"To enable bundle split, you need to configure the following settings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," file, and set ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultNamespaceBundleSplitAlgorithm")," based on your needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\nloadBalancerAutoBundleSplitEnabled=true\nloadBalancerAutoUnloadSplitBundlesEnabled=true\ndefaultNamespaceBundleSplitAlgorithm=range_equally_divide\n\n")),(0,r.kt)("p",null,"You can configure more parameters for splitting thresholds. Any existing bundle that exceeds any of the thresholds is a candidate to be split. By default, the newly split bundles are immediately reassigned to other brokers, to facilitate the traffic distribution. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\n# maximum topics in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxTopics=1000\n\n# maximum sessions (producers + consumers) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxSessions=1000\n\n# maximum msgRate (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxMsgRate=30000\n\n# maximum bandwidth (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxBandwidthMbytes=100\n\n# maximum number of bundles in a namespace (for auto-split)\nloadBalancerNamespaceMaximumBundles=128\n\n")),(0,r.kt)("h2",{id:"shed-load-automatically"},"Shed load automatically"),(0,r.kt)("p",null,"The support for automatic load shedding is available in the load manager of Pulsar. This means that whenever the system recognizes a particular broker is overloaded, the system forces some traffic to be reassigned to less-loaded brokers."),(0,r.kt)("p",null,'When a broker is identified as overloaded, the broker forces to "unload" a subset of the bundles, the ones with higher traffic, that make up for the overload percentage.'),(0,r.kt)("p",null,"For example, the default threshold is 85% and if a broker is over quota at 95% CPU usage, then the broker unloads the percent difference plus a 5% margin: ",(0,r.kt)("inlineCode",{parentName:"p"},"(95% - 85%) + 5% = 15%"),". Given the selection of bundles to unload is based on traffic (as a proxy measure for CPU, network, and memory), the broker unloads bundles for at least 15% of traffic."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The automatic load shedding is enabled by default. To disable it, you can set ",(0,r.kt)("inlineCode",{parentName:"li"},"loadBalancerSheddingEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},"Besides the automatic load shedding, you can ",(0,r.kt)("a",{parentName:"li",href:"#unload-topics-and-bundles"},"manually unload bundles"),"."))),(0,r.kt)("p",null,"Additional settings that apply to shedding:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\n# Load shedding interval. Broker periodically checks whether some traffic should be offload from\n# some over-loaded broker to other under-loaded brokers\nloadBalancerSheddingIntervalMinutes=1\n\n# Prevent the same topics to be shed and moved to other brokers more than once within this timeframe\nloadBalancerSheddingGracePeriodMinutes=30\n\n")),(0,r.kt)("p",null,"Pulsar supports the following types of automatic load shedding strategies. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#thresholdshedder"},"ThresholdShedder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overloadshedder"},"OverloadShedder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#uniformloadshedder"},"UniformLoadShedder"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"From Pulsar 2.10, the ",(0,r.kt)("strong",{parentName:"li"},"default")," shedding strategy is ",(0,r.kt)("inlineCode",{parentName:"li"},"ThresholdShedder"),"."),(0,r.kt)("li",{parentName:"ul"},"You need to restart brokers if the shedding strategy is ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.10.x/admin-api-brokers/#dynamic-broker-configuration"},"dynamically updated"),". "))),(0,r.kt)("h3",{id:"thresholdshedder"},"ThresholdShedder"),(0,r.kt)("p",null,"This strategy tends to shed the bundles if any broker's usage is above the configured threshold. It does this by first computing the average resource usage per broker for the whole cluster. The resource usage for each broker is calculated using the following method ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalBrokerData#getMaxResourceUsageWithWeight"),". Historical observations are included in the running average based on the broker's setting for ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerHistoryResourcePercentage"),". Once the average resource usage is calculated, a broker's current/historical usage is compared to the average broker usage. If a broker's usage is greater than the average usage per broker plus the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerBrokerThresholdShedderPercentage"),", this load shedder proposes removing enough bundles to bring the unloaded broker 5% below the current average broker usage. Note that recently unloaded bundles are not unloaded again. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shedding strategy - ThresholdShedder",src:t(93754).Z,width:"1776",height:"683"})),(0,r.kt)("p",null,"For example, assume you have three brokers, the average broker usage of broker1 is 40%, the average broker usage of broker2 and broker3 is 10%, then the cluster average usage is 20% ((40% + 10% + 10%) / 3). If you set ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerBrokerThresholdShedderPercentage")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),", then only broker1's certain bundles get unloaded, because the average usage of broker1 is greater than the sum of the cluster average usage (20%) plus ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerBrokerThresholdShedderPercentage"),"(10%)."),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThresholdShedder")," strategy, configure brokers with this value.\n",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.ThresholdShedder")),(0,r.kt)("p",null,"You can configure the weights for each resource per broker in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\n# The BandWithIn usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerBandwithInResourceWeight=1.0\n\n# The BandWithOut usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerBandwithOutResourceWeight=1.0\n\n# The CPU usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerCPUResourceWeight=1.0\n\n# The heap memory usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerMemoryResourceWeight=1.0\n\n# The direct memory usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerDirectMemoryResourceWeight=1.0\n\n")),(0,r.kt)("h3",{id:"overloadshedder"},"OverloadShedder"),(0,r.kt)("p",null,"This strategy attempts to shed exactly one bundle on brokers which are overloaded, that is, whose maximum system resource usage exceeds ",(0,r.kt)("a",{parentName:"p",href:"#broker-overload-thresholds"},(0,r.kt)("inlineCode",{parentName:"a"},"loadBalancerBrokerOverloadedThresholdPercentage")),". To see which resources are considered when determining the maximum system resource. A bundle is recommended for unloading off that broker if and only if the following conditions hold: The broker has at least two bundles assigned and the broker has at least one bundle that has not been unloaded recently according to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancerSheddingGracePeriodMinutes"),'. The unloaded bundle will be the most expensive bundle in terms of message rate that has not been recently unloaded. Note that this strategy does not take into account "underloaded" brokers when determining which bundles to unload. If you are looking for a strategy that spreads load evenly across all brokers, see ',(0,r.kt)("a",{parentName:"p",href:"#thresholdshedder"},"ThresholdShedder"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shedding strategy - OverloadShedder",src:t(68155).Z,width:"1790",height:"625"})),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"OverloadShedder")," strategy, configure brokers with this value.\n",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.OverloadShedder")),(0,r.kt)("h4",{id:"broker-overload-thresholds"},"Broker overload thresholds"),(0,r.kt)("p",null,"The determination of when a broker is overloaded is based on the threshold of CPU, network, and memory usage. Whenever either of those metrics reaches the threshold, the system triggers the shedding (if enabled)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The overload threshold ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerBrokerOverloadedThresholdPercentage")," only applies to the ",(0,r.kt)("a",{parentName:"p",href:"#overloadshedder"},(0,r.kt)("inlineCode",{parentName:"a"},"OverloadShedder"))," shedding strategy. By default, it is set to 85%.")),(0,r.kt)("p",null,"Pulsar gathers the CPU, network, and memory usage stats from the system metrics. In some cases of network utilization, the network interface speed that Linux reports is not correct and needs to be manually overridden. This is the case in AWS EC2 instances with 1Gbps NIC speed for which the OS reports 10Gbps speed."),(0,r.kt)("p",null,"Because of the incorrect max speed, the load manager might think the broker has not reached the NIC capacity, while in fact the broker already uses all the bandwidth and the traffic is slowed down."),(0,r.kt)("p",null,"You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerOverrideBrokerNicSpeedGbps")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file to correct the max NIC speed. When the value is empty, Pulsar uses the value that the OS reports."),(0,r.kt)("h3",{id:"uniformloadshedder"},"UniformLoadShedder"),(0,r.kt)("p",null,"This strategy tends to distribute load uniformly across all brokers. This strategy checks the load difference between the broker with the highest load and the broker with the lowest load. If the difference is higher than configured thresholds ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerMsgRateDifferenceShedderThreshold")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerMsgThroughputMultiplierDifferenceShedderThreshold")," then it finds out bundles that can be unloaded to distribute traffic evenly across all brokers. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shedding strategy - UniformLoadShedder",src:t(92719).Z,width:"1786",height:"635"})),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"UniformLoadShedder")," strategy, configure brokers with this value.\n",(0,r.kt)("inlineCode",{parentName:"p"},"loadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.UniformLoadShedder")),(0,r.kt)("h2",{id:"unload-topics-and-bundles"},"Unload topics and bundles"),(0,r.kt)("p",null,'You can "unload" a topic in Pulsar manual admin operations. Unloading means closing topics, releasing ownership, and reassigning topics to a new broker, based on the current load.'),(0,r.kt)("p",null,"When unloading happens, the client experiences a small latency blip, typically in the order of tens of milliseconds, while the topic is reassigned."),(0,r.kt)("p",null,"Unloading is the mechanism that the load manager uses to perform the load shedding, but you can also trigger the unloading manually, for example, to correct the assignments and redistribute traffic even before having any broker overloaded."),(0,r.kt)("p",null,"Unloading a topic has no effect on the assignment, but just closes and reopens the particular topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin topics unload persistent://tenant/namespace/topic\n\n")),(0,r.kt)("p",null,"To unload all topics for a namespace and trigger reassignments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin namespaces unload tenant/namespace\n\n")),(0,r.kt)("h2",{id:"distribute-anti-affinity-namespaces-across-failure-domains"},"Distribute anti-affinity namespaces across failure domains"),(0,r.kt)("p",null,"When your application has multiple namespaces and you want one of them available all the time to avoid any downtime, you can group these namespaces and distribute them across different ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-terminology#failure-domain"},"failure domains")," and different brokers. Thus, if one of the failure domains is down (due to release rollout or brokers restart), it only disrupts namespaces owned by that specific failure domain and the rest of the namespaces owned by other domains remain available without any impact."),(0,r.kt)("p",null,"Such a group of namespaces has anti-affinity to each other, that is, all the namespaces in this group are ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-terminology#anti-affinity-namespaces"},"anti-affinity namespaces")," and are distributed to different failure domains in a load-balanced manner. "),(0,r.kt)("p",null,"As illustrated in the following figure, Pulsar has 2 failure domains (Domain1 and Domain2) and each domain has 2 brokers in it. You can create an anti-affinity namespace group that has 4 namespaces in it, and all the 4 namespaces have anti-affinity to each other. The load manager tries to distribute namespaces evenly across all the brokers in the same domain. Since each domain has 2 brokers, every broker owns one namespace from this anti-affinity namespace group, and you can see each domain owns 2 namespaces, and each broker owns 1 namespace."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Distribute anti-affinity namespaces across failure domains",src:t(20509).Z,width:"1546",height:"741"})),(0,r.kt)("p",null,"The load manager follows an even distribution policy across failure domains to assign anti-affinity namespaces. The following table outlines the even-distributed assignment sequence illustrated in the above figure."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Assignment sequence"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Namespace"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Failure domain candidates"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Broker candidates"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Selected broker"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain1, Domain2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker1, Broker2, Broker3, Broker4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain1:Broker1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker3, Broker4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain2:Broker3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain1, Domain2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker2, Broker4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain1:Broker2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain2:Broker4")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each namespace belongs to only one anti-affinity group. If a namespace with an existing anti-affinity assignment is assigned to another anti-affinity group, the original assignment is dropped.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there are more anti-affinity namespaces than failure domains, the load manager distributes namespaces evenly across all the domains, and also every domain distributes namespaces evenly across all the brokers under that domain.")))),(0,r.kt)("h3",{id:"create-a-failure-domain-and-register-brokers"},"Create a failure domain and register brokers"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"One broker can only be registered to a single failure domain.")),(0,r.kt)("p",null,"To create a domain under a specific cluster and register brokers, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin clusters create-failure-domain <cluster-name> --domain-name <domain-name> --broker-list <broker-list-comma-separated>\n\n")),(0,r.kt)("p",null,"You can also view, update, and delete domains under a specific cluster. For more information, refer to ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar admin doc"),"."),(0,r.kt)("h3",{id:"create-an-anti-affinity-namespace-group"},"Create an anti-affinity namespace group"),(0,r.kt)("p",null,"An anti-affinity group is created automatically when the first namespace is assigned to the group. To assign a namespace to an anti-affinity group, run the following command. It sets an anti-affinity group name for a namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin namespaces set-anti-affinity-group <namespace> --group <group-name>\n \n")),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-affinity-group")," related commands, refer to ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar admin doc"),"."))}u.isMDXComponent=!0},20509:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/anti-affinity-namespaces-across-failure-domains-49c34611c66243659ac8382597e04281.svg"},68155:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/shedding-strategy-overloadshedder-82646099fbc5728e78d7d4d3eb151e18.svg"},93754:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/shedding-strategy-thresholdshedder-69bc0835a1752056e0cc058d6c7c72f1.svg"},92719:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/shedding-strategy-uniformLoadshedder-a521b90620882e7ce650d4ee6d0561bc.svg"}}]);