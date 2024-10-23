import{_ as i,c as t,a as d,b as e,d as a,e as l,o as c,r}from"./app-BY-AQ5f8.js";const p={},u={href:"https://www.tslang.cn/docs/handbook/generics.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.jianshu.com/p/ee0af96e1cfb",target:"_blank",rel:"noopener noreferrer"};function o(g,s){const n=r("ExternalLinkIcon");return c(),t("div",null,[s[2]||(s[2]=d(`<h1 id="typescript-泛型使用" tabindex="-1"><a class="header-anchor" href="#typescript-泛型使用"><span>typescript 泛型使用</span></a></h1><h5 id="一、泛型函数" tabindex="-1"><a class="header-anchor" href="#一、泛型函数"><span>一、泛型函数</span></a></h5><p>正常函数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">function getAge(age: number): number {</span>
<span class="line">    return age;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用泛型</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">function getAge&lt;T&gt;(age: T): T {</span>
<span class="line">  return age;</span>
<span class="line">}</span>
<span class="line">console.log(getAge&lt;number&gt;(22)); // 22</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：泛型默认使用用 <code>&lt;T&gt;</code>来声明的</p></blockquote><h5 id="二、泛型对象字面量" tabindex="-1"><a class="header-anchor" href="#二、泛型对象字面量"><span>二、泛型对象字面量</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">interface getAgeFn {</span>
<span class="line">  &lt;T&gt;(age: T): T;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function getAge&lt;T&gt;(age: T): T {</span>
<span class="line">  return age;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let myAge: {&lt;T&gt;(age: T): T} = getAge;</span>
<span class="line"></span>
<span class="line">console.log(myAge&lt;number&gt;(23)); // 23</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="三、泛型接口" tabindex="-1"><a class="header-anchor" href="#三、泛型接口"><span>三、泛型接口</span></a></h5><p>在字面量的基础上封装一个泛型接口</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">interface getAgeFn {</span>
<span class="line">  &lt;T&gt;(age: T): T;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function getAge&lt;T&gt;(age: T): T {</span>
<span class="line">  return age;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let myAge: getAgeFn = getAge;</span>
<span class="line"></span>
<span class="line">console.log(myAge&lt;string&gt;(&#39;24&#39;)); // 24</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="四、泛型类" tabindex="-1"><a class="header-anchor" href="#四、泛型类"><span>四、泛型类</span></a></h5><p>以下定义一下泛型类，传一个默认值，然后能过 <code>setAge</code>改成 <code>age</code>值，类型使用的是 <code>number</code>类型</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">class AgeClass&lt;T&gt; {</span>
<span class="line">  age: T;</span>
<span class="line">  setAge(x: T) {</span>
<span class="line">    this.age = x;</span>
<span class="line">  }</span>
<span class="line">  constructor(defaultAge: T) {</span>
<span class="line">    this.age = defaultAge;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let myAge = new AgeClass&lt;number&gt;(10);</span>
<span class="line"></span>
<span class="line">myAge.setAge(12);</span>
<span class="line"></span>
<span class="line">console.log(myAge.age); // 12</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="五、多个泛型声明" tabindex="-1"><a class="header-anchor" href="#五、多个泛型声明"><span>五、多个泛型声明</span></a></h5><p>变量自定义，<code>,</code>逗号分隔即可</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">type Favorite&lt;T1, T2, T3&gt; = [T1, T2, T3];</span>
<span class="line"></span>
<span class="line">const myFavorite: Favorite&lt;string, string, string&gt; = [&#39;王者荣耀&#39;, &#39;荒野求生&#39;, &#39;蜘蛛侠&#39;];</span>
<span class="line"></span>
<span class="line">console.log(myFavorite); // [&quot;王者荣耀&quot;, &quot;荒野求生&quot;, &quot;蜘蛛侠&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="六、泛型继承" tabindex="-1"><a class="header-anchor" href="#六、泛型继承"><span>六、泛型继承</span></a></h5><p>继承了其他接口就相当于受到了约束，而且传参方式也由单个参数转成了对象</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">interface Lengthwise {</span>
<span class="line">  length: number;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function getAge&lt;T extends Lengthwise&gt;(age: T): T {</span>
<span class="line">  return age;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">console.log(getAge({length: 10, age: 33})); // {length: 10, age: 33}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="七、泛型数组" tabindex="-1"><a class="header-anchor" href="#七、泛型数组"><span>七、泛型数组</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">const bools: Array&lt;boolean&gt; = [true, false, true, true, true]</span>
<span class="line"></span>
<span class="line">const queue: Array&lt;{id: number, value: string }&gt; = [</span>
<span class="line">  { id: 1, value: &#39;a&#39; },</span>
<span class="line">  { id: 2, value: &#39;b&#39; },</span>
<span class="line">  { id: 3, value: &#39;c&#39; },</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>PS：<code>Array&lt;T&gt;</code> 和 <code>T[]</code> 等价，都是声明数组类型，推荐后者。</p></blockquote><h5 id="八、set-和-map" tabindex="-1"><a class="header-anchor" href="#八、set-和-map"><span>八、Set 和 Map</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">const fruits: Set&lt;string&gt; = new Set()</span>
<span class="line"></span>
<span class="line">fruits.add(&#39;豌豆射手&#39;)</span>
<span class="line">fruits.add(&#39;向日葵&#39;)</span>
<span class="line">fruits.add(&#39;西瓜投手&#39;)</span>
<span class="line">fruits.add(&#39;玉米大炮&#39;)</span>
<span class="line"></span>
<span class="line">console.log(fruits.values()) // {&quot;豌豆射手&quot;, &quot;向日葵&quot;, &quot;西瓜投手&quot;, &quot;玉米大炮&quot;}</span>
<span class="line"></span>
<span class="line">const subjects: Map&lt;string, number&gt; = new Map()</span>
<span class="line"></span>
<span class="line">subjects.set(&#39;语文&#39;, 91)</span>
<span class="line">subjects.set(&#39;数学&#39;, 100)</span>
<span class="line">subjects.set(&#39;英语&#39;, 92)</span>
<span class="line">subjects.set(&#39;政治&#39;, 96)</span>
<span class="line"></span>
<span class="line">console.log(subjects.values()) // {91, 100, 92, 96}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>`,27)),e("ul",null,[e("li",null,[e("a",u,[s[0]||(s[0]=a("https://www.tslang.cn/docs/handbook/generics.html")),l(n)])]),e("li",null,[e("a",v,[s[1]||(s[1]=a("https://www.jianshu.com/p/ee0af96e1cfb")),l(n)])])])])}const b=i(p,[["render",o],["__file","typescriptfanxingshiyong.html.vue"]]),h=JSON.parse('{"path":"/blogs/2024Notes/typescriptfanxingshiyong.html","title":"typescript泛型使用","lang":"en-US","frontmatter":{"title":"typescript泛型使用","date":"2024/02/02","tags":["Typescript"],"categories":["2024Notes"]},"headers":[],"git":{"createdTime":1729655497000,"updatedTime":1729655497000,"contributors":[{"name":"zengjielin","email":"248717607@qq.com","commits":1}]},"filePathRelative":"blogs/2024Notes/typescript泛型使用.md"}');export{b as comp,h as data};
