"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"What\u2019s New in Apache Pulsar 2.10.4",date:new Date("2023-04-19T00:00:00.000Z"),author:"liangyepianzhou, Anonymitaet, momo-jun"},o=void 0,s={permalink:"/blog/2023/04/19/Apache-Pulsar-2-10-4",editUrl:"https://github.com/apache/pulsar-site/edit/main/blog/2023-04-19-Apache-Pulsar-2-10-4.md",source:"@site/blog/2023-04-19-Apache-Pulsar-2-10-4.md",title:"What\u2019s New in Apache Pulsar 2.10.4",description:"The Apache Pulsar community releases version 2.10.4! 37 contributors provided improvements and bug fixes that delivered 12 commits. Thanks for all your contributions.",date:"2023-04-19T00:00:00.000Z",formattedDate:"April 19, 2023",tags:[],readingTime:2.425,hasTruncateMarker:!0,authors:[{name:"liangyepianzhou, Anonymitaet, momo-jun"}],frontMatter:{title:"What\u2019s New in Apache Pulsar 2.10.4",date:"2023-04-19T00:00:00.000Z",author:"liangyepianzhou, Anonymitaet, momo-jun"},prevItem:{title:"Announcing Apache Pulsar 3.0: The First Long-Term Support Release",permalink:"/blog/2023/05/02/announcing-apache-pulsar-3-0"},nextItem:{title:"Speakers and Agenda Announced for Pulsar Virtual Summit Europe 2023!",permalink:"/blog/2023/04/11/pulsar-summit-europe-2023-schedule-announced"}},l={authorsImageUrls:[void 0]},p=[{value:"Improve performance in Key_Shared subscriptions (PR-19167)",id:"improve-performance-in-key_shared-subscriptions-pr-19167",level:3},{value:"Issue",id:"issue",level:4},{value:"Resolution",id:"resolution",level:4},{value:"AbstractBatchedMetadataStore - Use AlreadyClosedException instead of IllegalStateException (PR-19284)",id:"abstractbatchedmetadatastore---use-alreadyclosedexception-instead-of-illegalstateexception-pr-19284",level:3},{value:"Issue",id:"issue-1",level:4},{value:"Resolution",id:"resolution-1",level:4},{value:"Fix open cursor with null-initialPosition, resulting in the earliest position (PR-18416)",id:"fix-open-cursor-with-null-initialposition-resulting-in-the-earliest-position-pr-18416",level:3},{value:"Issue",id:"issue-2",level:4},{value:"Resolution",id:"resolution-2",level:4},{value:"Add isActive in ManagedCursorImpl (PR-19341)",id:"add-isactive-in-managedcursorimpl-pr-19341",level:3},{value:"Issue",id:"issue-3",level:4},{value:"Resolution",id:"resolution-3",level:4},{value:"Support deleting partitioned topics with the keyword -partition- (PR-19230)",id:"support-deleting-partitioned-topics-with-the-keyword--partition--pr-19230",level:3},{value:"Issue",id:"issue-4",level:4},{value:"Resolution",id:"resolution-4",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Apache Pulsar community releases version 2.10.4! 37 contributors provided improvements and bug fixes that delivered 12 commits. Thanks for all your contributions."),(0,r.kt)("p",null,"This blog walks through the most noteworthy changes. For the complete list, including all feature enhancements and bug fixes, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/versioned/pulsar-2.10.4/"},"Pulsar 2.10.4 Release Notes"),"."),(0,r.kt)("h3",{id:"improve-performance-in-key_shared-subscriptions-pr-19167"},"Improve performance in Key_Shared subscriptions (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/19167"},"PR-19167"),")"),(0,r.kt)("h4",{id:"issue"},"Issue"),(0,r.kt)("p",null,"In earlier versions, Key_Shared subscriptions suffered from performance issues due to the lack of a ref count for sticky hash."),(0,r.kt)("h4",{id:"resolution"},"Resolution"),(0,r.kt)("p",null,"A significant performance improvement has been made to the Key_Shared subscriptions by adding a ref count for sticky hash. This optimization reduces the time required to check if messages contain the hash from a given sticky hash set, resulting in improved performance and efficiency."),(0,r.kt)("h3",{id:"abstractbatchedmetadatastore---use-alreadyclosedexception-instead-of-illegalstateexception-pr-19284"},"AbstractBatchedMetadataStore - Use AlreadyClosedException instead of IllegalStateException (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/19284"},"PR-19284"),")"),(0,r.kt)("h4",{id:"issue-1"},"Issue"),(0,r.kt)("p",null,"In earlier versions, when the broker was shutting down, the ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractBatchedMetadataStore")," would complete pending operations with a generic ",(0,r.kt)("inlineCode",{parentName:"p"},"IllegalStateException"),". However, code dependent on the ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataStore")," usually expected instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataStoreException")," and might not react properly to this error."),(0,r.kt)("h4",{id:"resolution-1"},"Resolution"),(0,r.kt)("p",null,"This PR improves the error handling during broker shutdown by completing pending operations with an ",(0,r.kt)("inlineCode",{parentName:"p"},"AlreadyClosedException")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"IllegalStateException"),". This ensures that the dependent code responds more appropriately to the error, even if the broker is shutting down."),(0,r.kt)("h3",{id:"fix-open-cursor-with-null-initialposition-resulting-in-the-earliest-position-pr-18416"},"Fix open cursor with null-initialPosition, resulting in the earliest position (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/18416"},"PR-18416"),")"),(0,r.kt)("h4",{id:"issue-2"},"Issue"),(0,r.kt)("p",null,"In earlier versions, called ",(0,r.kt)("inlineCode",{parentName:"p"},'ledger.openCursor("xxx", null)')," with a null ",(0,r.kt)("inlineCode",{parentName:"p"},"initialPosition")," parameter would result in the cursor being set to the earliest position, causing unexpected behavior. The root cause of this issue was due to incorrect handling of the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialPosition")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedLedgerImpl.java"),"."),(0,r.kt)("h4",{id:"resolution-2"},"Resolution"),(0,r.kt)("p",null,"This PR fixes the issue by ensuring that the correct initial position is used when opening a cursor with a null ",(0,r.kt)("inlineCode",{parentName:"p"},"initialPosition"),". The code now sets the cursor to the latest position, as expected."),(0,r.kt)("h3",{id:"add-isactive-in-managedcursorimpl-pr-19341"},"Add isActive in ManagedCursorImpl (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/19341"},"PR-19341"),")"),(0,r.kt)("h4",{id:"issue-3"},"Issue"),(0,r.kt)("p",null,"In previous versions, when there were many concurrent subscriptions in a topic, broker performance would degrade due to many io-threads waiting for the lock, synchronized (activeCursors) while calling checkBackloggedCursors."),(0,r.kt)("h4",{id:"resolution-3"},"Resolution"),(0,r.kt)("p",null,"This PR adds an ",(0,r.kt)("inlineCode",{parentName:"p"},"isActive")," variable in ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedCursorImpl")," to minimize the access to ",(0,r.kt)("inlineCode",{parentName:"p"},"activeCursors")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedLedgerImpl,")," which reduces the contention on the lock and improves the broker performance with many concurrent subscriptions."),(0,r.kt)("h3",{id:"support-deleting-partitioned-topics-with-the-keyword--partition--pr-19230"},"Support deleting partitioned topics with the keyword -partition- (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/19230"},"PR-19230"),")"),(0,r.kt)("h4",{id:"issue-4"},"Issue"),(0,r.kt)("p",null,"In earlier versions, although users could create partitioned topics using the client when partitioned type auto-creation was enabled, there was no support for deleting these partitioned topics."),(0,r.kt)("h4",{id:"resolution-4"},"Resolution"),(0,r.kt)("p",null,"This PR adds support for deleting partitioned topics using the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"-partition-"),", making it easier for users to manage their partitioned topics."),(0,r.kt)("h1",{id:"whats-next"},"What\u2019s Next?"),(0,r.kt)("p",null,"If you are interested in learning more about Pulsar 2.10.4, you can ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/download/"},"download")," and try it out now!"),(0,r.kt)("p",null,"For more information about the Apache Pulsar project and current progress, visit\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"Pulsar website"),", follow the project on Twitter\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),", and join ",(0,r.kt)("a",{parentName:"p",href:"https://apache-pulsar.slack.com/"},"Pulsar Slack"),"!"))}d.isMDXComponent=!0}}]);