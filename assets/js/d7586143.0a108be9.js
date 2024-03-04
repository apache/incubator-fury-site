"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[7072],{7738:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=r(5893),n=r(1151);const a={title:"Java Object Graph Guide",sidebar_position:0,id:"java_object_graph_guide"},t="Java object graph serialization",l={id:"guide/java_object_graph_guide",title:"Java Object Graph Guide",description:"When only java object serialization needed, this mode will have better performance compared to cross-language object",source:"@site/docs/guide/java_object_graph_guide.md",sourceDirName:"guide",slug:"/guide/java_object_graph_guide",permalink:"/docs/guide/java_object_graph_guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Java Object Graph Guide",sidebar_position:0,id:"java_object_graph_guide"},sidebar:"guideSidebar",next:{title:"Row Format Guide",permalink:"/docs/guide/row_format_guide"}},o={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"FuryBuilder  options",id:"furybuilder--options",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Fury creation",id:"fury-creation",level:3},{value:"Smaller size",id:"smaller-size",level:3},{value:"Implement a customized serializer",id:"implement-a-customized-serializer",level:3},{value:"Security &amp; Class Registration",id:"security--class-registration",level:3},{value:"Serializer Registration",id:"serializer-registration",level:3},{value:"Zero-Copy Serialization",id:"zero-copy-serialization",level:3},{value:"Meta Sharing",id:"meta-sharing",level:3},{value:"Deserialize un-exited classes.",id:"deserialize-un-exited-classes",level:3},{value:"Migration",id:"migration",level:2},{value:"JDK migration",id:"jdk-migration",level:3},{value:"Upgrade fury",id:"upgrade-fury",level:3},{value:"Trouble shooting",id:"trouble-shooting",level:2},{value:"Class inconsistency and class version check",id:"class-inconsistency-and-class-version-check",level:3},{value:"Use wrong API for deserialization",id:"use-wrong-api-for-deserialization",level:3}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"java-object-graph-serialization",children:"Java object graph serialization"}),"\n",(0,s.jsx)(i.p,{children:"When only java object serialization needed, this mode will have better performance compared to cross-language object\ngraph serialization."}),"\n",(0,s.jsx)(i.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsxs)(i.p,{children:["Note that fury creation is not cheap, the ",(0,s.jsx)(i.strong,{children:"fury instances should be reused between serializations"})," instead of creating\nit everytime.\nYou should keep fury to a static global variable, or instance variable of some singleton object or limited objects."]}),"\n",(0,s.jsx)(i.p,{children:"Fury for single-thread usage:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"import java.util.List;\nimport java.util.Arrays;\n\nimport org.apache.fury.*;\nimport org.apache.fury.config.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    SomeClass object = new SomeClass();\n    // Note that Fury instances should be reused between\n    // multiple serializations of different objects.\n    Fury fury = Fury.builder().withLanguage(Language.JAVA)\n      // Allow to deserialize objects unknown types, more flexible\n      // but may be insecure if the classes contains malicious code.\n      .requireClassRegistration(true)\n      .build();\n    // Registering types can reduce class name serialization overhead, but not mandatory.\n    // If class registration enabled, all custom types must be registered.\n    fury.register(SomeClass.class);\n    byte[] bytes = fury.serialize(object);\n    System.out.println(fury.deserialize(bytes));\n  }\n}\n"})}),"\n",(0,s.jsx)(i.p,{children:"Fury for multiple-thread usage:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"import java.util.List;\nimport java.util.Arrays;\n\nimport org.apache.fury.*;\nimport org.apache.fury.config.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    SomeClass object = new SomeClass();\n    // Note that Fury instances should be reused between\n    // multiple serializations of different objects.\n    ThreadSafeFury fury = new ThreadLocalFury(classLoader -> {\n      Fury f = Fury.builder().withLanguage(Language.JAVA)\n        .withClassLoader(classLoader).build();\n      f.register(SomeClass.class);\n      return f;\n    });\n    byte[] bytes = fury.serialize(object);\n    System.out.println(fury.deserialize(bytes));\n  }\n}\n"})}),"\n",(0,s.jsx)(i.p,{children:"Fury instances reuse example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"import java.util.List;\nimport java.util.Arrays;\n\nimport org.apache.fury.*;\nimport org.apache.fury.config.*;\n\npublic class Example {\n  // reuse fury.\n  private static final ThreadSafeFury fury = Fury.builder()\n    // Allow to deserialize objects unknown types, more flexible\n    // but may be insecure if the classes contains malicious code.\n    .requireClassRegistration(true)\n    .buildThreadSafeFury();\n\n  public static void main(String[] args) {\n    SomeClass object = new SomeClass();\n    byte[] bytes = fury.serialize(object);\n    System.out.println(fury.deserialize(bytes));\n  }\n}\n"})}),"\n",(0,s.jsx)(i.h2,{id:"furybuilder--options",children:"FuryBuilder  options"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Option Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default Value"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"timeRefIgnored"})}),(0,s.jsxs)(i.td,{children:["Whether to ignore reference tracking of all time types registered in ",(0,s.jsx)(i.code,{children:"TimeSerializers"})," and subclasses of those types when ref tracking is enabled. If ignored, ref tracking of every time type can be enabled by invoking ",(0,s.jsx)(i.code,{children:"Fury#registerSerializer(Class, Serializer)"}),". For example, ",(0,s.jsx)(i.code,{children:"fury.registerSerializer(Date.class, new DateSerializer(fury, true))"}),". Note that enabling ref tracking should happen before serializer codegen of any types which contain time fields. Otherwise, those fields will still skip ref tracking."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"compressInt"})}),(0,s.jsx)(i.td,{children:"Enables or disables int compression for smaller size."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"compressLong"})}),(0,s.jsx)(i.td,{children:"Enables or disables long compression for smaller size."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"compressString"})}),(0,s.jsx)(i.td,{children:"Enables or disables string compression for smaller size."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"classLoader"})}),(0,s.jsxs)(i.td,{children:["The classloader should not be updated; Fury caches class metadata. Use ",(0,s.jsx)(i.code,{children:"LoaderBinding"})," or ",(0,s.jsx)(i.code,{children:"ThreadSafeFury"})," for classloader updates."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Thread.currentThread().getContextClassLoader()"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"compatibleMode"})}),(0,s.jsxs)(i.td,{children:["Type forward/backward compatibility config. Also Related to ",(0,s.jsx)(i.code,{children:"checkClassVersion"})," config. ",(0,s.jsx)(i.code,{children:"SCHEMA_CONSISTENT"}),": Class schema must be consistent between serialization peer and deserialization peer. ",(0,s.jsx)(i.code,{children:"COMPATIBLE"}),": Class schema can be different between serialization peer and deserialization peer. They can add/delete fields independently."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"CompatibleMode.SCHEMA_CONSISTENT"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"checkClassVersion"})}),(0,s.jsxs)(i.td,{children:["Determines whether to check the consistency of the class schema. If enabled, Fury checks, writes, and checks consistency using the ",(0,s.jsx)(i.code,{children:"classVersionHash"}),". It will be automatically disabled when ",(0,s.jsx)(i.code,{children:"CompatibleMode#COMPATIBLE"})," is enabled. Disabling is not recommended unless you can ensure the class won't evolve."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"checkJdkClassSerializable"})}),(0,s.jsxs)(i.td,{children:["Enables or disables checking of ",(0,s.jsx)(i.code,{children:"Serializable"})," interface for classes under ",(0,s.jsx)(i.code,{children:"java.*"}),". If a class under ",(0,s.jsx)(i.code,{children:"java.*"})," is not ",(0,s.jsx)(i.code,{children:"Serializable"}),", Fury will throw an ",(0,s.jsx)(i.code,{children:"UnsupportedOperationException"}),"."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"registerGuavaTypes"})}),(0,s.jsxs)(i.td,{children:["Whether to pre-register Guava types such as ",(0,s.jsx)(i.code,{children:"RegularImmutableMap"}),"/",(0,s.jsx)(i.code,{children:"RegularImmutableList"}),". These types are not public API, but seem pretty stable."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"requireClassRegistration"})}),(0,s.jsx)(i.td,{children:"Disabling may allow unknown classes to be deserialized, potentially causing security risks."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"suppressClassRegistrationWarnings"})}),(0,s.jsxs)(i.td,{children:["Whether to suppress class registration warnings when class registration is disabled. The warnings can be used for security audit, but may be annoying. When ",(0,s.jsx)(i.code,{children:"requireClassRegistration=false"}),", this suppression will be enabled by default."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"!requireClassRegistration"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"shareMetaContext"})}),(0,s.jsx)(i.td,{children:"Enables or disables meta share mode."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"deserializeUnexistedClass"})}),(0,s.jsx)(i.td,{children:"Enables or disables deserialization/skipping of data for non-existent classes."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"codeGenEnabled"})}),(0,s.jsx)(i.td,{children:"Disabling may result in faster initial serialization but slower subsequent serializations."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"asyncCompilationEnabled"})}),(0,s.jsx)(i.td,{children:"If enabled, serialization uses interpreter mode first and switches to JIT serialization after async serializer JIT for a class is finished."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"scalaOptimizationEnabled"})}),(0,s.jsx)(i.td,{children:"Enables or disables Scala-specific serialization optimization."}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,s.jsx)(i.h3,{id:"fury-creation",children:"Fury creation"}),"\n",(0,s.jsx)(i.p,{children:"Single thread fury:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"Fury fury = Fury.builder()\n  .withLanguage(Language.JAVA)\n  // enable reference tracking for shared/circular reference.\n  // Disable it will have better performance if no duplicate reference.\n  .withRefTracking(false)\n  .withCompatibleMode(CompatibleMode.SCHEMA_CONSISTENT)\n  // enable type forward/backward compatibility\n  // disable it for small size and better performance.\n  // .withCompatibleMode(CompatibleMode.COMPATIBLE)\n  // enable async multi-threaded compilation.\n  .withAsyncCompilation(true)\n  .build();\n  byte[] bytes = fury.serialize(object);\n  System.out.println(fury.deserialize(bytes));\n"})}),"\n",(0,s.jsx)(i.p,{children:"Thread-safe fury:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"ThreadSafeFury fury = Fury.builder()\n  .withLanguage(Language.JAVA)\n  // enable reference tracking for shared/circular reference.\n  // Disable it will have better performance if no duplicate reference.\n  .withRefTracking(false)\n  // compress int for smaller size\n  // .withIntCompressed(true)\n  // compress long for smaller size\n  // .withLongCompressed(true)\n  .withCompatibleMode(CompatibleMode.SCHEMA_CONSISTENT)\n  // enable type forward/backward compatibility\n  // disable it for small size and better performance.\n  // .withCompatibleMode(CompatibleMode.COMPATIBLE)\n  // enable async multi-threaded compilation.\n  .withAsyncCompilation(true)\n  .buildThreadSafeFury();\n  byte[] bytes = fury.serialize(object);\n  System.out.println(fury.deserialize(bytes));\n"})}),"\n",(0,s.jsx)(i.h3,{id:"smaller-size",children:"Smaller size"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"FuryBuilder#withIntCompressed"}),"/",(0,s.jsx)(i.code,{children:"FuryBuilder#withLongCompressed"})," can be used to compress int/long for smaller size.\nNormally compress int is enough."]}),"\n",(0,s.jsx)(i.p,{children:"Both compression are enabled by default, if the serialized is not important, for example, you use flatbuffers for\nserialization before, which doesn't compress anything, then you should disable compression. If your data are all numbers,\nthe compression may bring 80% performance regression."}),"\n",(0,s.jsx)(i.p,{children:"For int compression, fury use 1~5 bytes for encoding. First bit in every byte indicate whether has next byte. if first bit is set, then next byte will be read util first bit of next byte is unset."}),"\n",(0,s.jsx)(i.p,{children:"For long compression, fury support two encoding:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Fury SLI(Small long as int) Encoding (",(0,s.jsx)(i.strong,{children:"used by default"}),"):","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If long is in [-1073741824, 1073741823], encode as 4 bytes int: ",(0,s.jsx)(i.code,{children:"| little-endian: ((int) value) << 1 |"})]}),"\n",(0,s.jsxs)(i.li,{children:["Otherwise write as 9 bytes: ",(0,s.jsx)(i.code,{children:"| 0b1 | little-endian 8bytes long |"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Fury PVL(Progressive Variable-length Long) Encoding:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"First bit in every byte indicate whether has next byte. if first bit is set, then next byte will be read util first bit of next byte is unset."}),"\n",(0,s.jsxs)(i.li,{children:["Negative number will be converted to positive number by ",(0,s.jsx)(i.code,{children:" (v << 1) ^ (v >> 63)"})," to reduce cost of small negative numbers."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If a number are ",(0,s.jsx)(i.code,{children:"long"})," type, it can't be represented by smaller bytes mostly, the compression won't get good enough result,\nnot worthy compared to performance cost. Maybe you should try to disable long compression if you find it didn't bring much\nspace savings."]}),"\n",(0,s.jsx)(i.h3,{id:"implement-a-customized-serializer",children:"Implement a customized serializer"}),"\n",(0,s.jsxs)(i.p,{children:["In some cases, you may want to implement a serializer for your type, especially some class customize serialization by JDK\nwriteObject/writeReplace/readObject/readResolve, which is very inefficient. For example, you don't want following ",(0,s.jsx)(i.code,{children:"Foo#writeObject"}),"\ngot invoked, you can take following ",(0,s.jsx)(i.code,{children:"FooSerializer"})," as an example:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"class Foo {\n  public long f1;\n  private void writeObject(ObjectOutputStream s) throws IOException {\n    System.out.println(f1);\n    s.defaultWriteObject();\n  }\n}\n\nclass FooSerializer extends Serializer<Foo> {\n  public FooSerializer(Fury fury) {\n    super(fury, Foo.class);\n  }\n\n  @Override\n  public void write(MemoryBuffer buffer, Foo value) {\n    buffer.writeLong(value.f1);\n  }\n\n  @Override\n  public Foo read(MemoryBuffer buffer) {\n    Foo foo = new Foo();\n    foo.f1 = buffer.readLong();\n    return foo;\n  }\n}\n"})}),"\n",(0,s.jsx)(i.p,{children:"Register serializer:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"Fury fury = getFury();\nfury.registerSerializer(Foo.class, new FooSerializer(fury));\n"})}),"\n",(0,s.jsx)(i.h3,{id:"security--class-registration",children:"Security & Class Registration"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"FuryBuilder#requireClassRegistration"})," can be used to disable class registration, this will allow to deserialize objects\nunknown types,\nmore flexible but ",(0,s.jsx)(i.strong,{children:"may be insecure if the classes contains malicious code"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Do not disable class registration unless you can ensure your environment is secure"}),".\nMalicious code in ",(0,s.jsx)(i.code,{children:"init/equals/hashCode"})," can be executed when deserializing unknown/untrusted types when this option\ndisabled."]}),"\n",(0,s.jsx)(i.p,{children:"Class registration can not only reduce security risks, but also avoid classname serialization cost."}),"\n",(0,s.jsxs)(i.p,{children:["You can register class with API ",(0,s.jsx)(i.code,{children:"Fury#register"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Note that class registration order is important, serialization and deserialization peer\nshould have same registration order."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"Fury fury = xxx;\nfury.register(SomeClass.class);\nfury.register(SomeClass1.class, 200);\n"})}),"\n",(0,s.jsxs)(i.p,{children:["If you invoke ",(0,s.jsx)(i.code,{children:"FuryBuilder#requireClassRegistration(false)"})," to disable class registration check,\nyou can set ",(0,s.jsx)(i.code,{children:"org.apache.fury.resolver.ClassChecker"})," by ",(0,s.jsx)(i.code,{children:"ClassResolver#setClassChecker"})," to control which classes are allowed\nfor serialization. For example, you can allow classes started with ",(0,s.jsx)(i.code,{children:"org.example.*"})," by:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:'Fury fury = xxx;\nfury.getClassResolver().setClassChecker((classResolver, className) -> className.startsWith("org.example."));\n'})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:'AllowListChecker checker = new AllowListChecker(AllowListChecker.CheckLevel.STRICT);\nThreadSafeFury fury = new ThreadLocalFury(classLoader -> {\n  Fury f = Fury.builder().requireClassRegistration(true).withClassLoader(classLoader).build();\n  f.getClassResolver().setClassChecker(checker);\n  checker.addListener(f.getClassResolver());\n  return f;\n});\nchecker.allowClass("org.example.*");\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Fury also provided a ",(0,s.jsx)(i.code,{children:"org.apache.fury.resolver.AllowListChecker"})," which is white/blacklist based checker to simplify\nthe customization of class check mechanism. You can use this checker or implement more sophisticated checker by yourself."]}),"\n",(0,s.jsx)(i.h3,{id:"serializer-registration",children:"Serializer Registration"}),"\n",(0,s.jsxs)(i.p,{children:["You can also register a custom serializer for a class by ",(0,s.jsx)(i.code,{children:"Fury#registerSerializer"})," API."]}),"\n",(0,s.jsxs)(i.p,{children:["Or implement ",(0,s.jsx)(i.code,{children:"java.io.Externalizable"})," for a class."]}),"\n",(0,s.jsx)(i.h3,{id:"zero-copy-serialization",children:"Zero-Copy Serialization"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:'import org.apache.fury.*;\nimport org.apache.fury.config.*;\nimport org.apache.fury.serializers.BufferObject;\nimport org.apache.fury.memory.MemoryBuffer;\n\nimport java.util.*;\nimport java.util.stream.Collectors;\n\npublic class ZeroCopyExample {\n  // Note that fury instance should be reused instead of creation every time.\n  static Fury fury = Fury.builder()\n    .withLanguage(Language.JAVA)\n    .build();\n\n  // mvn exec:java -Dexec.mainClass="io.ray.fury.examples.ZeroCopyExample"\n  public static void main(String[] args) {\n    List<Object> list = Arrays.asList("str", new byte[1000], new int[100], new double[100]);\n    Collection<BufferObject> bufferObjects = new ArrayList<>();\n    byte[] bytes = fury.serialize(list, e -> !bufferObjects.add(e));\n    List<MemoryBuffer> buffers = bufferObjects.stream()\n      .map(BufferObject::toBuffer).collect(Collectors.toList());\n    System.out.println(fury.deserialize(bytes, buffers));\n  }\n}\n'})}),"\n",(0,s.jsx)(i.h3,{id:"meta-sharing",children:"Meta Sharing"}),"\n",(0,s.jsx)(i.p,{children:"Fury supports share type metadata (class name, field name, final field type information, etc.) between multiple\nserializations in a context (ex. TCP connection), and this information will be sent to the peer during the first\nserialization in the context. Based on this metadata, the peer can rebuild the same deserializer, which avoids\ntransmitting metadata for subsequent serializations and reduces network traffic pressure and supports type\nforward/backward compatibility automatically."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"// Fury.builder()\n//   .withLanguage(Language.JAVA)\n//   .withRefTracking(false)\n//   // share meta across serialization.\n//   .withMetaContextShare(true)\n// Not thread-safe fury.\nMetaContext context = xxx;\nfury.getSerializationContext().setMetaContext(context);\nbyte[] bytes = fury.serialize(o);\n// Not thread-safe fury.\nMetaContext context = xxx;\nfury.getSerializationContext().setMetaContext(context);\nfury.deserialize(bytes)\n\n// Thread-safe fury\nfury.setClassLoader(beanA.getClass().getClassLoader());\nbyte[] serialized = fury.execute(\n  f -> {\n    f.getSerializationContext().setMetaContext(context);\n    return f.serialize(beanA);\n  }\n);\n// thread-safe fury\nfury.setClassLoader(beanA.getClass().getClassLoader());\nObject newObj = fury.execute(\n  f -> {\n    f.getSerializationContext().setMetaContext(context);\n    return f.deserialize(serialized);\n  }\n);\n"})}),"\n",(0,s.jsx)(i.h3,{id:"deserialize-un-exited-classes",children:"Deserialize un-exited classes."}),"\n",(0,s.jsxs)(i.p,{children:["Fury support deserializing unexisted classes, this feature can be enabled\nby ",(0,s.jsx)(i.code,{children:"FuryBuilder#deserializeUnexistedClass(true)"}),". When enabled, and metadata sharing enabled, Fury will store\nthe deserialized data of this type in a lazy subclass of Map. By using the lazy map implemented by Fury, the rebalance\ncost of filling map during deserialization can be avoided, which further improves performance. If this data is sent to\nanother process and the class exists in this process, the data will be deserialized into the object of this type without\nlosing any information."]}),"\n",(0,s.jsxs)(i.p,{children:["If metadata sharing is not enabled, the new class data will be skipped and an ",(0,s.jsx)(i.code,{children:"UnexistedSkipClass"})," stub object will be\nreturned."]}),"\n",(0,s.jsx)(i.h2,{id:"migration",children:"Migration"}),"\n",(0,s.jsx)(i.h3,{id:"jdk-migration",children:"JDK migration"}),"\n",(0,s.jsxs)(i.p,{children:["If you use jdk serialization before, and you can't upgrade your client and server at the same time, which is common for\nonline application. Fury provided an util method ",(0,s.jsx)(i.code,{children:"org.apache.fury.serializer.JavaSerializer.serializedByJDK"})," to check whether\nthe binary are generated by jdk serialization, you use following pattern to make exiting serialization protocol-aware,\nthen upgrade serialization to fury in an async rolling-up way:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"if (JavaSerializer.serializedByJDK(bytes)) {\n  ObjectInputStream objectInputStream = xxx;\n  return objectInputStream.readObject();\n} else {\n  return fury.deserialize(bytes);\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"upgrade-fury",children:"Upgrade fury"}),"\n",(0,s.jsxs)(i.p,{children:["Currently binary compatibility is ensured for minor versions only. For example, if you are using fury",(0,s.jsx)(i.code,{children:"v0.2.0"}),", binary compatibility will\nbe provided if you upgrade to fury ",(0,s.jsx)(i.code,{children:"v0.2.1"}),". But if upgrade to fury ",(0,s.jsx)(i.code,{children:"v0.4.1"}),", no  binary compatibility are ensured.\nMost of the time there is no need to upgrade fury to newer major version, the current version is fast and compact enough,\nand we provide some minor fix for recent older versions."]}),"\n",(0,s.jsx)(i.p,{children:"But if you do want to upgrade fury for better performance and smaller size, you need to write fury version as header to serialized data\nusing code like following to keep binary compatibility:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"MemoryBuffer buffer = xxx;\nbuffer.writeVarInt(2);\nfury.serialize(buffer, obj);\n"})}),"\n",(0,s.jsx)(i.p,{children:"Then for deserialization, you need:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"MemoryBuffer buffer = xxx;\nint furyVersion = buffer.readVarInt()\nFury fury = getFury(furyVersion);\nfury.deserialize(buffer);\n"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"getFury"})," is a method to load corresponding fury, you can shade and relocate different version of fury to different\npackage, and load fury by version."]}),"\n",(0,s.jsxs)(i.p,{children:["If you upgrade fury by minor version, or you won't have data serialized by older fury, you can upgrade fury directly,\nno need to ",(0,s.jsx)(i.code,{children:"versioning"})," the data."]}),"\n",(0,s.jsx)(i.h2,{id:"trouble-shooting",children:"Trouble shooting"}),"\n",(0,s.jsx)(i.h3,{id:"class-inconsistency-and-class-version-check",children:"Class inconsistency and class version check"}),"\n",(0,s.jsxs)(i.p,{children:["If you create fury without setting ",(0,s.jsx)(i.code,{children:"CompatibleMode"})," to ",(0,s.jsx)(i.code,{children:"org.apache.fury.config.CompatibleMode.COMPATIBLE"}),", and you got a strange\nserialization error, it may be caused by class inconsistency between serialization peer and deserialization peer."]}),"\n",(0,s.jsxs)(i.p,{children:["In such cases, you can invoke ",(0,s.jsx)(i.code,{children:"FuryBuilder#withClassVersionCheck"})," to create fury to validate it, if deserialization throws ",(0,s.jsx)(i.code,{children:"org.apache.fury.exception.ClassNotCompatibleException"}),", it shows class are inconsistent, and you should create fury with\n",(0,s.jsx)(i.code,{children:"FuryBuilder#withCompaibleMode(CompatibleMode.COMPATIBLE)"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"CompatibleMode.COMPATIBLE"})," has more performance and space cost, do not set it by default if your classes are always consistent between serialization and deserialization."]}),"\n",(0,s.jsx)(i.h3,{id:"use-wrong-api-for-deserialization",children:"Use wrong API for deserialization"}),"\n",(0,s.jsxs)(i.p,{children:["If you serialize an object by invoking ",(0,s.jsx)(i.code,{children:"Fury#serialize"}),", you should invoke ",(0,s.jsx)(i.code,{children:"Fury#deserialize"})," for deserialization instead of\n",(0,s.jsx)(i.code,{children:"Fury#deserializeJavaObject"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If you serialize an object by invoking ",(0,s.jsx)(i.code,{children:"Fury#serializeJavaObject"}),", you should invoke ",(0,s.jsx)(i.code,{children:"Fury#deserializeJavaObject"})," for deserialization instead of ",(0,s.jsx)(i.code,{children:"Fury#deserializeJavaObjectAndClass"}),"/",(0,s.jsx)(i.code,{children:"Fury#deserialize"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If you serialize an object by invoking ",(0,s.jsx)(i.code,{children:"Fury#serializeJavaObjectAndClass"}),", you should invoke ",(0,s.jsx)(i.code,{children:"Fury#deserializeJavaObjectAndClass"})," for deserialization instead of ",(0,s.jsx)(i.code,{children:"Fury#deserializeJavaObject"}),"/",(0,s.jsx)(i.code,{children:"Fury#deserialize"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,i,r)=>{r.d(i,{Z:()=>l,a:()=>t});var s=r(7294);const n={},a=s.createContext(n);function t(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);