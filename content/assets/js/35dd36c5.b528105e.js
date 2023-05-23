"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[93352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"functions-develop-tutorial",title:"Tutorials",sidebar_label:"Tutorials"},a=void 0,u={unversionedId:"functions-develop-tutorial",id:"version-3.0.x/functions-develop-tutorial",title:"Tutorials",description:"Write a function for word count",source:"@site/versioned_docs/version-3.0.x/functions-develop-tutorial.md",sourceDirName:".",slug:"/functions-develop-tutorial",permalink:"/docs/3.0.x/functions-develop-tutorial",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/functions-develop-tutorial.md",tags:[],version:"3.0.x",frontMatter:{id:"functions-develop-tutorial",title:"Tutorials",sidebar_label:"Tutorials"},sidebar:"docsSidebar",previous:{title:"Use SerDe",permalink:"/docs/3.0.x/functions-develop-serde"},next:{title:"How to debug",permalink:"/docs/3.0.x/functions-debug"}},s={},l=[{value:"Write a function for word count",id:"write-a-function-for-word-count",level:2},{value:"Write a function for content-based routing",id:"write-a-function-for-content-based-routing",level:2},{value:"Write a window function for word count",id:"write-a-window-function-for-word-count",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"write-a-function-for-word-count"},"Write a function for word count"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following example is a stateful function. By default, the state of a function is disabled. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.0.x/functions-worker-stateful"},"Enable stateful functions")," for more instructions.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write the function in Java using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.0.x/functions-develop-api"},"SDK for Java"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},' package org.example.functions;\n\n import org.apache.pulsar.functions.api.Context;\n import org.apache.pulsar.functions.api.Function;\n\n import java.util.Arrays;\n\n public class WordCountFunction implements Function<String, Void> {\n     // This function is invoked every time a message is published to the input topic\n     @Override\n     public Void process(String input, Context context) throws Exception {\n         Arrays.asList(input.split(" ")).forEach(word -> {\n             String counterKey = word.toLowerCase();\n             context.incrCounter(counterKey, 1);\n         });\n         return null;\n     }\n }\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bundle and build the JAR file, and then deploy it in your Pulsar cluster using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n   --jar target/my-jar-with-dependencies.jar \\\n   --classname org.example.functions.WordCountFunction \\\n   --tenant public \\\n   --namespace default \\\n   --name word-count \\\n   --inputs persistent://public/default/sentences \\\n   --output persistent://public/default/count\n")))),(0,o.kt)("h2",{id:"write-a-function-for-content-based-routing"},"Write a function for content-based routing"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write the function in Python using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.0.x/functions-develop-api"},"SDK for Python"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},' from pulsar import Function\n\n class RoutingFunction(Function):\n     def __init__(self):\n         self.fruits_topic = "persistent://public/default/fruits"\n         self.vegetables_topic = "persistent://public/default/vegetables"\n\n     def is_fruit(item):\n         return item in [b"apple", b"orange", b"pear", b"other fruits..."]\n\n     def is_vegetable(item):\n         return item in [b"carrot", b"lettuce", b"radish", b"other vegetables..."]\n\n     def process(self, item, context):\n         if self.is_fruit(item):\n             context.publish(self.fruits_topic, item)\n         elif self.is_vegetable(item):\n             context.publish(self.vegetables_topic, item)\n         else:\n             warning = "The item {0} is neither a fruit nor a vegetable".format(item)\n             context.get_logger().warn(warning)\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Suppose this code is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/router.py"),", then you can deploy it in your Pulsar cluster using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n   --py ~/router.py \\\n   --classname router.RoutingFunction \\\n   --tenant public \\\n   --namespace default \\\n   --name route-fruit-veg \\\n   --inputs persistent://public/default/basket-items\n")))),(0,o.kt)("h2",{id:"write-a-window-function-for-word-count"},"Write a window function for word count"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently, window functions are only available in Java.")),(0,o.kt)("p",null,"This example demonstrates how to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.0.x/functions-develop-api"},"language-native interface")," to write a window function in Java."),(0,o.kt)("p",null,"Each input message is a sentence that is split into words and each word is counted. The built-in counter state is used to keep track of the word count in a persistent and consistent manner."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class WordCountFunction implements Function<String, Void> {\n    @Override\n    public Void process(String input, Context context) {\n        Arrays.asList(input.split("\\\\s+")).forEach(word -> context.incrCounter(word, 1));\n        return null;\n    }\n}\n')))}d.isMDXComponent=!0}}]);