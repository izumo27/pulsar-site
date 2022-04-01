"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6573],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"develop-tools",title:"Simulation tools",sidebar_label:"Simulation tools"},s=void 0,p={unversionedId:"develop-tools",id:"develop-tools",title:"Simulation tools",description:"It is sometimes necessary create an test environment and incur artificial load to observe how well load managers",source:"@site/docs/develop-tools.md",sourceDirName:".",slug:"/develop-tools",permalink:"/docs/next/develop-tools",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/develop-tools.md",tags:[],version:"current",frontMatter:{id:"develop-tools",title:"Simulation tools",sidebar_label:"Simulation tools"},sidebar:"docsSidebar",previous:{title:"BookKeeper Ledger Metadata",permalink:"/docs/next/cookbooks-bookkeepermetadata"},next:{title:"Binary protocol",permalink:"/docs/next/develop-binary-protocol"}},u={},m=[{value:"Simulation Client",id:"simulation-client",level:2},{value:"Usage",id:"usage",level:3},{value:"Simulation Controller",id:"simulation-controller",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Difference Between Copy, Simulate, and Stream",id:"difference-between-copy-simulate-and-stream",level:3},{value:"Broker Monitor",id:"broker-monitor",level:2},{value:"Usage",id:"usage-2",level:3}],c={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is sometimes necessary create an test environment and incur artificial load to observe how well load managers\nhandle the load. The load simulation controller, the load simulation client, and the broker monitor were created as an\neffort to make create this load and observe the effects on the managers more easily."),(0,r.kt)("h2",{id:"simulation-client"},"Simulation Client"),(0,r.kt)("p",null,"The simulation client is a machine which will create and subscribe to topics with configurable message rates and sizes.\nBecause it is sometimes necessary in simulating large load to use multiple client machines, the user does not interact\nwith the simulation client directly, but instead delegates their requests to the simulation controller, which will then\nsend signals to clients to start incurring load. The client implementation is in the class\n",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.testclient.LoadSimulationClient"),"."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To Start a simulation client, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-perf")," script with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"simulation-client")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npulsar-perf simulation-client --port <listen port> --service-url <pulsar service url>\n\n")),(0,r.kt)("p",null,"The client will then be ready to receive controller commands."),(0,r.kt)("h2",{id:"simulation-controller"},"Simulation Controller"),(0,r.kt)("p",null,"The simulation controller send signals to the simulation clients, requesting them to create new topics, stop old\ntopics, change the load incurred by topics, as well as several other tasks. It is implemented in the class\n",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.testclient.LoadSimulationController")," and presents a shell to the user as an interface to send\ncommand with."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"To start a simulation controller, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-perf")," script with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"simulation-controller")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npulsar-perf simulation-controller --cluster <cluster to simulate on> --client-port <listen port for clients>\n--clients <comma-separated list of client host names>\n\n")),(0,r.kt)("p",null,"The clients should already be started before the controller is started. You will then be presented with a simple prompt,\nwhere you can issue commands to simulation clients. Arguments often refer to tenant names, namespace names, and topic\nnames. In all cases, the BASE name of the tenants, namespaces, and topics are used. For example, for the topic\n",(0,r.kt)("inlineCode",{parentName:"p"},"persistent://my_tenant/my_cluster/my_namespace/my_topic"),", the tenant name is ",(0,r.kt)("inlineCode",{parentName:"p"},"my_tenant"),", the namespace name is\n",(0,r.kt)("inlineCode",{parentName:"p"},"my_namespace"),", and the topic name is ",(0,r.kt)("inlineCode",{parentName:"p"},"my_topic"),". The controller can perform the following actions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a topic with a producer and a consumer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trade <tenant> <namespace> <topic> [--rate <message rate per second>]\n[--rand-rate <lower bound>,<upper bound>]\n[--size <message size in bytes>]")))),(0,r.kt)("li",{parentName:"ul"},"Create a group of topics with a producer and a consumer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trade_group <tenant> <group> <num_namespaces> [--rate <message rate per second>]\n[--rand-rate <lower bound>,<upper bound>]\n[--separation <separation between creating topics in ms>] [--size <message size in bytes>]\n[--topics-per-namespace <number of topics to create per namespace>]")))),(0,r.kt)("li",{parentName:"ul"},"Change the configuration of an existing topic",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"change <tenant> <namespace> <topic> [--rate <message rate per second>]\n[--rand-rate <lower bound>,<upper bound>]\n[--size <message size in bytes>]")))),(0,r.kt)("li",{parentName:"ul"},"Change the configuration of a group of topics",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"change_group <tenant> <group> [--rate <message rate per second>] [--rand-rate <lower bound>,<upper bound>]\n[--size <message size in bytes>] [--topics-per-namespace <number of topics to create per namespace>]")))),(0,r.kt)("li",{parentName:"ul"},"Shutdown a previously created topic",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stop <tenant> <namespace> <topic>")))),(0,r.kt)("li",{parentName:"ul"},"Shutdown a previously created group of topics",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stop_group <tenant> <group>")))),(0,r.kt)("li",{parentName:"ul"},"Copy the historical data from one ZooKeeper to another and simulate based on the message rates and sizes in that history",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"copy <tenant> <source zookeeper> <target zookeeper> [--rate-multiplier value]")))),(0,r.kt)("li",{parentName:"ul"},"Simulate the load of the historical data on the current ZooKeeper (should be same ZooKeeper being simulated on)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"simulate <tenant> <zookeeper> [--rate-multiplier value]")))),(0,r.kt)("li",{parentName:"ul"},"Stream the latest data from the given active ZooKeeper to simulate the real-time load of that ZooKeeper.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stream <tenant> <zookeeper> [--rate-multiplier value]"))))),(0,r.kt)("p",null,'The "group" arguments in these commands allow the user to create or affect multiple topics at once. Groups are created\nwhen calling the ',(0,r.kt)("inlineCode",{parentName:"p"},"trade_group")," command, and all topics from these groups may be subsequently modified or stopped\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"change_group")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"stop_group")," commands respectively. All ZooKeeper arguments are of the form\n",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper_host:port"),"."),(0,r.kt)("h3",{id:"difference-between-copy-simulate-and-stream"},"Difference Between Copy, Simulate, and Stream"),(0,r.kt)("p",null,"The commands ",(0,r.kt)("inlineCode",{parentName:"p"},"copy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"simulate"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," are very similar but have significant differences. ",(0,r.kt)("inlineCode",{parentName:"p"},"copy")," is used when\nyou want to simulate the load of a static, external ZooKeeper on the ZooKeeper you are simulating on. Thus,\n",(0,r.kt)("inlineCode",{parentName:"p"},"source zookeeper")," should be the ZooKeeper you want to copy and ",(0,r.kt)("inlineCode",{parentName:"p"},"target zookeeper")," should be the ZooKeeper you are\nsimulating on, and then it will get the full benefit of the historical data of the source in both load manager\nimplementations. ",(0,r.kt)("inlineCode",{parentName:"p"},"simulate")," on the other hand takes in only one ZooKeeper, the one you are simulating on. It assumes\nthat you are simulating on a ZooKeeper that has historical data for ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleLoadManagerImpl")," and creates equivalent\nhistorical data for ",(0,r.kt)("inlineCode",{parentName:"p"},"ModularLoadManagerImpl"),". Then, the load according to the historical data is simulated by the\nclients. Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," takes in an active ZooKeeper different than the ZooKeeper being simulated on and streams\nload data from it and simulates the real-time load. In all cases, the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"rate-multiplier")," argument allows the\nuser to simulate some proportion of the load. For instance, using ",(0,r.kt)("inlineCode",{parentName:"p"},"--rate-multiplier 0.05")," will cause messages to\nbe sent at only ",(0,r.kt)("inlineCode",{parentName:"p"},"5%")," of the rate of the load that is being simulated."),(0,r.kt)("h2",{id:"broker-monitor"},"Broker Monitor"),(0,r.kt)("p",null,"To observe the behavior of the load manager in these simulations, one may utilize the broker monitor, which is\nimplemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.testclient.BrokerMonitor"),". The broker monitor will print tabular load data to the\nconsole as it is updated using watchers."),(0,r.kt)("h3",{id:"usage-2"},"Usage"),(0,r.kt)("p",null,"To start a broker monitor, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitor-brokers")," command in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-perf")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npulsar-perf monitor-brokers --connect-string <zookeeper host:port>\n\n")),(0,r.kt)("p",null,"The console will then continuously print load data until it is interrupted."))}d.isMDXComponent=!0}}]);