"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2845],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(a),h=o,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||n;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23189:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],c={id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"},s=void 0,l={unversionedId:"develop-schema",id:"version-2.9.1/develop-schema",title:"Custom schema storage",description:"By default, Pulsar stores data type schemas in Apache BookKeeper (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation.",source:"@site/versioned_docs/version-2.9.1/develop-schema.md",sourceDirName:".",slug:"/develop-schema",permalink:"/docs/develop-schema",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/develop-schema.md",tags:[],version:"2.9.1",frontMatter:{id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Binary protocol",permalink:"/docs/develop-binary-protocol"},next:{title:"Modular load manager",permalink:"/docs/develop-load-manager"}},m=[{value:"SchemaStorage interface",id:"schemastorage-interface",children:[],level:2},{value:"SchemaStorageFactory interface",id:"schemastoragefactory-interface",children:[],level:2},{value:"Deployment",id:"deployment",children:[],level:2}],p={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"By default, Pulsar stores data type ",(0,n.kt)("a",{parentName:"p",href:"concepts-schema-registry"},"schemas")," in ",(0,n.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation."),(0,n.kt)("p",null,"In order to use a non-default (i.e. non-BookKeeper) storage system for Pulsar schemas, you need to implement two Java interfaces: ",(0,n.kt)("a",{parentName:"p",href:"#schemastorage-interface"},(0,n.kt)("inlineCode",{parentName:"a"},"SchemaStorage"))," and ",(0,n.kt)("a",{parentName:"p",href:"#schemastoragefactory-interface"},(0,n.kt)("inlineCode",{parentName:"a"},"SchemaStorageFactory")),"."),(0,n.kt)("h2",{id:"schemastorage-interface"},"SchemaStorage interface"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"SchemaStorage")," interface has the following methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\npublic interface SchemaStorage {\n    // How schemas are updated\n    CompletableFuture<SchemaVersion> put(String key, byte[] value, byte[] hash);\n\n    // How schemas are fetched from storage\n    CompletableFuture<StoredSchema> get(String key, SchemaVersion version);\n\n    // How schemas are deleted\n    CompletableFuture<SchemaVersion> delete(String key);\n\n    // Utility method for converting a schema version byte array to a SchemaVersion object\n    SchemaVersion versionFromBytes(byte[] version);\n\n    // Startup behavior for the schema storage client\n    void start() throws Exception;\n\n    // Shutdown behavior for the schema storage client\n    void close() throws Exception;\n}\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For a full-fledged example schema storage implementation, see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorage.java"},(0,n.kt)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorage"))," class.")),(0,n.kt)("h2",{id:"schemastoragefactory-interface"},"SchemaStorageFactory interface"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\npublic interface SchemaStorageFactory {\n    @NotNull\n    SchemaStorage create(PulsarService pulsar) throws Exception;\n}\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For a full-fledged example schema storage factory implementation, see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorageFactory.java"},(0,n.kt)("inlineCode",{parentName:"a"},"BookKeeperSchemaStorageFactory"))," class.")),(0,n.kt)("h2",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"In order to use your custom schema storage implementation, you'll need to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Package the implementation in a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html"},"JAR")," file."),(0,n.kt)("li",{parentName:"ol"},"Add that jar to the ",(0,n.kt)("inlineCode",{parentName:"li"},"lib")," folder in your Pulsar ",(0,n.kt)("a",{parentName:"li",href:"getting-started-standalone.md#installing-pulsar"},"binary or source distribution"),"."),(0,n.kt)("li",{parentName:"ol"},"Change the ",(0,n.kt)("inlineCode",{parentName:"li"},"schemaRegistryStorageClassName")," configuration in ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference-configuration#broker"},(0,n.kt)("inlineCode",{parentName:"a"},"broker.conf"))," to your custom factory class (i.e. the ",(0,n.kt)("inlineCode",{parentName:"li"},"SchemaStorageFactory")," implementation, not the ",(0,n.kt)("inlineCode",{parentName:"li"},"SchemaStorage")," implementation)."),(0,n.kt)("li",{parentName:"ol"},"Start up Pulsar.")))}u.isMDXComponent=!0}}]);