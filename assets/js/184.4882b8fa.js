(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{605:function(s,n,a){"use strict";a.r(n);var e=a(23),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"v-if、v-show、v-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if、v-show、v-for"}},[s._v("#")]),s._v(" v-if、v-show、v-for")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"v-if-vs-v-show"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if-vs-v-show"}},[s._v("#")]),s._v(" v-if vs v-show")]),s._v(" "),a("p",[a("code",[s._v("v-if")]),s._v(" 根据渲染条件决定是否把元素渲染到DOM页面，而"),a("code",[s._v("v-show")]),s._v("不管渲染条件是什么，都会把元素渲染到DOM页面，只是简单的切换CSS的显示隐藏。\n"),s._v("\n如果需要非常频繁地切换，则使用 "),a("code",[s._v("v-show")]),s._v(" 较好；如果在运行时条件很少改变，则使用 "),a("code",[s._v("v-if")]),s._v(" 较好。")]),s._v(" "),a("h2",{attrs:{id:"v-if-与-v-for-一起使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if-与-v-for-一起使用"}},[s._v("#")]),s._v(" v-if 与 v-for 一起使用")]),s._v(" "),a("p",[s._v("不要把v-if和v-for同时用在同一个元素上，一般我们在两种常见的情况下会倾向于这样做：")]),s._v(" "),a("h3",{attrs:{id:"为了过滤一个列表中的项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为了过滤一个列表中的项目"}},[s._v("#")]),s._v(" 为了过滤一个列表中的项目")]),s._v(" "),a("p",[s._v('比如 v-for="user in users" v-if="user.isActive"。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('示例：\n\n<ul>\n  <li\n    v-for="user in activeUsers"\n    :key="user.id"\n  >\n    {{ user.name }}\n  </li>\n</ul>\n\ncomputed: {\n  activeUsers: function () {\n    return this.users.filter(function (user) {\n      return user.isActive\n    })\n  }\n}\n\n好处：  \n过滤后的列表只会在 users 数组发生相关变化时才被重新运算，过滤更高效。\n使用 v-for="user in activeUsers" 之后，我们在渲染的时候只遍历活跃用户，渲染更高效。\n解耦渲染层的逻辑，可维护性 (对逻辑的更改和扩展) 更强\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"为了避免渲染本应该被隐藏的列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为了避免渲染本应该被隐藏的列表"}},[s._v("#")]),s._v(" 为了避免渲染本应该被隐藏的列表")]),s._v(" "),a("p",[s._v('比如 v-for="user in users" v-if="shouldShowUsers"。这种情形下，请将 v-if 移动至容器元素上 (比如 ul、ol)。')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<ul v-if="shouldShowUsers">\n  <li\n    v-for="user in users"\n    :key="user.id"\n  >\n    {{ user.name }}\n  </li>\n</ul>\n\n通过将 v-if 移动到容器元素，我们不会再对列表中的每个用户检查 shouldShowUsers。取而代之的是，我们只检查它一次，且不会在 shouldShowUsers 为否的时候运算 v-for。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);