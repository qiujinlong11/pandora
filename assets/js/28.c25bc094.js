(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{200:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),n("p",[n("code",[t._v("pandora.process('processName')")]),t._v(" means that it defines a process called "),n("code",[t._v("processName")]),t._v(", this statement returns a "),n("a",{attrs:{href:"http://www.midwayjs.org/pandora/api-reference/pandora/classes/processrepresentationchainmodifier.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProcessRepresentationChainModifier"),n("OutboundLink")],1),t._v(" object.\nWe can use this object to improve the definition of the process.")]),t._v(" "),n("p",[t._v("The following is a simple example：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),n("p",[t._v("The process will not start if there is no start entrance to the process.")]),t._v(" "),n("p",[t._v("The start entrance, including：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("As the following image：")]),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"custom-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-process","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Process")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"how-to-define-a-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-define-a-process","aria-hidden":"true"}},[this._v("#")]),this._v(" How to define a process")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Process is defined in "),s("code",[this._v("procfile.js")]),this._v(", depending on the following syntax:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("procfile.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pandora"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pandora\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("process")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'processName'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("procfile.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pandora"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// If the process definition exists, modify it, otherwise it is new")]),t._v("\n  pandora"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("process")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'processName'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// rename process")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// obtained without passing parameters")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("name")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'renameIt'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Identifies the number of lateral scaling of the process, default 1, number to number or `auto`(auto to CPU number)")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// obtained without passing parameters")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("scale")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// set the node.js parameters, all covered")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// use `process.execArgv` to get it in process")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// If require incremental: .nodeArgs().push('--expose-gc')")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// obtained without passing parameters")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("nodeArgs")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'--expose-gc'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// set process parameters")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// use `process.argv` to get it in process")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// If require incremental: nodeArgs().push('--a=b')")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// obtained without passing parameters")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("args")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'--a=b'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'--c=d'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// environmental variables of the process, all covered")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// If require incremental: .env().x = 'y'")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// obtained without passing parameters")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("env")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token constant"}},[t._v("ENV_VAR")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'envValue'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// process start order")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// obtained without passing parameters")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("order")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// the entrance file for this process")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// if not set, the process will not start (unless a service is assigned to the process)")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// obtained without passing parameters")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("entry")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./app.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// drop the process definition")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("drop")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"the-process-will-not-start-without-the-program-entrance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-process-will-not-start-without-the-program-entrance","aria-hidden":"true"}},[this._v("#")]),this._v(" The process will not start without the program entrance")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("The definition of "),s("code",[this._v(".entry()")])]),this._v(" "),s("li",[this._v("A service is assigned to the process")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"the-relationship-between-scale-and-the-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-relationship-between-scale-and-the-process","aria-hidden":"true"}},[this._v("#")]),this._v(" The relationship between Scale and the process")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("If a process defines a scale that is greater than 1, start with "),s("code",[this._v("ScalableMater")]),this._v(", that is, the "),s("code",[this._v("master/worker")]),this._v(" mode.")]),this._v(" "),s("li",[this._v("If a process defines a scale of 1, start it directly.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1gpxPhgvD8KJjy0FlXXagBFXa-1794-890.png",alt:"img"}})])}],!1,null,null,null);e.options.__file="process_std.md";s.default=e.exports}}]);