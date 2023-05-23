"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[65072],{3905:(e,t,p)=>{p.d(t,{Zo:()=>h,kt:()=>b});var a=p(67294);function l(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function i(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,a)}return p}function c(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?i(Object(p),!0).forEach((function(t){l(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):i(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function r(e,t){if(null==e)return{};var p,a,l=function(e,t){if(null==e)return{};var p,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)p=i[a],t.indexOf(p)>=0||(l[p]=e[p]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)p=i[a],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(l[p]=e[p])}return l}var n=a.createContext({}),u=function(e){var t=a.useContext(n),p=t;return e&&(p="function"==typeof e?e(t):c(c({},t),e)),p},h=function(e){var t=u(e.components);return a.createElement(n.Provider,{value:t},e.children)},s="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var p=e.components,l=e.mdxType,i=e.originalType,n=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),s=u(p),m=l,b=s["".concat(n,".").concat(m)]||s[m]||o[m]||i;return p?a.createElement(b,c(c({ref:t},h),{},{components:p})):a.createElement(b,c({ref:t},h))}));function b(e,t){var p=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=p.length,c=new Array(i);c[0]=m;var r={};for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n]);r.originalType=e,r[s]="string"==typeof e?e:l,c[1]=r;for(var u=2;u<i;u++)c[u]=p[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,p)}m.displayName="MDXCreateElement"},72660:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>n,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=p(87462),l=(p(67294),p(3905));const i={id:"client-cpp-3.2.0",title:"Client CPP 3.2.0",sidebar_label:"Client CPP 3.2.0"},c=void 0,r={unversionedId:"versioned/client-cpp-3.2.0",id:"versioned/client-cpp-3.2.0",title:"Client CPP 3.2.0",description:"What's Changed",source:"@site/release-notes/versioned/client-cpp-3.2.0.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-3.2.0",permalink:"/release-notes/versioned/client-cpp-3.2.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-3.2.0.md",tags:[],version:"current",frontMatter:{id:"client-cpp-3.2.0",title:"Client CPP 3.2.0",sidebar_label:"Client CPP 3.2.0"}},n={},u=[{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}],h={toc:u},s="wrapper";function o(e){let{components:t,...p}=e;return(0,l.kt)(s,(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix segmentation fault during the destruction of ConsumerImpl by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/121"},"https://github.com/apache/pulsar-client-cpp/pull/121")),(0,l.kt)("li",{parentName:"ul"},"[improve]"," Exclude debug artifact in the release and tar the windows artifacts by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/124"},"https://github.com/apache/pulsar-client-cpp/pull/124")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix NamedEntity::checkName regression by @erobot in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/127"},"https://github.com/apache/pulsar-client-cpp/pull/127")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix PartitionedProducerImpl::closeAsync to close sub-producers properly by @erobot in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/125"},"https://github.com/apache/pulsar-client-cpp/pull/125")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix acknowledge MessageId list does not work when ackGroupingTimeMs is 0 by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/128"},"https://github.com/apache/pulsar-client-cpp/pull/128")),(0,l.kt)("li",{parentName:"ul"},"Fix the broken master by the upgrade of GTest by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/133"},"https://github.com/apache/pulsar-client-cpp/pull/133")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Close broker producer created after producer close by @erobot in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/131"},"https://github.com/apache/pulsar-client-cpp/pull/131")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix a crash when closing a connection while connecting by @erobot in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/136"},"https://github.com/apache/pulsar-client-cpp/pull/136")),(0,l.kt)("li",{parentName:"ul"},"Boost optional by @fregate in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/138"},"https://github.com/apache/pulsar-client-cpp/pull/138")),(0,l.kt)("li",{parentName:"ul"},"Add BatchedMessageIdImpl to acknowledge batched messages by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/132"},"https://github.com/apache/pulsar-client-cpp/pull/132")),(0,l.kt)("li",{parentName:"ul"},"Bumped version to 3.2.0-pre by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/141"},"https://github.com/apache/pulsar-client-cpp/pull/141")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Use sudo when executing ",(0,l.kt)("inlineCode",{parentName:"li"},"apt-get install")," by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/143"},"https://github.com/apache/pulsar-client-cpp/pull/143")),(0,l.kt)("li",{parentName:"ul"},"[fix][doc]"," CMake is added to the Homebrew Mac Installation list by @erichare in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/145"},"https://github.com/apache/pulsar-client-cpp/pull/145")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Use authoritative argument correctly in BinaryProtoLookupService::findBroker by @erobot in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/146"},"https://github.com/apache/pulsar-client-cpp/pull/146")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," PIP 107: Introduce chunk message ID by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/148"},"https://github.com/apache/pulsar-client-cpp/pull/148")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix ",(0,l.kt)("inlineCode",{parentName:"li"},"auxv")," detection by @AtkinsChang in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/152"},"https://github.com/apache/pulsar-client-cpp/pull/152")),(0,l.kt)("li",{parentName:"ul"},"[fix][build]"," Hide non-exported symbols from the dependencies by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/155"},"https://github.com/apache/pulsar-client-cpp/pull/155")),(0,l.kt)("li",{parentName:"ul"},"Format .c suffix file. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/159"},"https://github.com/apache/pulsar-client-cpp/pull/159")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix MessageId serialization when it's a batched message by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/153"},"https://github.com/apache/pulsar-client-cpp/pull/153")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix log for connection disconnected expectedly by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/156"},"https://github.com/apache/pulsar-client-cpp/pull/156")),(0,l.kt)("li",{parentName:"ul"},"The C API supports setting the log level. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/158"},"https://github.com/apache/pulsar-client-cpp/pull/158")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Add pulsar_logger_t as the configurable C logger by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/162"},"https://github.com/apache/pulsar-client-cpp/pull/162")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support messages with generic types by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/149"},"https://github.com/apache/pulsar-client-cpp/pull/149")),(0,l.kt)("li",{parentName:"ul"},"Fix segfault caused by socket I/O on a closed io_service by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/168"},"https://github.com/apache/pulsar-client-cpp/pull/168")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix missing schema related function definitions by @romainbrancourt in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/171"},"https://github.com/apache/pulsar-client-cpp/pull/171")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support batch index acknowledgment by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/151"},"https://github.com/apache/pulsar-client-cpp/pull/151")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix hostname verification by @izumo27 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/126"},"https://github.com/apache/pulsar-client-cpp/pull/126")),(0,l.kt)("li",{parentName:"ul"},"Fix broken main branch caused by wrong getBitSet method by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/177"},"https://github.com/apache/pulsar-client-cpp/pull/177")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Reader support readeNextAsync interface. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/176"},"https://github.com/apache/pulsar-client-cpp/pull/176")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support Dead Letter Topic. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/139"},"https://github.com/apache/pulsar-client-cpp/pull/139")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support auto download schema when create producer. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/157"},"https://github.com/apache/pulsar-client-cpp/pull/157")),(0,l.kt)("li",{parentName:"ul"},"Fix Wireshark build by @Demogorgon314 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/182"},"https://github.com/apache/pulsar-client-cpp/pull/182")),(0,l.kt)("li",{parentName:"ul"},"Support the Wireshark plugin for more Wireshark distributions by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/183"},"https://github.com/apache/pulsar-client-cpp/pull/183")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support partitioned topic reader. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/154"},"https://github.com/apache/pulsar-client-cpp/pull/154")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Avoid resource leakage of AckGroupingTracker by @erobot in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/185"},"https://github.com/apache/pulsar-client-cpp/pull/185")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Use ClientConfiguration::getTlsTrustCertsFilePath for the OAuth2 flow by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/190"},"https://github.com/apache/pulsar-client-cpp/pull/190")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix deadlock when closing the partitioned producer by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/187"},"https://github.com/apache/pulsar-client-cpp/pull/187")),(0,l.kt)("li",{parentName:"ul"},"[Fix]"," NegativeAcksTracker need close when consumer closed. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/188"},"https://github.com/apache/pulsar-client-cpp/pull/188")),(0,l.kt)("li",{parentName:"ul"},"[TableView-1]"," Add table view API by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/189"},"https://github.com/apache/pulsar-client-cpp/pull/189")),(0,l.kt)("li",{parentName:"ul"},"[improve]"," Add configuration to limit times of client's lookup redirection. by @tongsucn in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/129"},"https://github.com/apache/pulsar-client-cpp/pull/129")),(0,l.kt)("li",{parentName:"ul"},"Fix broken main branch that failed to build the wireshark dissector on macOS by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/199"},"https://github.com/apache/pulsar-client-cpp/pull/199")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Add producer interceptor by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/169"},"https://github.com/apache/pulsar-client-cpp/pull/169")),(0,l.kt)("li",{parentName:"ul"},"[refactor]"," Handle responses in methods instead of switch cases by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/197"},"https://github.com/apache/pulsar-client-cpp/pull/197")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Redeliver messages that can't be decrypted. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/160"},"https://github.com/apache/pulsar-client-cpp/pull/160")),(0,l.kt)("li",{parentName:"ul"},"[improve]"," Refactor client version format by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/206"},"https://github.com/apache/pulsar-client-cpp/pull/206")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Handle exceptions when creating timers when fd limit is reached by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/203"},"https://github.com/apache/pulsar-client-cpp/pull/203")),(0,l.kt)("li",{parentName:"ul"},"[TableView-2]"," Implement all interfaces. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/196"},"https://github.com/apache/pulsar-client-cpp/pull/196")),(0,l.kt)("li",{parentName:"ul"},"Fix Client::close might hang forever for a multi-topics consumer by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/211"},"https://github.com/apache/pulsar-client-cpp/pull/211")),(0,l.kt)("li",{parentName:"ul"},"Fix testPublishEmptyValue flaky test. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/216"},"https://github.com/apache/pulsar-client-cpp/pull/216")),(0,l.kt)("li",{parentName:"ul"},"Fix flaky testAcknowledgeCumulativeWithPartition  by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/214"},"https://github.com/apache/pulsar-client-cpp/pull/214")),(0,l.kt)("li",{parentName:"ul"},"Fix event loop thread might exit unexpectedly by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/217"},"https://github.com/apache/pulsar-client-cpp/pull/217")),(0,l.kt)("li",{parentName:"ul"},"Use shared_ptr for topic name in message ids by @merlimat in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/218"},"https://github.com/apache/pulsar-client-cpp/pull/218")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Add consumer interceptor  by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/210"},"https://github.com/apache/pulsar-client-cpp/pull/210")),(0,l.kt)("li",{parentName:"ul"},"Make stats timers thread safe to use by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/223"},"https://github.com/apache/pulsar-client-cpp/pull/223")),(0,l.kt)("li",{parentName:"ul"},"Fix TableViewTest.testCreateTableView flaky test. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/222"},"https://github.com/apache/pulsar-client-cpp/pull/222")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support ExclusiveWithFencing producer access mode. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/201"},"https://github.com/apache/pulsar-client-cpp/pull/201")),(0,l.kt)("li",{parentName:"ul"},"Fix possible crash caused by MessageId::getTopicName by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/225"},"https://github.com/apache/pulsar-client-cpp/pull/225")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Add ",(0,l.kt)("inlineCode",{parentName:"li"},"onNegativeAcksSend")," to the consumer interceptor by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/220"},"https://github.com/apache/pulsar-client-cpp/pull/220")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Use unique topic name in ConsumerInterceptorsTest by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/231"},"https://github.com/apache/pulsar-client-cpp/pull/231")),(0,l.kt)("li",{parentName:"ul"},"Fix flaky test ProducerTest.testWaitForExclusiveProducer by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/233"},"https://github.com/apache/pulsar-client-cpp/pull/233")),(0,l.kt)("li",{parentName:"ul"},"Support waiting for the ACK response by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/232"},"https://github.com/apache/pulsar-client-cpp/pull/232")),(0,l.kt)("li",{parentName:"ul"},"[fix][flaky]"," Remove zero queue case in ConsumerInterceptorTest to reduce flaky by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/239"},"https://github.com/apache/pulsar-client-cpp/pull/239")),(0,l.kt)("li",{parentName:"ul"},"Fix ack non-persistent topic will be blocked. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/240"},"https://github.com/apache/pulsar-client-cpp/pull/240")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support pattern subscribe non-persistent topic. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/207"},"https://github.com/apache/pulsar-client-cpp/pull/207")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Consumer batch receive will cause data loss. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/228"},"https://github.com/apache/pulsar-client-cpp/pull/228")),(0,l.kt)("li",{parentName:"ul"},"Fix typo in comment by @izumo27 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/243"},"https://github.com/apache/pulsar-client-cpp/pull/243")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support set producer access mode for C client. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/245"},"https://github.com/apache/pulsar-client-cpp/pull/245")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," Fix compilation error that occurs when USE_LOG4CXX is ON by @massakam in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/244"},"https://github.com/apache/pulsar-client-cpp/pull/244")),(0,l.kt)("li",{parentName:"ul"},"Speed up the process to start standalone for tests by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/236"},"https://github.com/apache/pulsar-client-cpp/pull/236")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support set batch index ack for C client. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/246"},"https://github.com/apache/pulsar-client-cpp/pull/246")),(0,l.kt)("li",{parentName:"ul"},"[cleanup]"," Remove useless variable ",(0,l.kt)("inlineCode",{parentName:"li"},"interceptors_")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"ProducerImplBase")," by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/250"},"https://github.com/apache/pulsar-client-cpp/pull/250")),(0,l.kt)("li",{parentName:"ul"},"Fix the static library might failed to link on Windows by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/251"},"https://github.com/apache/pulsar-client-cpp/pull/251")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support set consumer regex subscription mode for C client. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/247"},"https://github.com/apache/pulsar-client-cpp/pull/247")),(0,l.kt)("li",{parentName:"ul"},"Support the base64 encoded credentials for OAuth2 authentication by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/249"},"https://github.com/apache/pulsar-client-cpp/pull/249")),(0,l.kt)("li",{parentName:"ul"},"[C API]"," Support synchronous consumer batch receive by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/252"},"https://github.com/apache/pulsar-client-cpp/pull/252")),(0,l.kt)("li",{parentName:"ul"},"PIP-254: Support configuring client version with a description suffix by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/253"},"https://github.com/apache/pulsar-client-cpp/pull/253")),(0,l.kt)("li",{parentName:"ul"},"Complete batch receive other feature of C client  by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/254"},"https://github.com/apache/pulsar-client-cpp/pull/254")),(0,l.kt)("li",{parentName:"ul"},"[Bug Fix][KeySharedPolicy]"," Fixed bug where KeySharedPolicy::setStickyRanges duplicated ranges. by @hyperevo in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/242"},"https://github.com/apache/pulsar-client-cpp/pull/242")),(0,l.kt)("li",{parentName:"ul"},"Improve the C APIs for batch receive policy and fix the wrong documents by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/256"},"https://github.com/apache/pulsar-client-cpp/pull/256")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support dead letter topic for C client. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/237"},"https://github.com/apache/pulsar-client-cpp/pull/237")),(0,l.kt)("li",{parentName:"ul"},"Fix broken debian package build process by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/258"},"https://github.com/apache/pulsar-client-cpp/pull/258")),(0,l.kt)("li",{parentName:"ul"},"Support get the SchemaInfo from a topic and the schema version by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/257"},"https://github.com/apache/pulsar-client-cpp/pull/257")),(0,l.kt)("li",{parentName:"ul"},"Fix broken debian package build process by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/258"},"https://github.com/apache/pulsar-client-cpp/pull/258")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support end-to-end encryption in C Reader API by @rbarbey in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/262"},"https://github.com/apache/pulsar-client-cpp/pull/262")),(0,l.kt)("li",{parentName:"ul"},"[doc]"," Fix compile perf on MacOS and Ubuntu. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/263"},"https://github.com/apache/pulsar-client-cpp/pull/263")),(0,l.kt)("li",{parentName:"ul"},"[Doc]"," Add links to client docs and feature matrix in README.md by @momo-jun in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/264"},"https://github.com/apache/pulsar-client-cpp/pull/264")),(0,l.kt)("li",{parentName:"ul"},"Fix deadlock for negative acknowledgment by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/266"},"https://github.com/apache/pulsar-client-cpp/pull/266"))),(0,l.kt)("h2",{id:"new-contributors"},"New Contributors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@erobot made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/127"},"https://github.com/apache/pulsar-client-cpp/pull/127")),(0,l.kt)("li",{parentName:"ul"},"@erichare made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/145"},"https://github.com/apache/pulsar-client-cpp/pull/145")),(0,l.kt)("li",{parentName:"ul"},"@AtkinsChang made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/152"},"https://github.com/apache/pulsar-client-cpp/pull/152")),(0,l.kt)("li",{parentName:"ul"},"@romainbrancourt made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/171"},"https://github.com/apache/pulsar-client-cpp/pull/171")),(0,l.kt)("li",{parentName:"ul"},"@izumo27 made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/126"},"https://github.com/apache/pulsar-client-cpp/pull/126")),(0,l.kt)("li",{parentName:"ul"},"@tongsucn made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/129"},"https://github.com/apache/pulsar-client-cpp/pull/129")),(0,l.kt)("li",{parentName:"ul"},"@massakam made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/244"},"https://github.com/apache/pulsar-client-cpp/pull/244")),(0,l.kt)("li",{parentName:"ul"},"@hyperevo made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/242"},"https://github.com/apache/pulsar-client-cpp/pull/242"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp/compare/v3.1.0...v3.2.0"},"https://github.com/apache/pulsar-client-cpp/compare/v3.1.0...v3.2.0")))}o.isMDXComponent=!0}}]);