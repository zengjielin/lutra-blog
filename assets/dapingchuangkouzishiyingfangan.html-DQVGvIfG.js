import{_ as i,c as t,b as s,d as a,e as l,a as c,o as d,r}from"./app-DwdxH6sH.js";const p={},v={id:"v-scale-screen",tabindex:"-1"},u={class:"header-anchor",href:"#v-scale-screen"},o={href:"https://github.com/zhangqh22/v-scale-screen",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/xiaohaijoe/ReactScaleView",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/china78/tgg-large-screen",target:"_blank",rel:"noopener noreferrer"};function b(h,n){const e=r("ExternalLinkIcon");return d(),t("div",null,[n[3]||(n[3]=s("h1",{id:"大屏窗口自适应方案",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#大屏窗口自适应方案"},[s("span",null,"大屏窗口自适应方案")])],-1)),s("h3",v,[s("a",u,[s("span",null,[s("a",o,[n[0]||(n[0]=a("v-scale-screen")),l(e)])])])]),n[4]||(n[4]=c(`<blockquote><p>大屏自适应容器组件，可用于大屏项目开发，实现屏幕自适应，可根据宽、高、宽高比进行自适应，实现全屏自适应。</p><p>在 2.2.0+版本中，我们同时支持 vue&gt;=v3 或者 &lt;=2.7，如果您的项目是 v2.6 版本以下，则使用 1.x 版本。</p></blockquote><ul><li><p>安装：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">npm install v-scale-screen</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>全局使用：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;v-scale-screen width=&quot;1920&quot; height=&quot;1080&quot;&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/v-scale-screen&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 vue3 中使用：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;v-scale-screen width=&quot;1920&quot; height=&quot;1080&quot;&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">      &lt;v-chart&gt;....&lt;/v-chart&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/v-scale-screen&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">import { defineComponent } from &#39;vue&#39;</span>
<span class="line">import VScaleScreen from &#39;v-scale-screen&#39;</span>
<span class="line"></span>
<span class="line">export default defineComponent({</span>
<span class="line">  name: &#39;Demo&#39;,</span>
<span class="line">  components: {</span>
<span class="line">    VScaleScreen</span>
<span class="line">  }</span>
<span class="line">})</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="fitscreen" tabindex="-1"><a class="header-anchor" href="#fitscreen"><span>FitScreen</span></a></h2><blockquote><p>是通过 css 的 transform 的 scale 属性来进行一个 等比例缩放 来实现屏幕适配的。</p></blockquote><ul><li><p>安装：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">npm install @fit-screen/vue @vue/composition-api</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>全局使用：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">// In main.[jt]s</span>
<span class="line">import { createApp } from &#39;vue&#39;</span>
<span class="line">import FitScreen from &#39;@fit-screen/vue&#39;</span>
<span class="line">import App from &#39;./App.vue&#39;</span>
<span class="line"></span>
<span class="line">const app = createApp(App)</span>
<span class="line">app.use(FitScreen)</span>
<span class="line">app.mount(&#39;#app&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;FitScreen :width=&quot;1920&quot; :height=&quot;1080&quot; mode=&quot;fit&quot;&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;a href=&quot;https://vitejs.dev&quot; target=&quot;_blank&quot;&gt;</span>
<span class="line">        &lt;img src=&quot;/vite.svg&quot; class=&quot;logo&quot; alt=&quot;Vite logo&quot;&gt;</span>
<span class="line">      &lt;/a&gt;</span>
<span class="line">      &lt;a href=&quot;https://vuejs.org/&quot; target=&quot;_blank&quot;&gt;</span>
<span class="line">        &lt;img src=&quot;./assets/vue.svg&quot; class=&quot;logo vue&quot; alt=&quot;Vue logo&quot;&gt;</span>
<span class="line">      &lt;/a&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;HelloWorld msg=&quot;Vite + Vue&quot; /&gt;</span>
<span class="line">  &lt;/FitScreen&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Vue SFC 单文件组件中使用：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;script setup&gt;</span>
<span class="line">import FitScreen from &#39;@fit-screen/vue&#39;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;template&gt;</span>
<span class="line">  &lt;FitScreen :width=&quot;1920&quot; :height=&quot;1080&quot; mode=&quot;fit&quot;&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;a href=&quot;https://vitejs.dev&quot; target=&quot;_blank&quot;&gt;</span>
<span class="line">        &lt;img src=&quot;/vite.svg&quot; class=&quot;logo&quot; alt=&quot;Vite logo&quot;&gt;</span>
<span class="line">      &lt;/a&gt;</span>
<span class="line">      &lt;a href=&quot;https://vuejs.org/&quot; target=&quot;_blank&quot;&gt;</span>
<span class="line">        &lt;img src=&quot;./assets/vue.svg&quot; class=&quot;logo vue&quot; alt=&quot;Vue logo&quot;&gt;</span>
<span class="line">      &lt;/a&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;HelloWorld msg=&quot;Vite + Vue&quot; /&gt;</span>
<span class="line">  &lt;/FitScreen&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 react 中使用：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">npm install @fit-screen/react</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">import { useState } from &#39;react&#39;</span>
<span class="line">import FitScreen from &#39;@fit-screen/react&#39;</span>
<span class="line"></span>
<span class="line">function App() {</span>
<span class="line">  const [count, setCount] = useState(0)</span>
<span class="line"></span>
<span class="line">  return (</span>
<span class="line">    &lt;FitScreen width={1920} height={1080} mode=&quot;fit&quot;&gt;</span>
<span class="line">      &lt;div className=&quot;App&quot;&gt;</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">          &lt;a href=&quot;https://vitejs.dev&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;&gt;</span>
<span class="line">            &lt;img src=&quot;/vite.svg&quot; className=&quot;logo&quot; alt=&quot;Vite logo&quot; /&gt;</span>
<span class="line">          &lt;/a&gt;</span>
<span class="line">          &lt;a href=&quot;https://reactjs.org&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;&gt;</span>
<span class="line">            React logo</span>
<span class="line">          &lt;/a&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;h1&gt;Vite + React&lt;/h1&gt;</span>
<span class="line">        &lt;div className=&quot;card&quot;&gt;</span>
<span class="line">          &lt;button onClick={() =&gt; setCount(count =&gt; count + 1)}&gt;</span>
<span class="line">            count is {count}</span>
<span class="line">          &lt;/button&gt;</span>
<span class="line">          &lt;p&gt;</span>
<span class="line">            Edit &lt;code&gt;src/App.tsx&lt;/code&gt; and save to test HMR</span>
<span class="line">          &lt;/p&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;p className=&quot;read-the-docs&quot;&gt;</span>
<span class="line">          Click on the Vite and React logos to learn more</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    &lt;/FitScreen&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export default App</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2>`,6)),s("ul",null,[s("li",null,[s("a",m,[n[1]||(n[1]=a("ReactScaleView")),l(e)])]),s("li",null,[s("a",g,[n[2]||(n[2]=a("tgg-large-screen")),l(e)])])])])}const x=i(p,[["render",b],["__file","dapingchuangkouzishiyingfangan.html.vue"]]),f=JSON.parse('{"path":"/blogs/2024Notes/dapingchuangkouzishiyingfangan.html","title":"大屏窗口自适应方案","lang":"en-US","frontmatter":{"title":"大屏窗口自适应方案","date":"2024/02/02","tags":["Vue"],"categories":["2024Notes"]},"headers":[{"level":3,"title":"v-scale-screen","slug":"v-scale-screen","link":"#v-scale-screen","children":[]},{"level":2,"title":"FitScreen","slug":"fitscreen","link":"#fitscreen","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1729604784000,"updatedTime":1729604784000,"contributors":[{"name":"zengjielin","email":"248717607@qq.com","commits":1}]},"filePathRelative":"blogs/2024Notes/大屏窗口自适应方案.md"}');export{x as comp,f as data};
