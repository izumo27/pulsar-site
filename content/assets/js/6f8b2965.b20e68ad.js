"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),p=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:y,groupId:m,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=y??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:C}=(0,l.U)(),[N,w]=(0,r.useState)(b),K=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=m){const e=v[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=K.indexOf(t),a=g[n].value;a!==N&&(P(t),w(a),null!=m&&C(m,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=K.indexOf(e.currentTarget)+1;n=K[t]??K[0];break}case"ArrowLeft":{const t=K.indexOf(e.currentTarget)-1;n=K[t]??K[K.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},k)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>K.push(e),onKeyDown:R,onClick:E},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function y(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},99029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const s={id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption"},l=void 0,p={unversionedId:"security-encryption",id:"version-2.5.2/security-encryption",title:"Pulsar Encryption",description:"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages.",source:"@site/versioned_docs/version-2.5.2/security-encryption.md",sourceDirName:".",slug:"/security-encryption",permalink:"/docs/2.5.2/security-encryption",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/security-encryption.md",tags:[],version:"2.5.2",frontMatter:{id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption"},sidebar:"version-2.5.2/docsSidebar",previous:{title:"Authorization and ACLs",permalink:"/docs/2.5.2/security-authorization"},next:{title:"Extend Authentication and Authorization",permalink:"/docs/2.5.2/security-extending"}},c={},u=[{value:"Asymmetric and symmetric encryption",id:"asymmetric-and-symmetric-encryption",level:2},{value:"Producer",id:"producer",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Get started",id:"get-started",level:2},{value:"Key rotation",id:"key-rotation",level:2},{value:"Enable encryption at the producer application",id:"enable-encryption-at-the-producer-application",level:2},{value:"Decrypt encrypted messages at the consumer application",id:"decrypt-encrypted-messages-at-the-consumer-application",level:2},{value:"Handle failures",id:"handle-failures",level:2}],d={toc:u};function y(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages."),(0,r.kt)("h2",{id:"asymmetric-and-symmetric-encryption"},"Asymmetric and symmetric encryption"),(0,r.kt)("p",null,"Pulsar uses a dynamically generated symmetric AES key to encrypt messages(data). You can use the application-provided ECDSA (Elliptic Curve Digital Signature Algorithm) or RSA (Rivest\u2013Shamir\u2013Adleman) key pair to encrypt the AES key(data key), so you do not have to share the secret with everyone."),(0,r.kt)("p",null,"Key is a public and private key pair used for encryption or decryption. The producer key is the public key of the key pair, and the consumer key is the private key of the key pair."),(0,r.kt)("p",null,"The application configures the producer with the public key. You can use this key to encrypt the AES data key. The encrypted data key is sent as part of message header. Only entities with the private key (in this case the consumer) are able to decrypt the data key which is used to decrypt the message."),(0,r.kt)("p",null,"You can encrypt a message with more than one key. Any one of the keys used for encrypting the message is sufficient to decrypt the message."),(0,r.kt)("p",null,"Pulsar does not store the encryption key anywhere in the Pulsar service. If you lose or delete the private key, your message is irretrievably lost, and is unrecoverable."),(0,r.kt)("h2",{id:"producer"},"Producer"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:n(26744).Z,title:"Pulsar Encryption Producer",width:"960",height:"540"})),(0,r.kt)("h2",{id:"consumer"},"Consumer"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:n(36869).Z,title:"Pulsar Encryption Consumer",width:"960",height:"540"})),(0,r.kt)("h2",{id:"get-started"},"Get started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create your ECDSA or RSA public and private key pair by using the following commands.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ECDSA\uff08for Java clients only)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pem -out test_ecdsa_pubkey.pem\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RSA (for C++, Python and Node.js clients)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl genrsa -out test_rsa_privkey.pem 2048\nopenssl rsa -in test_rsa_privkey.pem -pubout -outform pkcs8 -out test_rsa_pubkey.pem\n\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the public and private key to the key management and configure your producers to retrieve public keys and consumers clients to retrieve private keys.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," interface, specifically ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader.getPublicKey()")," for producer and ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader.getPrivateKey()")," for consumer, which Pulsar client invokes to load the key.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Add the encryption key name to the producer builder: PulsarClient.newProducer().addEncryptionKey("myapp.key").')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure a ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," to a producer, consumer or reader. "))),(0,r.kt)(o.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\nString topic = "persistent://my-tenant/my-ns/my-topic";\n// RawFileKeyReader is just an example implementation that\'s not provided by Pulsar\nCryptoKeyReader keyReader = new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .cryptoKeyReader(keyReader)\n        .addEncryptionKey("myappkey")\n        .create();\n\nConsumer<byte[]> consumer = pulsarClient.newConsumer()\n        .topic(topic)\n        .subscriptionName("my-subscriber-name")\n        .cryptoKeyReader(keyReader)\n        .subscribe();\n\nReader<byte[]> reader = pulsarClient.newReader()\n        .topic(topic)\n        .startMessageId(MessageId.earliest)\n        .cryptoKeyReader(keyReader)\n        .create();\n\n'))),(0,r.kt)(i.Z,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\nstd::string topic = "persistent://my-tenant/my-ns/my-topic";\n// DefaultCryptoKeyReader is a built-in implementation that reads public key and private key from files\nauto keyReader = std::make_shared<DefaultCryptoKeyReader>("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setCryptoKeyReader(keyReader);\nproducerConf.addEncryptionKey("myappkey");\nclient.createProducer(topic, producerConf, producer);\n\nConsumer consumer;\nConsumerConfiguration consumerConf;\nconsumerConf.setCryptoKeyReader(keyReader);\nclient.subscribe(topic, "my-subscriber-name", consumerConf, consumer);\n\nReader reader;\nReaderConfiguration readerConf;\nreaderConf.setCryptoKeyReader(keyReader);\nclient.createReader(topic, MessageId::earliest(), readerConf, reader);\n\n'))),(0,r.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, CryptoKeyReader\n\nclient = Client('pulsar://localhost:6650')\ntopic = 'persistent://my-tenant/my-ns/my-topic'\n# CryptoKeyReader is a built-in implementation that reads public key and private key from files\nkey_reader = CryptoKeyReader('test_ecdsa_pubkey.pem', 'test_ecdsa_privkey.pem')\n\nproducer = client.create_producer(\n    topic=topic,\n    encryption_key='myappkey',\n    crypto_key_reader=key_reader\n)\n\nconsumer = client.subscribe(\n    topic=topic,\n    subscription_name='my-subscriber-name',\n    crypto_key_reader=key_reader\n)\n\nreader = client.create_reader(\n    topic=topic,\n    start_message_id=MessageId.earliest,\n    crypto_key_reader=key_reader\n)\n\nclient.close()\n\n"))),(0,r.kt)(i.Z,{value:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nodejs"},"\nconst Pulsar = require('pulsar-client');\n\n(async () => {\n// Create a client\nconst client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n    operationTimeoutSeconds: 30,\n});\n\n// Create a producer\nconst producer = await client.createProducer({\n    topic: 'persistent://public/default/my-topic',\n    sendTimeoutMs: 30000,\n    batchingEnabled: true,\n    publicKeyPath: \"public-key.client-rsa.pem\",\n    encryptionKey: \"encryption-key\"\n});\n\n// Create a consumer\nconst consumer = await client.subscribe({\n    topic: 'persistent://public/default/my-topic',\n    subscription: 'sub1',\n    subscriptionType: 'Shared',\n    ackTimeoutMs: 10000,\n    privateKeyPath: \"private-key.client-rsa.pem\"\n});\n\n// Send messages\nfor (let i = 0; i < 10; i += 1) {\n    const msg = `my-message-${i}`;\n    producer.send({\n    data: Buffer.from(msg),\n    });\n    console.log(`Sent message: ${msg}`);\n}\nawait producer.flush();\n\n// Receive messages\nfor (let i = 0; i < 10; i += 1) {\n    const msg = await consumer.receive();\n    console.log(msg.getData().toString());\n    consumer.acknowledge(msg);\n}\n\nawait consumer.close();\nawait producer.close();\nawait client.close();\n})();\n\n")))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Below is an example of a ",(0,r.kt)("strong",{parentName:"li"},"customized")," ",(0,r.kt)("inlineCode",{parentName:"li"},"CryptoKeyReader")," implementation.")),(0,r.kt)(o.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\n'))),(0,r.kt)(i.Z,{value:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"\nclass CustomCryptoKeyReader : public CryptoKeyReader {\n    public:\n    Result getPublicKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                        EncryptionKeyInfo& encKeyInfo) const override {\n        // TODO:\n        return ResultOk;\n    }\n\n    Result getPrivateKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                        EncryptionKeyInfo& encKeyInfo) const override {\n        // TODO:\n        return ResultOk;\n    }\n};\n\nauto keyReader = std::make_shared<CustomCryptoKeyReader>(/* ... */);\n// TODO: create producer, consumer or reader based on keyReader here\n\n")),(0,r.kt)("p",null,"Besides, you can use the ",(0,r.kt)("strong",{parentName:"p"},"default")," implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," by specifying the paths of ",(0,r.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"public key"),".")),(0,r.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,r.kt)("p",null,"Currently, ",(0,r.kt)("strong",{parentName:"p"},"customized")," ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," implementation is not supported in Python. However, you can use the ",(0,r.kt)("strong",{parentName:"p"},"default")," implementation by specifying the path of ",(0,r.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"public key"),".")),(0,r.kt)(i.Z,{value:"Node.js",mdxType:"TabItem"},(0,r.kt)("p",null,"Currently, ",(0,r.kt)("strong",{parentName:"p"},"customized")," ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," implementation is not supported in Node.js. However, you can use the ",(0,r.kt)("strong",{parentName:"p"},"default")," implementation by specifying the path of ",(0,r.kt)("inlineCode",{parentName:"p"},"private key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"public key"),"."))),(0,r.kt)("h2",{id:"key-rotation"},"Key rotation"),(0,r.kt)("p",null,"Pulsar generates a new AES data key every 4 hours or after publishing a certain number of messages. A producer fetches the asymmetric public key every 4 hours by calling CryptoKeyReader.getPublicKey() to retrieve the latest version."),(0,r.kt)("h2",{id:"enable-encryption-at-the-producer-application"},"Enable encryption at the producer application"),(0,r.kt)("p",null,"If you produce messages that are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages. You can do this in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The consumer application provides you access to their public key, which you add to your producer keys."),(0,r.kt)("li",{parentName:"ol"},"You grant access to one of the private keys from the pairs that producer uses. ")),(0,r.kt)("p",null,"When producers want to encrypt the messages with multiple keys, producers add all such keys to the config. Consumer can decrypt the message as long as the consumer has access to at least one of the keys."),(0,r.kt)("p",null,"If you need to encrypt the messages using 2 keys (",(0,r.kt)("inlineCode",{parentName:"p"},"myapp.messagekey1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"myapp.messagekey2"),"), refer to the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient.newProducer().addEncryptionKey("myapp.messagekey1").addEncryptionKey("myapp.messagekey2");\n\n')),(0,r.kt)("h2",{id:"decrypt-encrypted-messages-at-the-consumer-application"},"Decrypt encrypted messages at the consumer application"),(0,r.kt)("p",null,"Consumers require to access one of the private keys to decrypt messages that the producer produces. If you want to receive encrypted messages, create a public or private key and give your public key to the producer application to encrypt messages using your public key."),(0,r.kt)("h2",{id:"handle-failures"},"Handle failures"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Producer/Consumer loses access to the key",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Producer action fails to indicate the cause of the failure. Application has the option to proceed with sending unencrypted messages in such cases. Call ",(0,r.kt)("inlineCode",{parentName:"li"},"PulsarClient.newProducer().cryptoFailureAction(ProducerCryptoFailureAction)")," to control the producer behavior. The default behavior is to fail the request."),(0,r.kt)("li",{parentName:"ul"},"If consumption fails due to decryption failure or missing keys in consumer, the application has the option to consume the encrypted message or discard it. Call ",(0,r.kt)("inlineCode",{parentName:"li"},"PulsarClient.newConsumer().cryptoFailureAction(ConsumerCryptoFailureAction)")," to control the consumer behavior. The default behavior is to fail the request. Application is never able to decrypt the messages if the private key is permanently lost."))),(0,r.kt)("li",{parentName:"ul"},"Batch messaging",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If decryption fails and the message contains batch messages, client is not able to retrieve individual messages in the batch, hence message consumption fails even if cryptoFailureAction() is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"ConsumerCryptoFailureAction.CONSUME"),"."))),(0,r.kt)("li",{parentName:"ul"},"If decryption fails, the message consumption stops and the application notices backlog growth in addition to decryption failure messages in the client log. If the application does not have access to the private key to decrypt the message, the only option is to skip or discard backlogged messages.")))}y.isMDXComponent=!0},36869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar-encryption-consumer-2831a122b5b79a1619d00af823b2506c.jpg"},26744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar-encryption-producer-1d7f4562a5c743e0442a0ec472ca8ef6.jpg"}}]);