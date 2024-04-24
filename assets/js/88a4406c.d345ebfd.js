"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[2766],{5107:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=n(5893),r=n(1151);const t={slug:"fury_blazing_fast_multiple_language_serialization_framework",title:"Fury - A blazing fast multi-language serialization framework powered by jit and zero-copy",authors:["chaokunyang"],tags:["fury"]},s="Fury - A blazing fast multi-language serialization framework powered by jit and zero-copy",o={permalink:"/blog/fury_blazing_fast_multiple_language_serialization_framework",source:"@site/blog/2023-07-15-fury_blazing_fast_multiple_language_serialization_framework.md",title:"Fury - A blazing fast multi-language serialization framework powered by jit and zero-copy",description:"Fury is a multi-language serialization framework powered by JIT dynamic compilation and zero copy. It supports Java/Python/Golang/JavaScript/Rust/C++, provide automatic multi-language objects serialization features, and 170x speedup compared to JDK serialization.",date:"2023-07-15T00:00:00.000Z",formattedDate:"July 15, 2023",tags:[{label:"fury",permalink:"/blog/tags/fury"}],readingTime:11.45,hasTruncateMarker:!0,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_blazing_fast_multiple_language_serialization_framework",title:"Fury - A blazing fast multi-language serialization framework powered by jit and zero-copy",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury v0.1.0 released",permalink:"/blog/fury_0_1_0_release"}},l={authorsImageUrls:[void 0]},c=[{value:"Serialization Primitives",id:"serialization-primitives",level:2},{value:"Zero-Copy Serialization",id:"zero-copy-serialization",level:2},{value:"JIT dynamic compilation acceleration",id:"jit-dynamic-compilation-acceleration",level:2},{value:"Static code generation",id:"static-code-generation",level:2},{value:"Cache optimization",id:"cache-optimization",level:2},{value:"Java serialization",id:"java-serialization",level:2},{value:"Cross-language object graph serialization",id:"cross-language-object-graph-serialization",level:2},{value:"Row-format",id:"row-format",level:2}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Fury is a multi-language serialization framework powered by JIT dynamic compilation and zero copy. It supports Java/Python/Golang/JavaScript/Rust/C++, provide automatic multi-language objects serialization features, and 170x speedup compared to JDK serialization."}),"\n",(0,a.jsxs)(i.p,{children:["Author: ",(0,a.jsx)(i.a,{href:"https://github.com/chaokunyang",children:"chaokunyang"})]}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsxs)(i.p,{children:["Fury is a blazing fast ",(0,a.jsx)(i.strong,{children:"multi-language serialization"})," framework powered by ",(0,a.jsx)(i.strong,{children:"jit(just-in-time compilation) and\nzero-copy"}),", providing up to ",(0,a.jsx)(i.strong,{children:"170x performance"})," and ultimate ",(0,a.jsx)(i.strong,{children:"ease of use"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["The GitHub address of fury repository is: ",(0,a.jsx)(i.a,{href:"https://github.com/alipay/fury",children:"https://github.com/alipay/fury"})]}),"\n",(0,a.jsx)("img",{alt:"fury banner",src:"/img/fury_banner.png"}),"\n",(0,a.jsx)(i.h1,{id:"background",children:"Background"}),"\n",(0,a.jsxs)(i.p,{children:["Serialization is a basic component of system communication, and widely used in big data, AI framework, cloud native and\nother distributed systems.\n",(0,a.jsx)(i.strong,{children:"Data transfer between processes/languages/nodes, or object persistence, state read/write and\ncopy"})," all need serialization.\nThe performance and ease-of-use of serialization affects ",(0,a.jsx)(i.strong,{children:"runtime and development efficiency"})," of the system."]}),"\n",(0,a.jsxs)(i.p,{children:["Static serialization frameworks\nlike ",(0,a.jsx)(i.a,{href:"https://github.com/protocolbuffers/protobuf",children:"protobuf"}),"/",(0,a.jsx)(i.a,{href:"https://github.com/google/flatbuffers",children:"flatbuffers"}),"\ncan't be used for cross-language ",(0,a.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Domain-driven_design",children:"application development"})," directly,\nbecause they ",(0,a.jsx)(i.strong,{children:"don't support shared reference and polymorphism"}),", and also need to ",(0,a.jsx)(i.strong,{children:"generate code ahead"}),".\nDynamic serialization frameworks such as JDK serialization, Kryo, Fst, Hessian, Pickle provide ease-of-use and dynamics,\nbut ",(0,a.jsx)(i.strong,{children:"don't support cross-language"})," and suffer significant ",(0,a.jsx)(i.strong,{children:"performance issues"}),",\nwhich is unsuitable for high throughput, low latency, and large-scale data transfer scenarios."]}),"\n",(0,a.jsxs)(i.p,{children:["Therefore, we developed a new multi-language serialization framework ",(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.a,{href:"https://github.com/alipay/fury",children:"Fury"})}),", which is\nnow open-sourced on ",(0,a.jsx)(i.a,{href:"https://github.com/alipay/fury",children:"https://github.com/alipay/fury"}),". Through ",(0,a.jsx)(i.strong,{children:"highly optimized serialization primitives, JIT dynamic compilation and Zero-Copy"})," technologies,\nFury is both fast and easy to use. It can ",(0,a.jsx)(i.strong,{children:"cross-language serialize any object automatically"})," and provides ",(0,a.jsx)(i.strong,{children:"ultimate performance"})," at the same time."]}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{width:"44%",alt:"serialization",src:"/img/case1.png"}),(0,a.jsx)("img",{width:"44%",alt:"deserialization",src:"/img/case2.png"})]}),"\n",(0,a.jsx)(i.h1,{id:"what-is-fury",children:"What is Fury"}),"\n",(0,a.jsx)(i.p,{children:"Fury is a multi-language serialization framework powered by JIT dynamic compilation and zero copy, providing blazing\nfast speed and ease of use:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Multiple languages"}),": Java/Python/C++/Golang/JavaScript/Rust, other languages can be added easily."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Highly optimized serialization primitives"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Zero-Copy"}),": support ",(0,a.jsx)(i.a,{href:"https://peps.python.org/pep-0574/",children:"out-of-band"})," serialization and off-heap read/write."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"High performance"}),": Use JIT(just-in-time) to generate serialization code at runtime in an async multithreaded way,\nwhich can optimize methods inlining, code cache, dead code elimination, hash lookup, meta writing and memory\nread/writing."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Multi protocols"}),": providing flexibility and ease-of-use of dynamic serialization, as well as the cross-language of\nstatic serialization.","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Java Serialization"}),":","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Drop-in replaces ",(0,a.jsx)(i.code,{children:"JDK/Kryo/Hessian"}),", no need to modify user code, but providing 170x speed up at most, which can\nimprove efficiency of rpc, data transfer and object persistence significantly."]}),"\n",(0,a.jsxs)(i.li,{children:["100% JDK compatible, support JDK custom serialization\nmethods ",(0,a.jsx)(i.code,{children:"writeObject/readObject/writeReplace/readResolve/readObjectNoData"})," natively."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Cross-language object graph"}),":","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Cross-language serialize any objects automatically, no need for IDL, schema compilation, and object/protocol\nconversion."}),"\n",(0,a.jsx)(i.li,{children:"Cross-language serialize shared/circular reference, no data duplication or recursion error."}),"\n",(0,a.jsx)(i.li,{children:"Support object polymorphism, multiple children type objects can be serialized simultaneously."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Row format"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"A cache-friendly binary random-access format, supports skipping deserialization and lazy deserialization,\nefficient\nfor high-performance computing and large-scale data transfer."}),"\n",(0,a.jsx)(i.li,{children:"Support automatic conversion to apache arrow."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h1,{id:"core-serialization-capabilities",children:"Core Serialization Capabilities"}),"\n",(0,a.jsxs)(i.p,{children:["Although different scenarios require different serialization protocols, the underlying operations of serialization are\nsimilar.\nTherefore, Fury defines and implements ",(0,a.jsx)(i.strong,{children:"a set of basic serialization capabilities"}),",\nwhich can be used for quickly building new multi-language serialization protocols\nand get speedup by jit acceleration and other optimizations.\nAt the same time, performance optimization for a protocol on the primitives can also benefit all other protocols."]}),"\n",(0,a.jsx)(i.h2,{id:"serialization-primitives",children:"Serialization Primitives"}),"\n",(0,a.jsx)(i.p,{children:"Common serialization operations contains:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"bitmap operations"}),"\n",(0,a.jsx)(i.li,{children:"number encoding/decoding"}),"\n",(0,a.jsx)(i.li,{children:"int/long compression"}),"\n",(0,a.jsx)(i.li,{children:"String creation/copy"}),"\n",(0,a.jsx)(i.li,{children:"String encoding: ASCII/UTF8/UTF16"}),"\n",(0,a.jsx)(i.li,{children:"memory copy"}),"\n",(0,a.jsx)(i.li,{children:"array copy&compression"}),"\n",(0,a.jsx)(i.li,{children:"meta encoding&compression&cache"}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Fury use SIMD and other advanced language features to make basic operations extremely fast in every languages."}),"\n",(0,a.jsx)(i.h2,{id:"zero-copy-serialization",children:"Zero-Copy Serialization"}),"\n",(0,a.jsxs)(i.p,{children:["Large-scale data transfer often has multiple binary buffers in an object graph. Some serialization frameworks\nwill write the binaries into an intermediate buffer and introduce multiple time-consuming memory\ncopies. Fury implemented an ",(0,a.jsx)(i.strong,{children:"out-of-band serialization protocol"})," inspired by ",(0,a.jsx)(i.a,{href:"https://peps.python.org/pep-0574/",children:"pickle5"}),",\nray and arrow, which can\n",(0,a.jsx)(i.strong,{children:"capture all binary buffers"})," in an object graph to avoid intermediate copies of these buffers.\nThe following figure shows the serialization process of zero-copy:"]}),"\n",(0,a.jsx)("img",{alt:"fury zero copy",src:"/img/fury_zero_copy.jpeg"}),"\n",(0,a.jsx)(i.p,{children:"Currently, Fury supports the following types of zero-copy:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["java: all basic types of arrays, ",(0,a.jsx)(i.code,{children:"ByteBuffer"}),", ",(0,a.jsx)(i.code,{children:"ArrowRecordBatch"}),", and ",(0,a.jsx)(i.code,{children:"VectorSchemaRoot"})]}),"\n",(0,a.jsxs)(i.li,{children:["python: all arrays of the array module, numpy arrays, ",(0,a.jsx)(i.code,{children:"pyarrow.Table,"})," and ",(0,a.jsx)(i.code,{children:"pyarrow.RecordBatch"})]}),"\n",(0,a.jsxs)(i.li,{children:["golang",":byte"," slice"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"You can also add the new zero copy type based on the Fury interface."}),"\n",(0,a.jsx)(i.h2,{id:"jit-dynamic-compilation-acceleration",children:"JIT dynamic compilation acceleration"}),"\n",(0,a.jsx)(i.p,{children:"Custom type objects usually contain lots of type information, Fury used this information to generate\nefficient serialization code at runtime, which can push lots of runtime operations into the dynamic compilation\nstage. By inlining more methods, better code cache, reducing virtual method calls, conditional branches, hash lookup,\nmetadata writes, and memory reads/writes, the serialization performance is greatly accelerated."}),"\n",(0,a.jsxs)(i.p,{children:["For Java, Fury implements a ",(0,a.jsx)(i.strong,{children:"runtime codegen framework"})," and defines\nan ",(0,a.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Intermediate_representation",children:"operator expression IR"}),".\nThen fury can perform type inference based\non the generic type information of the object at runtime to build an expression tree\nthat describes the logic of serialized code.\nThe codegen framework will generate efficient Java code from the expression tree, then pass\nto ",(0,a.jsx)(i.a,{href:"https://github.com/janino-compiler/janino",children:"Janino"})," to compile it into bytecode,\nand load it into the user's ClassLoader or the ClassLoader created by Fury,\nand finally compile it into efficient assembly code through Java JIT."]}),"\n",(0,a.jsxs)(i.p,{children:["Since JVM JIT skips Big method compilation and inlining, Fury also implements an optimizer to ",(0,a.jsx)(i.strong,{children:"split big methods into\nsmall methods recursively"}),", thus ensuring that all code can be compiled and inlined."]}),"\n",(0,a.jsx)("img",{alt:"fury java codegen",src:"/img/fury_java_codegen.png"}),"\n",(0,a.jsxs)(i.p,{children:["Fury also supports ",(0,a.jsx)(i.strong,{children:"asynchronous multithreaded compilation"})," by running the codegen tasks in a thread pool,\nand using interpretation mode until JIT finishes to ensure no serialization burrs.\nUsers can skip warm up serialization of objects."]}),"\n",(0,a.jsx)(i.p,{children:"Python and JavaScript codegen are similar. Generating source code is easier for development\nand troubleshooting problems."}),"\n",(0,a.jsxs)(i.p,{children:["Since serialization will manipulate objects extensively in each programming language, and the language\ndoes not expose the low-level API of the memory model, native methods call has a large cost too,\nso we cannot use ",(0,a.jsx)(i.a,{href:"https://www.llvm.org/",children:"LLVM"})," to build a unified serializer JIT framework.\nInstead, we implemented a codegen framework for every language separately."]}),"\n",(0,a.jsx)(i.h2,{id:"static-code-generation",children:"Static code generation"}),"\n",(0,a.jsxs)(i.p,{children:["Although JIT compilation can greatly improve serialization efficiency and generate better serialization code based on\nthe statistical distribution of data at runtime, languages like ",(0,a.jsx)(i.code,{children:"C++"})," do not support reflection,\nhave no virtual machines, and no low-level API for memory models.\nWe cannot generate serialization code dynamically for such languages through JIT."]}),"\n",(0,a.jsxs)(i.p,{children:["In such scenarios, Fury is implementing an ",(0,a.jsx)(i.strong,{children:"AOT codegen framework"}),", which generates the serialized code statically\naccording to the object schema, and objects can be serialized automatically using the\ngenerated serializer. For Rust, Rust macro is used to generate code statically."]}),"\n",(0,a.jsx)(i.h2,{id:"cache-optimization",children:"Cache optimization"}),"\n",(0,a.jsxs)(i.p,{children:["When serializing a custom type, fury will ",(0,a.jsx)(i.strong,{children:"reorder fields"})," to ensure that fields of the same type are serialized in\norder. This can hit more data cache and CPU instruction cache."]}),"\n",(0,a.jsxs)(i.p,{children:["The basic type fields are written ",(0,a.jsx)(i.strong,{children:"in descending order by byte size"}),". In this way, if the initial addresses are aligned,\nsubsequent read and write operations will occur at the position where the memory addresses are aligned, making CPU\nexecution more efficient."]}),"\n",(0,a.jsx)(i.h1,{id:"multi-protocol-design-and-implementation",children:"Multi-protocol Design and Implementation"}),"\n",(0,a.jsx)(i.p,{children:"Based on the multi-language serialization features provided by Fury core, we have built three serialization protocols\nfor different scenarios:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Java serialization"}),": suitable for pure Java serialization scenarios and provides up to170x speed up;"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Cross-language object graph serialization"}),": suitable for application-oriented multi-language programming and\nhigh-performance cross-language serialization;"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Row-format serialization"}),": suitable for distributed computing engines such as Spark/Flink/Dories/Velox/Features\nframeworks;"]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"In the future, we will add new protocols for other core scenarios. Users can also build their own protocols based on\nFury's serialization framework."}),"\n",(0,a.jsx)(i.h2,{id:"java-serialization",children:"Java serialization"}),"\n",(0,a.jsxs)(i.p,{children:["Java is widely used in ",(0,a.jsx)(i.strong,{children:"big data, cloud native, microservices, and enterprise applications"}),".\nTherefore, Fury made lots of optimizations for Java serialization, which reduces system latency and server costs a lot,\nand improves throughput significantly. Our implementation has the following highlights:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Blazing fast performance: Based on Java types, JIT compilation and Unsafe low-level\noperations, ",(0,a.jsx)(i.strong,{children:"Fury is 170x faster than JDK, and 50~110x faster than Kryo/Hessian"})," at most."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"100% JDK serialization API compatibility"})," : supports all JDK custom serialization\nmethods ",(0,a.jsx)(i.code,{children:"writeObject/readObject/writeReplace/readResolve/readObjectNoData"})," natively to ensure the serialization\ncorrectness\nin any scenario. Kryo/Hessian have some correctness issues in these scenarios."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Type compatibility"}),": When the deserialization and serialization class schema are inconsistent, it can still\ndeserialize correctly.\nIt supports application upgrade and deployment, add/delete fields independently.\nFury type-compatible mode is implemented with no performance loss compared to type-consistent mode."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Metadata sharing"})," : share metadata(class name, field name&type, etc.) across multiple\nserializations under a context (TCP connection),\nmeta will be sent to the peer only for the first\nserialization, the peer can reconstruct the same deserializer based on this information.\nSubsequent serialization will skip transferring metadata, which can reduce network traffic,\nand support type compatibility automatically."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Zero copy support"}),": supports out-of-band zero copy and off-heap memory read/write."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"cross-language-object-graph-serialization",children:"Cross-language object graph serialization"}),"\n",(0,a.jsx)(i.p,{children:"Fury cross-language object graph serialization is primarily used for scenarios that require\nhigher dynamics and ease-of-use.\nAlthough frameworks like Protobuf/Flatbuffers support cross-language serialization, they still have limitations:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["They require ",(0,a.jsx)(i.strong,{children:"pre-defined IDLs and generate code statically ahead"}),", lacking sufficient dynamics and flexibility;"]}),"\n",(0,a.jsxs)(i.li,{children:["The generated classes ",(0,a.jsx)(i.strong,{children:"don't conform to object-oriented design"})," and it's impossible to add behavior to classes,\nwhich make them unsuitable for use as domain objects in cross-language application development."]}),"\n",(0,a.jsxs)(i.li,{children:["They ",(0,a.jsx)(i.strong,{children:"don't support polymorphism"}),". Object-oriented programming uses interfaces to invoke subclass methods,\nbut this pattern isn't supported well in those frameworks. Although Flatbuffers offers ",(0,a.jsx)(i.code,{children:"Union"}),",\nand Protobuf provides ",(0,a.jsx)(i.code,{children:"OneOf/Any"}),", those API require check object type during serialization and deserialization, which\nisn't polymorphic."]}),"\n",(0,a.jsxs)(i.li,{children:["They ",(0,a.jsx)(i.strong,{children:"don't support circular references and shared references"}),".\nUsers need to define a set of IDLs for domain objects\nand implement reference resolution by themselves,\nas well as writing code to convert between domain objects and protocol objects in each language.\nIf the object graph depth is deep, more code needs to be written."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Due to the above limitations, Fury implemented a cross-language object graph serialization protocol that:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Automatically serializes any object across multiple languages"}),": By defining classes in the serialization and\ndeserialization peer, objects in one language can be automatically serialized into objects in another language without\ncreating IDL files, compiling schema to generate code, or writing conversion code."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Automatically serializes shared and circular references"})," across multiple languages."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Supports object type polymorphism"}),", consistent with the object-oriented programming paradigm,\nand multiple subtypes can be automatically deserialized without manual intervention."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Out-of-band zero-copy"})," is also supported in this protocol."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Example of Automatic Cross-Language Serialization:"}),"\n",(0,a.jsx)("img",{alt:"xlang serialization example",src:"/img/xlang_serialization_example.png"}),"\n",(0,a.jsx)(i.h2,{id:"row-format",children:"Row-format"}),"\n",(0,a.jsxs)(i.p,{children:["For ",(0,a.jsx)(i.strong,{children:"high-performance computing and large-scale data transfer"})," scenarios, data serialization and transfer are often\nthe ",(0,a.jsx)(i.strong,{children:"performance bottlenecks"})," of the system. If users only need to read part of the data or filter data based on some\nfield of an object, deserializing the entire data will result in unnecessary overhead. Therefore, Fury provides a\nbinary data structure for ",(0,a.jsx)(i.strong,{children:"direct reading and writing on binary data to avoid serialization"}),"."]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"https://arrow.apache.org/",children:"Apache Arrow"})," is a standardized columnar storage format that supports binary read and write.\nHowever, ",(0,a.jsx)(i.strong,{children:"columnar format is not suitable for all scenarios"}),".\nData in online and streaming computing are naturally stored row by row,\nand row is also used in columnar computing engines when involving data updates, Hash/Join/Aggregation operations."]}),"\n",(0,a.jsxs)(i.p,{children:["However, there is no standardized implementation for row format.\n",(0,a.jsx)(i.strong,{children:"Computing engines such as Spark/Flink/Doris/Velox all defined their row format,\nwhich doesn't support cross-language and can only be used internally by themselves"}),".\nFlatbuffers does support ",(0,a.jsx)(i.strong,{children:"lazy deserialization"}),", but it requires static compilation of schema IDL\nand management of offset, which is impossible for complex scenarios."]}),"\n",(0,a.jsxs)(i.p,{children:["Therefore, Fury implemented a ",(0,a.jsx)(i.strong,{children:"binary row format"})," inspired\nby ",(0,a.jsx)(i.a,{href:"https://databricks.com/blog/2015/04/28/project-tungsten-bringing-spark-closer-to-bare-metal.html",children:"Spark Tungsten"}),"\nand ",(0,a.jsx)(i.a,{href:"https://arrow.apache.org/docs/format/Columnar.html",children:"Apache Arrow format"}),", which\nallows ",(0,a.jsx)(i.strong,{children:"random access and partial deserialization"}),". Currently, Java/Python/C++ versions have been implemented,\nallowing direct reading and writing on binary data to avoid all serialization overhead, and can convert to arrow format automatically."]}),"\n",(0,a.jsx)("img",{alt:"xlang serialization example",src:"/img/row_format.png"}),"\n",(0,a.jsxs)(i.p,{children:["This format is densely stored, byte aligned and cache-friendly, which enables faster read and write operations. By avoiding deserialization, it reduces Java GC pressure and Python overhead. Based on Python's dynamics, Fury's data structure implements special methods such as ",(0,a.jsx)(i.code,{children:"getattr_/getitem/slice/etc."}),", ensuring behavior consistency with Python dataclass/list/object, and users have no perception of this."]}),"\n",(0,a.jsx)(i.h1,{id:"performance-comparison",children:"Performance Comparison"}),"\n",(0,a.jsx)(i.p,{children:'Here are some Java serialization performance data,\nwhere charts with "compatible" in the title are performance data under type compatible mode:\nsupport type forward/backward compatibility.\nand charts without "compatible" in the title are performance data without type compatibility:\nclass schema must be same between serialization and deserialization.\nFor fairness, Fury disabled the zero-copy feature for all tests.'}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{width:"44%",alt:"serialization",src:"/img/case1.png"}),(0,a.jsx)("img",{width:"44%",alt:"deserialization",src:"/img/case2.png"})]}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{width:"44%",alt:"bench_serialize_compatible_MEDIA_CONTENT_to_array_tps",src:"/img/benchmarks/serialization/bench_serialize_compatible_MEDIA_CONTENT_to_array_tps.png"}),(0,a.jsx)("img",{width:"44%",alt:"bench_deserialize_compatible_MEDIA_CONTENT_from_array_tps",src:"/img/benchmarks/deserialization/bench_deserialize_compatible_MEDIA_CONTENT_from_array_tps.png"})]}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{width:"44%",alt:"bench_serialize_STRUCT_to_array_tps",src:"/img/benchmarks/serialization/bench_serialize_STRUCT_to_array_tps.png"}),(0,a.jsx)("img",{width:"44%",alt:"bench_serialize_SAMPLE_to_array_tps",src:"/img/benchmarks/serialization/bench_serialize_SAMPLE_to_array_tps.png"})]}),"\n",(0,a.jsx)(i.h1,{id:"future-planningroadmap",children:"Future planning(RoadMap)"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Meta compression, auto meta sharing and cross-language schema compatibility."}),"\n",(0,a.jsx)(i.li,{children:"AOT Framework for c++/golang to generate code statically."}),"\n",(0,a.jsx)(i.li,{children:"C++/Rust object graph serialization support"}),"\n",(0,a.jsx)(i.li,{children:"Golang/Rust/NodeJS row format support"}),"\n",(0,a.jsx)(i.li,{children:"ProtoBuf compatibility support"}),"\n",(0,a.jsx)(i.li,{children:"Protocols for features and knowledge graph serialization"}),"\n",(0,a.jsx)(i.li,{children:"Continuously improve our serialization infrastructure for any new protocols"}),"\n"]}),"\n",(0,a.jsx)(i.h1,{id:"join-us",children:"Join US"}),"\n",(0,a.jsx)(i.p,{children:"We are committed to building Fury into an open and neutral community project that pursues passion and innovation. The\ndevelopment and discussion are open-sourced and transparent in the community. Any form of participation is welcome,\nincluding but not limited to questions, code contributions, technical discussions, etc. We are looking forward to\nreceiving your ideas and feedback, participating in the project together, pushing the project forward and creating a\nbetter serialization framework."}),"\n",(0,a.jsxs)(i.p,{children:["The GitHub address of the fury repository is:\n",(0,a.jsx)(i.a,{href:"https://github.com/alipay/fury",children:"https://github.com/alipay/fury"})]}),"\n",(0,a.jsxs)(i.p,{children:["Official website: ",(0,a.jsx)(i.a,{href:"https://furyio.org",children:"https://furyio.org"})]}),"\n",(0,a.jsx)(i.p,{children:"All issues, PR, and Discussion are welcome."})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>s});var a=n(7294);const r={},t=a.createContext(r);function s(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);