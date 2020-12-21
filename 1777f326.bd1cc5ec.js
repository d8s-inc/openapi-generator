(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(1),n=r(9),o=(r(0),r(304)),i={id:"roadmap",title:"Roadmap"},l={id:"roadmap",title:"Roadmap",description:"This document lists short-term, medium-term, and long-term goals for the project.",source:"@site/../docs/roadmap.md",permalink:"/docs/roadmap",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/roadmap.md",lastUpdatedBy:"dpolyakov987",lastUpdatedAt:1607933346,sidebar:"docs",previous:{title:"Create a New Generator",permalink:"/docs/new-generator"},next:{title:"Migrating from Swagger Codegen",permalink:"/docs/swagger-codegen-migration"}},c=[{value:"Short-term",id:"short-term",children:[]},{value:"Medium-term",id:"medium-term",children:[{value:"API",id:"api",children:[]},{value:"General",id:"general",children:[]}]},{value:"Long-term",id:"long-term",children:[]}],p={rightToc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document lists short-term, medium-term, and long-term goals for the project."),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")),Object(o.b)("p",null,"These are goals, not necessarily commitments. The sections are not intended to represent exclusive focus during these terms. For example, when you start at a college or university you may have a long-term goal to graduate and a short-term goal to find a job for supplemental income. We will similarly work toward many of our medium-term and long-term goals in the near future as we move toward meeting our short-term goals."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"short-term"},"Short-term"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Usability, stability, and marketing.")),Object(o.b)("p",null,"Short term are focused on improving contributor and user productivity (part of this is getting the word out)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CLI improvements",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Search functionality (e.g. what generators support retrofit, what generators are available for kotlin)"))),Object(o.b)("li",{parentName:"ul"},"Build automation improvements"),Object(o.b)("li",{parentName:"ul"},"Discuss consolidating current third-party build systems"),Object(o.b)("li",{parentName:"ul"},"Investigate custom docker containerization for prepared build environments"),Object(o.b)("li",{parentName:"ul"},"Automated release stability"),Object(o.b)("li",{parentName:"ul"},"General"),Object(o.b)("li",{parentName:"ul"},"OAS3.0 features support: anyOf, oneOf, callbacks, etc"),Object(o.b)("li",{parentName:"ul"},"Consider opt-in telemetry about generators being used, limited to a counter of invocations by generator name). This would allow us to make prioritization decisions based on statistics."),Object(o.b)("li",{parentName:"ul"},"Code clean up",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"centralize build scripts"),Object(o.b)("li",{parentName:"ul"},"organize samples/bin scripts according to new generator names"),Object(o.b)("li",{parentName:"ul"},"consolidate typescript generators"),Object(o.b)("li",{parentName:"ul"},"jaxrs => use Swagger core v3 (see ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/OpenAPITools/openapi-generator/issues/27%5B#27%5D"}),"https://github.com/OpenAPITools/openapi-generator/issues/27[#27]"),")"))),Object(o.b)("li",{parentName:"ul"},"Documentation"),Object(o.b)("li",{parentName:"ul"},"Static pages, preferably on gh-pages, devoted to each generator"),Object(o.b)("li",{parentName:"ul"},"Explain generator options"),Object(o.b)("li",{parentName:"ul"},"Centralized docs on generated code usage/examples/configuration")),Object(o.b)("h2",{id:"medium-term"},"Medium-term"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Feature set, well-defined API (code and templates), and extensibility improvements.")),Object(o.b)("h3",{id:"api"},"API"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Typed representation of the model bound to our templates. As it is, everything is treated an an Object, and this can lead to changes in the interface which might be unexpected from the template perspective."),Object(o.b)("li",{parentName:"ul"},"Feature set (potential generators to add; not an exhaustive list)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Azure functions (node.js, server)"),Object(o.b)("li",{parentName:"ul"},"Finagle HTTP Client (Scala, client)"),Object(o.b)("li",{parentName:"ul"},"Finagle Http Server (Scala, server)"),Object(o.b)("li",{parentName:"ul"},"Finatra (Scala, server)"),Object(o.b)("li",{parentName:"ul"},"Kotlin Spring MVC/Springboot (server)"),Object(o.b)("li",{parentName:"ul"},"C++ Server, any framework (server)")))),Object(o.b)("h3",{id:"general"},"General"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Migrate from Maven to Gradle"),Object(o.b)("li",{parentName:"ul"},"Java 9+ support"),Object(o.b)("li",{parentName:"ul"},"Feature set (other options to investigate)"),Object(o.b)("li",{parentName:"ul"},"SPI plugins",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Templating engine"),Object(o.b)("li",{parentName:"ul"},"Language extensions"),Object(o.b)("li",{parentName:"ul"},"Custom extensions (e.g. allowing users to load support for ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Azure/azure-rest-api-specs%5Bazure-rest-api-specs%5D"}),"https://github.com/Azure/azure-rest-api-specs[azure-rest-api-specs]"),")"))),Object(o.b)("li",{parentName:"ul"},"Customizable templating engines (handlebars support)"),Object(o.b)("li",{parentName:"ul"},"Unit-testing templates (to previously mentioned explicit type as an interface to the template)"),Object(o.b)("li",{parentName:"ul"},"Reduce coupling"),Object(o.b)("li",{parentName:"ul"},"Make types extending ",Object(o.b)("inlineCode",{parentName:"li"},"CodegenConfig")," become the generation entrypoint"),Object(o.b)("li",{parentName:"ul"},"Allow current ",Object(o.b)("inlineCode",{parentName:"li"},"CodegenConfig")," types to define templating engine"),Object(o.b)("li",{parentName:"ul"},"Allow current ",Object(o.b)("inlineCode",{parentName:"li"},"CodegenConfig")," types to modify workflow (currently encapsulated in ",Object(o.b)("inlineCode",{parentName:"li"},"DefaultGenerator")," and tightly coupled to the template engine"),Object(o.b)("li",{parentName:"ul"},'Clearer reuse of "language" features, outside of "generator" types. That is, rather than enforcing polymorphic sharing of "language" which currently allows the super type to redefine framework-specific mapping functionality, generators could compose one or more language support types.'),Object(o.b)("li",{parentName:"ul"},"Define template deprecation/removal process")),Object(o.b)("h2",{id:"long-term"},"Long-term"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Expanding tooling offered, integrations, potentially SaaS offering to partially fund efforts.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generator UI wrappers",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Move jimschubert/intellij-swagger-codegen plugin under the org, and rename"),Object(o.b)("li",{parentName:"ul"},"Look into an Eclipse UI wrapper around the generator"),Object(o.b)("li",{parentName:"ul"},"Look at Visual Studio Code (and/or Atom, sublime text) integration"))),Object(o.b)("li",{parentName:"ul"},"Provide a native GUI for viewing/editing specs. Most tools are currently geared toward developers, but often times it may be non-technical business users who are interested in an API."),Object(o.b)("li",{parentName:"ul"},"A paid service (SaaS) for generation may be enticing for some users. Such a service would allow for statistics (mentioned earlier in telemetry)"),Object(o.b)("li",{parentName:"ul"},"Additional tools"),Object(o.b)("li",{parentName:"ul"},"node.js build system(s) integration (grunt/gulp/webpack/etc)"),Object(o.b)("li",{parentName:"ul"},"ruby gem"),Object(o.b)("li",{parentName:"ul"},"others (which may require previously mentioned SaaS API)")))}u.isMDXComponent=!0},304:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return r?n.a.createElement(d,l({ref:t},p,{components:r})):n.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);