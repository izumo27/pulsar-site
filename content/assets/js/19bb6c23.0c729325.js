"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[33269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={id:"concepts-replication",title:"Geo Replication",sidebar_label:"Geo Replication"},o=void 0,s={unversionedId:"concepts-replication",id:"concepts-replication",title:"Geo Replication",description:"Regardless of industries, when an unforeseen event occurs and brings day-to-day operations to a halt, an organization needs a well-prepared disaster recovery plan to quickly restore service to clients. However, a disaster recovery plan usually requires a multi-datacenter deployment with geographically dispersed data centers. Such a multi-datacenter deployment requires a geo-replication mechanism to provide additional redundancy in case a data center fails.",source:"@site/docs/concepts-replication.md",sourceDirName:".",slug:"/concepts-replication",permalink:"/docs/next/concepts-replication",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/concepts-replication.md",tags:[],version:"current",frontMatter:{id:"concepts-replication",title:"Geo Replication",sidebar_label:"Geo Replication"},sidebar:"docsSidebar",previous:{title:"Clients",permalink:"/docs/next/concepts-clients"},next:{title:"Cluster-level failover",permalink:"/docs/next/concepts-cluster-level-failover"}},l={},c=[{value:"Replication mechanisms",id:"replication-mechanisms",level:2},{value:"Asynchronous geo-replication in Pulsar",id:"asynchronous-geo-replication-in-pulsar",level:3},{value:"Synchronous geo-replication via BookKeeper",id:"synchronous-geo-replication-via-bookkeeper",level:3},{value:"Replication patterns",id:"replication-patterns",level:2},{value:"Full-mesh replication",id:"full-mesh-replication",level:3},{value:"Active-active replication",id:"active-active-replication",level:3},{value:"Aggregation replication",id:"aggregation-replication",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Regardless of industries, when an unforeseen event occurs and brings day-to-day operations to a halt, an organization needs a well-prepared disaster recovery plan to quickly restore service to clients. However, a disaster recovery plan usually requires a multi-datacenter deployment with geographically dispersed data centers. Such a multi-datacenter deployment requires a geo-replication mechanism to provide additional redundancy in case a data center fails."),(0,r.kt)("p",null,"Pulsar's geo-replication mechanism is typically used for disaster recovery, enabling the replication of persistently stored message data across multiple data centers. For instance, your application is publishing data in one region and you would like to process it for consumption in other regions. With Pulsar\u2019s geo-replication mechanism, messages can be produced and consumed in different geo-locations. "),(0,r.kt)("p",null,"The diagram below illustrates the process of ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/administration-geo"},"geo-replication"),". Whenever three producers (P1, P2 and P3) respectively publish messages to the T1 topic in three clusters, those messages are instantly replicated across clusters. Once the messages are replicated, two consumers (C1 and C2) can consume those messages from their clusters."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A typical geo-replication example with a full-mesh pattern",src:a(34366).Z,width:"1260",height:"614"})),(0,r.kt)("h2",{id:"replication-mechanisms"},"Replication mechanisms"),(0,r.kt)("p",null,"The geo-replication mechanism can be categorized into synchronous geo-replication and asynchronous geo-replication strategies. Pulsar supports both replication mechanisms."),(0,r.kt)("h3",{id:"asynchronous-geo-replication-in-pulsar"},"Asynchronous geo-replication in Pulsar"),(0,r.kt)("p",null,"An asynchronous geo-replicated cluster is composed of multiple physical clusters set up in different data centers. Messages produced on a Pulsar topic are first persisted to the local cluster and then replicated asynchronously to the remote clusters by brokers. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of an asynchronous geo-replication mechanism",src:a(10217).Z,width:"1100",height:"830"})),(0,r.kt)("p",null,"In normal cases, when there are no connectivity issues, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, end-to-end delivery latency is defined by the network round-trip time (RTT) between the data centers. Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (for example, during a network partition)."),(0,r.kt)("p",null,"Asynchronous geo-replication provides lower latency but may result in weaker consistency guarantees due to the potential replication lag that some data hasn\u2019t been replicated. "),(0,r.kt)("h3",{id:"synchronous-geo-replication-via-bookkeeper"},"Synchronous geo-replication via BookKeeper"),(0,r.kt)("p",null,"In synchronous geo-replication, data is synchronously replicated to multiple data centers and the client has to wait for an acknowledgment from the other data centers. As illustrated below, when the client issues a write request to one cluster, the written data will be replicated to the other two data centers. The write request is only acknowledged to the client when the majority of data centers (in this example, at least 2 data centers) have acknowledged that the write has been persisted. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of a synchronous geo-replication mechanism",src:a(85787).Z,width:"980",height:"830"})),(0,r.kt)("p",null,"Synchronous geo-replication in Pulsar is achieved by BookKeeper. A synchronous geo-replicated cluster consists of a cluster of bookies and a cluster of brokers that run in multiple data centers, and a global Zookeeper installation (a ZooKeeper ensemble is running across multiple data centers). You need to configure a BookKeeper region-aware placement policy to store data across multiple data centers and guarantee availability constraints on writes."),(0,r.kt)("p",null,"Synchronous geo-replication provides the highest availability and also guarantees stronger data consistency between different data centers. However, your applications have to pay an extra latency penalty across data centers."),(0,r.kt)("h2",{id:"replication-patterns"},"Replication patterns"),(0,r.kt)("p",null,"Pulsar provides a great degree of flexibility for customizing your replication strategy. You can set up different replication patterns to serve your replication strategy for an application between multiple data centers."),(0,r.kt)("h3",{id:"full-mesh-replication"},"Full-mesh replication"),(0,r.kt)("p",null,"Using full-mesh replication and applying the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/administration-geo#selective-replication"},"selective message replication"),", you can customize your replication strategies and topologies between any number of data centers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of a full-mesh replication pattern",src:a(34366).Z,width:"1260",height:"614"})),(0,r.kt)("h3",{id:"active-active-replication"},"Active-active replication"),(0,r.kt)("p",null,"Active-active replication is a variation of full-mesh replication, with only two data centers. Producers can run at any data center to produce messages, and consumers can consume all messages from all data centers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of an active-active replication pattern",src:a(98507).Z,width:"1042",height:"643"})),(0,r.kt)("p",null,"For how to use active-active replication to migrate data between clusters, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/administration-geo#migrate-data-between-clusters-using-geo-replication"},"here"),"."),(0,r.kt)("h3",{id:"aggregation-replication"},"Aggregation replication"),(0,r.kt)("p",null,"The aggregation replication pattern is typically used when replicating messages from the edge to the cloud. For example, assume you have 3 clusters in 3 fronting datacenters and one aggregated cluster in a central data center, and you want to replicate messages from multiple fronting datacenters to the central data center for aggregation purposes. You can then create an individual namespace for the topics used by each fronting data center and assign the aggregated data center to those namespaces."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of an aggregation replication pattern",src:a(3531).Z,width:"1020",height:"528"})))}d.isMDXComponent=!0},98507:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/active-active-replication-793ab74d71125d28d47a15d3f48d6f48.svg"},3531:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aggregation-replication-f0f1bb40b2515b97a150d944e99b4cfe.svg"},34366:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-mesh-replication-6fd4bcbb7413ea942b9eb338cd8b050a.svg"},10217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/geo-replication-async-782b820f9a56bedf610ed91885714780.svg"},85787:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/geo-replication-sync-569a3c1ef3dd2e0d73adfdb91b1e6c48.svg"}}]);