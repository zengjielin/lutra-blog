(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{422:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"大屏窗口自适应方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#大屏窗口自适应方案"}},[s._v("#")]),s._v(" 大屏窗口自适应方案")]),s._v(" "),n("h3",{attrs:{id:"v-scale-screen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-scale-screen"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://github.com/zhangqh22/v-scale-screen",target:"_blank",rel:"noopener noreferrer"}},[s._v("v-scale-screen"),n("OutboundLink")],1)]),s._v(" "),n("blockquote",[n("p",[s._v("大屏自适应容器组件，可用于大屏项目开发，实现屏幕自适应，可根据宽、高、宽高比进行自适应，实现全屏自适应。")]),s._v(" "),n("p",[s._v("在 2.2.0+版本中，我们同时支持 vue>=v3 或者 <=2.7，如果您的项目是 v2.6 版本以下，则使用 1.x 版本。")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("安装：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install v-scale-screen\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("全局使用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<template>\n  <v-scale-screen width="1920" height="1080">\n    <div>\n      <v-chart>....</v-chart>\n      <v-chart>....</v-chart>\n      <v-chart>....</v-chart>\n      <v-chart>....</v-chart>\n      <v-chart>....</v-chart>\n    </div>\n  </v-scale-screen>\n</template>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("在 vue3 中使用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n  <v-scale-screen width=\"1920\" height=\"1080\">\n    <div>\n      <v-chart>....</v-chart>\n      <v-chart>....</v-chart>\n      <v-chart>....</v-chart>\n      <v-chart>....</v-chart>\n      <v-chart>....</v-chart>\n    </div>\n  </v-scale-screen>\n</template>\n\n<script>\nimport { defineComponent } from 'vue'\nimport VScaleScreen from 'v-scale-screen'\n\nexport default defineComponent({\n  name: 'Demo',\n  components: {\n    VScaleScreen\n  }\n})\n<\/script>\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"fitscreen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fitscreen"}},[s._v("#")]),s._v(" FitScreen")]),s._v(" "),n("blockquote",[n("p",[s._v("是通过 css 的 transform 的 scale 属性来进行一个 等比例缩放 来实现屏幕适配的。")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("安装：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install @fit-screen/vue @vue/composition-api\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("全局使用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// In main.[jt]s\nimport { createApp } from 'vue'\nimport FitScreen from '@fit-screen/vue'\nimport App from './App.vue'\n\nconst app = createApp(App)\napp.use(FitScreen)\napp.mount('#app')\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<template>\n  <FitScreen :width="1920" :height="1080" mode="fit">\n    <div>\n      <a href="https://vitejs.dev" target="_blank">\n        <img src="/vite.svg" class="logo" alt="Vite logo">\n      </a>\n      <a href="https://vuejs.org/" target="_blank">\n        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">\n      </a>\n    </div>\n    <HelloWorld msg="Vite + Vue" />\n  </FitScreen>\n</template>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("在 Vue SFC 单文件组件中使用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script setup>\nimport FitScreen from \'@fit-screen/vue\'\n<\/script>\n\n<template>\n  <FitScreen :width="1920" :height="1080" mode="fit">\n    <div>\n      <a href="https://vitejs.dev" target="_blank">\n        <img src="/vite.svg" class="logo" alt="Vite logo">\n      </a>\n      <a href="https://vuejs.org/" target="_blank">\n        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">\n      </a>\n    </div>\n    <HelloWorld msg="Vite + Vue" />\n  </FitScreen>\n</template>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("在 react 中使用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install @fit-screen/react\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('import { useState } from \'react\'\nimport FitScreen from \'@fit-screen/react\'\n\nfunction App() {\n  const [count, setCount] = useState(0)\n\n  return (\n    <FitScreen width={1920} height={1080} mode="fit">\n      <div className="App">\n        <div>\n          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">\n            <img src="/vite.svg" className="logo" alt="Vite logo" />\n          </a>\n          <a href="https://reactjs.org" target="_blank" rel="noreferrer">\n            React logo\n          </a>\n        </div>\n        <h1>Vite + React</h1>\n        <div className="card">\n          <button onClick={() => setCount(count => count + 1)}>\n            count is {count}\n          </button>\n          <p>\n            Edit <code>src/App.tsx</code> and save to test HMR\n          </p>\n        </div>\n        <p className="read-the-docs">\n          Click on the Vite and React logos to learn more\n        </p>\n      </div>\n    </FitScreen>\n  )\n}\n\nexport default App\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/xiaohaijoe/ReactScaleView",target:"_blank",rel:"noopener noreferrer"}},[s._v("ReactScaleView"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/china78/tgg-large-screen",target:"_blank",rel:"noopener noreferrer"}},[s._v("tgg-large-screen"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=t.exports}}]);