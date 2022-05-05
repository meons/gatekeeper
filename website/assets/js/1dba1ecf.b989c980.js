"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2510],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=i,d=s["".concat(o,".").concat(u)]||s[u]||N[u]||r;return n?a.createElement(d,p(p({ref:t},k),{},{components:n})):a.createElement(d,p({ref:t},k))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var m=2;m<r;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return N}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),p=["components"],l={id:"metrics",title:"Metrics"},o=void 0,m={unversionedId:"metrics",id:"metrics",title:"Metrics",description:"Below are the list of metrics provided by Gatekeeper:",source:"@site/docs/metrics.md",sourceDirName:".",slug:"/metrics",permalink:"/gatekeeper/website/docs/next/metrics",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/metrics.md",tags:[],version:"current",frontMatter:{id:"metrics",title:"Metrics"},sidebar:"docs",previous:{title:"Customizing Admission Behavior",permalink:"/gatekeeper/website/docs/next/customize-admission"},next:{title:"Debugging",permalink:"/gatekeeper/website/docs/next/debug"}},k={},N=[{value:"Constraint",id:"constraint",level:2},{value:"Constraint Template",id:"constraint-template",level:2},{value:"Webhook",id:"webhook",level:2},{value:"Audit",id:"audit",level:2},{value:"Mutation",id:"mutation",level:2},{value:"Sync",id:"sync",level:2},{value:"Watch",id:"watch",level:2}],s={toc:N};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Below are the list of metrics provided by Gatekeeper:"),(0,r.kt)("h2",{id:"constraint"},"Constraint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_constraints")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Current number of known constraints")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"enforcement_action"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryrun"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),"]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue")))))),(0,r.kt)("h2",{id:"constraint-template"},"Constraint Template"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_constraint_templates")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Number of observed constraint templates")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_constraint_template_ingestion_count")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of constraint template ingestion actions")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Count"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_constraint_template_ingestion_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution of how long it took to ingest a constraint template in seconds")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution")))))),(0,r.kt)("h2",{id:"webhook"},"Webhook"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_validation_request_count")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"The number of requests that are routed to validation webhook")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"admission_status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Count"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_validation_request_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"The validation webhook response time in seconds")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"admission_status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_mutation_request_count")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"The number of requests that are routed to mutation webhook")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"admission_status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Count"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_mutation_request_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"The mutation webhook response time in seconds")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"admission_status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"allow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution")))))),(0,r.kt)("h2",{id:"audit"},"Audit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_violations")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of audited violations")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"enforcement_action"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"deny"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dryrun"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_audit_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Latency of audit operation in seconds")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_audit_last_run_time")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp of last audit run time")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue")))),(0,r.kt)("h2",{id:"mutation"},"Mutation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_mutator_ingestion_count")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of Mutator ingestion actions")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Count"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_mutator_ingestion_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"The distribution of Mutator ingestion durations")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_mutators")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"The current number of Mutator objects")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Count"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_mutator_conflicting_count")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"The current number of conflicting Mutator objects")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Count")))))),(0,r.kt)("h2",{id:"sync"},"Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_sync")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of resources of each kind being cached")),(0,r.kt)("p",{parentName:"li"},"  Tags:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ","[",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"kind")," (examples, ",(0,r.kt)("inlineCode",{parentName:"p"},"pod"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),", ...)"),(0,r.kt)("p",{parentName:"li"},"Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_sync_duration_seconds")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Latency of sync operation in seconds")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"Distribution"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_sync_last_run_time")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp of last sync operation")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue")))),(0,r.kt)("h2",{id:"watch"},"Watch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_watch_manager_watched_gvk")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of watched GroupVersionKinds")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name: ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper_watch_manager_intended_watch_gvk")),(0,r.kt)("p",{parentName:"li"},"  Description: ",(0,r.kt)("inlineCode",{parentName:"p"},"Total number of GroupVersionKinds with a registered watch intent")),(0,r.kt)("p",{parentName:"li"},"  Aggregation: ",(0,r.kt)("inlineCode",{parentName:"p"},"LastValue")))))}u.isMDXComponent=!0}}]);