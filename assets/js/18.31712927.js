(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{440:function(s,t,a){"use strict";a.r(t);var n=a(23),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"项目基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目基础配置"}},[s._v("#")]),s._v(" 项目基础配置")]),s._v(" "),a("p",[s._v("在文件 vue.config.js 中进行项目的基本配置")]),s._v(" "),a("h2",{attrs:{id:"gzip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[s._v("#")]),s._v(" gzip")]),s._v(" "),a("p",[s._v("开启gzip，打包的时候开启gzip可以很大程度减少包的大小，非常适合于上线部署。更小的体积对于用户体验来说就意味着更快的加载速度以及更好的用户体验。")]),s._v(" "),a("h3",{attrs:{id:"安装依赖包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖包"}},[s._v("#")]),s._v(" 安装依赖包")]),s._v(" "),a("p",[s._v("npm包：compression-webpack-plugin")]),s._v(" "),a("h3",{attrs:{id:"开启配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启配置"}},[s._v("#")]),s._v(" 开启配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//vue.config.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// gzip压缩")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CompressionWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'compression-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" productionGzipExtensions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.(js|css|json|txt|html|ico|svg)(\\?.*)?$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("i")])]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    configureWebpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CompressionWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[path].gz[query]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        algorithm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gzip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" productionGzipExtensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        minRatio"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        deleteOriginalAssets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("h2",{attrs:{id:"proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[s._v("#")]),s._v(" proxy")]),s._v(" "),a("p",[s._v("本地调试一般都是 npm run serve，然后打开 本机ip:8080（localhost:8080），要调接口调试，后端的接口的地址可能在测试环境，也可能是自己电脑的 ip，总之不是 lcoalhost:8080，那么调接口就会产生跨域，这时候就需要proxy进行代理")]),s._v(" "),a("p",[s._v("proxy 代理也称网络代理，是一种特殊的网络服务，允许一个终端（一般为客户端）通过这个服务与另一个终端（一般为服务器）进行非直接的连接。\n一般我们使用这个能力来解开发中的跨域访问问题。原理其实很简单，就是浏览器上有跨域问题，但是服务端没有跨域问题。我们请求同源的本地服务，然后让本地服务去请求非同源的远程服务。需要注意的是，请求代理，代理的是请求的服务，不会直接修改发起的请求 url。它只是将目标服务器返回的数据传递到前端。所以你在浏览器上看到的请求地址还是 http://localhost:8000/api/a。")]),s._v(" "),a("h3",{attrs:{id:"项目网络配置-proxy代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目网络配置-proxy代理"}},[s._v("#")]),s._v(" 项目网络配置（proxy代理）：")]),s._v(" "),a("p",[s._v("在src/common/networkConfig.js文件里配置，具体如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 目标代理服务器地址，这个就是你要连接的接口地址，可以使用域名，代理解决跨域问题 */")]),s._v("\n    target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.1.192:13012'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请求地址")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 允许跨域 */")]),s._v("\n    changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 如果是http接口，需要配置该参数 */")]),s._v("\n    secure"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 代理 websockets 支持*/")]),s._v("\n    ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* path 重写url*/")]),s._v("\n    pathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("‘/api’对应src/common/business/baseUrl.js文件里的‘/api’，如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CC_API")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CC_MOCK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/mocker'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CC_API")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CC_API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CC_MOCK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CC_MOCK")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("备注：当添加或修改proxy代理时需同时修改这两个文件")]),s._v(" "),a("h3",{attrs:{id:"常见跨域解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见跨域解决方案"}},[s._v("#")]),s._v(" 常见跨域解决方案")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("jsonp"),a("br"),s._v("\nJSONP只支持GET请求，JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。")])]),s._v(" "),a("li",[a("p",[s._v("CORS"),a("br"),s._v("\n(Cross-Origin Resource Sharing)的全称叫 跨域资源共享"),a("br"),s._v("\n原理："),a("br"),s._v("\n使用额外的 HTTP 头来告诉浏览器，让运行在某一个 origin 上的 Web 应用允许访问来自不同源服务器上的指定的资源"),a("br"),s._v("\n兼容性："),a("br"),s._v("\n目前，所有的主流浏览器都支持 CORS，其中，IE 浏览器的版本不能低于 10"),a("br"),s._v("\n实现 CORS 的关键是服务器，只要服务器实现了 CORS 的相关接口，就可以实现跨域。CORS 与 JSONP相比，优势是支持所有的请求方法，缺点是兼容性上较 JSONP 差。")])]),s._v(" "),a("li",[a("p",[s._v("Nginx反向代理"),a("br"),s._v("\n浏览器和服务器之间有跨域，但是服务器和服务器之间没有跨域，利用同源策略对服务器不加限制这个思路，可以搭建一个代理服务器，接受客户端请求，然后将请求转发给服务器，拿到响应后，再将响应转发给客户端："),a("br"),s._v("\n注：浏览器向代理服务器请求时仍然遵循同源策略")])])]),s._v(" "),a("h3",{attrs:{id:"changeorigin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changeorigin"}},[s._v("#")]),s._v(" changeOrigin")]),s._v(" "),a("p",[s._v("设置成false：请求头中host仍然是浏览器发送过来的host"),a("br"),s._v("\n设置成true：发送请求头中host会设置成target")]),s._v(" "),a("h3",{attrs:{id:"pathrewrite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pathrewrite"}},[s._v("#")]),s._v(" pathRewrite")]),s._v(" "),a("p",[s._v("pathRewrite是使用proxy进行代理时，对请求路径进行重定向以匹配到正确的请求地址，")]),s._v(" "),a("h2",{attrs:{id:"cdn相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn相关"}},[s._v("#")]),s._v(" CDN相关")]),s._v(" "),a("p",[s._v("注：不建议使用，因为CDN外链链接存在失效风险，会影响到项目正常运行，目前项目已经屏蔽了cdn功能")]),s._v(" "),a("h3",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("CDN")]),s._v(" 外链的方式引入这些第三方库，这样能大大增加构建的速度(通过 CDN 引入的资源不会经 webpack 打包)"),a("br"),s._v("\n很多文章说使用 "),a("code",[s._v("CDN")]),s._v(" 引入的方式能大大减小代码的体积，这是不可能的。虽然打包完的 "),a("code",[s._v("bundle")]),s._v("小了，但那部分代码只是被你拆出去，用"),a("code",[s._v("CDN")]),s._v("的方式引入罢了。你想减小体积，最高效的方案是启用"),a("code",[s._v("GZIP")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),a("p",[s._v("CDN外链链接存在失效风险，会影响到项目正常运行")]),s._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  isCdn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否使用CDN加载文件")]),s._v("\n  CssCdn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://unpkg.com/element-ui/lib/theme-chalk/index.css'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  jsCdn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue.js CDN路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// element-ui.js CDN路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue-router.js CDN路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vuex.js CDN路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// axios.js CDN路径")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  externalsBuild"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打包时不包含哪些文件（不包含的文件想要CDN引入）")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue-router'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'VueRouter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuex'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Vuex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ELEMENT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'axios'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);