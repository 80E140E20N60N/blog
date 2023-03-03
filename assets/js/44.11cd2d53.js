(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{464:function(a,s,t){"use strict";t.r(s);var n=t(23),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[a._v("#")]),a._v(" package.json")]),a._v(" "),t("blockquote",[t("p",[a._v("本文参考"),t("a",{attrs:{href:"https://www.cnblogs.com/tzyy/p/5193811.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.cnblogs.com/tzyy/p/5193811.html"),t("OutboundLink")],1),a._v("，作者：TZYY")])]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[t("code",[a._v("package.json")]),a._v("必须是一个严格的json文件，而不仅仅是js里边的一个对象。其中很多属性可以通过"),t("code",[a._v("npm-config")]),a._v("来生成")]),a._v(" "),t("h2",{attrs:{id:"package-lock-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-lock-json"}},[a._v("#")]),a._v(" package.lock.json")]),a._v(" "),t("p",[a._v("在 npm5 版本后，当我们运行 npm intall 发现会生成一个新文件 package-lock.json"),t("br"),a._v("\n当项目中已有 package-lock.json 文件，在安装项目依赖时，将以该文件为主进行解析安装指定版本依赖包，而不是使用 package.json 来解析和安装模块。因为 package-lock 为每个模块及其每个依赖项指定了版本，位置和完整性哈希，所以它每次创建的安装都是相同的。无论你使用什么设备，或者将来安装它都无关紧要，每次都应该给你相同的结果。")]),a._v(" "),t("h2",{attrs:{id:"yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[a._v("#")]),a._v(" yarn")]),a._v(" "),t("p",[a._v("yarn 的出现主要目标是解决上面描述的由于语义版本控制而导致的 npm 安装的不确定性问题")]),a._v(" "),t("h2",{attrs:{id:"cnpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cnpm"}},[a._v("#")]),a._v(" cnpm")]),a._v(" "),t("p",[a._v("使用 cnpm install 时候，并不会生成 package-lock.json 文件"),t("br"),a._v("\ncnpm install 的时候，就算你项目中有 package-lock.json 文件，cnpm 也不会识别，仍会根据 package.json 来安装。"),t("br"),a._v("\n因此，尽量不要直接使用 cnpm install 安装项目依赖包。但是为了解决直接使用 npm install 速度慢的问题，可以设置 npm 代理解决。")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 设置淘宝镜像代理")]),a._v("\nnpm config "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" registry https"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("npm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("taobao"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("org\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 查看已设置代理")]),a._v("\nnpm config "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("get")]),a._v(" registry\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);