"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[56594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(a),h=l,g=s["".concat(o,".").concat(h)]||s[h]||m[h]||n;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},76665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const n={id:"pulsar-client-go-0.4.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},i=void 0,p={unversionedId:"versioned/pulsar-client-go-0.4.0",id:"versioned/pulsar-client-go-0.4.0",title:"Pulsar Client Go",description:"Feature",source:"@site/release-notes/versioned/pulsar-client-go-0.4.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.4.0",permalink:"/release-notes/versioned/pulsar-client-go-0.4.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-client-go-0.4.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.4.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},o={},u=[{value:"Feature",id:"feature",level:2},{value:"Improve",id:"improve",level:2}],c={toc:u};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"feature"},"Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support send timeout in Producer side, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/394"},"PR-394"),"."),(0,l.kt)("li",{parentName:"ul"},"Add metric for internal publish latency, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/397"},"PR-397"),"."),(0,l.kt)("li",{parentName:"ul"},"Add key_based Batch logic, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/400"},"PR-363"),"."),(0,l.kt)("li",{parentName:"ul"},"Add error label to publish errors metric, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/405"},"PR-405"),"."),(0,l.kt)("li",{parentName:"ul"},"Add const client label to metrics, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/406"},"PR-406"),"."),(0,l.kt)("li",{parentName:"ul"},"Attach topic and custom labels to Prometheus metrics, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/410"},"PR-410"),"."),(0,l.kt)("li",{parentName:"ul"},"Add orderingKey apis, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/427"},"PR-427"),"."),(0,l.kt)("li",{parentName:"ul"},"Support jwt and trusted cert for pulsar perf client, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/428"},"PR-427"),".")),(0,l.kt)("h2",{id:"improve"},"Improve"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix bot action CI yaml file, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/395"},"PR-395"),"."),(0,l.kt)("li",{parentName:"ul"},"Update go-keyring to v1.1.6 to remove warnings on MacOS Catalina+ , see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/404"},"PR-404"),"."),(0,l.kt)("li",{parentName:"ul"},"Read the clock fewer times during message routing, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/408"},"PR-372"),"."),(0,l.kt)("li",{parentName:"ul"},"Close dangling autoDiscovery goroutine in consumer, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/411"},"PR-411"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix discard unacked messages, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/413"},"PR-413"),"."),(0,l.kt)("li",{parentName:"ul"},"Fixed logic to attempt reconnections to same broker, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/414"},"PR-414"),"."),(0,l.kt)("li",{parentName:"ul"},"Reduce the default TCP connection timeout from 30 to 5 seconds, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/415"},"PR-415"),"."),(0,l.kt)("li",{parentName:"ul"},"Removed unused ",(0,l.kt)("inlineCode",{parentName:"li"},'import "C"')," statement, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/416"},"PR-416"),"."),(0,l.kt)("li",{parentName:"ul"},"Renamed ",(0,l.kt)("inlineCode",{parentName:"li"},"Metrics.RpcRequestCount")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"RPCRequestCount")," to conform to style check, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/417"},"PR-417"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix leaked nack tracker goroutine, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/418"},"PR-418"),"."),(0,l.kt)("li",{parentName:"ul"},"Clearing message queues after seek requests, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/419"},"PR-419"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix retry policy not effective with partitioned topic, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/425"},"PR-425"),"."),(0,l.kt)("li",{parentName:"ul"},"Deduplicate user provided topics before using them, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/426"},"PR-426"),"."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"reader.HasNext()")," returns true on empty topic, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/441"},"PR-441"),"."),(0,l.kt)("li",{parentName:"ul"},"Upgrade ",(0,l.kt)("inlineCode",{parentName:"li"},"gogo/protobuf")," to 1.3.2, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/446"},"PR-446"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix ",(0,l.kt)("inlineCode",{parentName:"li"},"logrusWrapper")," shrink interfaces slice into an interface, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/449"},"PR-449"),"."),(0,l.kt)("li",{parentName:"ul"},"Logging what really caused lookup failure, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/450"},"PR-450"),"."),(0,l.kt)("li",{parentName:"ul"},"Make state thread safe in consumer_partition and connection, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/451"},"PR-451"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix ",(0,l.kt)("inlineCode",{parentName:"li"},"KeyFileTypeServiceAccount")," not found compile error, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/455"},"PR-455"),"."),(0,l.kt)("li",{parentName:"ul"},"Fix unsubscribe blocked when consumer is closing or has closed, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/457"},"PR-457"),"."),(0,l.kt)("li",{parentName:"ul"},"The asynchronized send timeout checking without pending queue lock, see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-go/pull/460"},"PR-460"),".")))}s.isMDXComponent=!0}}]);