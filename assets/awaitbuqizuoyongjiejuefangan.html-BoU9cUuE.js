import{_ as n,c as e,a,o as i}from"./app-C-NtZyzW.js";const l={};function c(t,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="在foreach中使用async-await不起作用解决方案" tabindex="-1"><a class="header-anchor" href="#在foreach中使用async-await不起作用解决方案"><span>在forEach中使用async/await不起作用解决方案</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">function test() {</span>
<span class="line"> let arr = [1, 2, 3]</span>
<span class="line"> arr.forEach(async item =&gt; {</span>
<span class="line">  const res = await fetch(item)</span>
<span class="line">  console.log(res)</span>
<span class="line"> })</span>
<span class="line"> console.log(&#39;end&#39;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function fetch(x) {</span>
<span class="line"> return new Promise((resolve, reject) =&gt; {</span>
<span class="line">     resolve(x)</span>
<span class="line"> })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">test()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考如上代码、我们预期结果是先输出1，2，3，然后因为等待异步结果最后输出end</p><p>但是实际上输出却是end先输出，才到1，2，3。</p><p>原因如下：</p><p>1、首先这是因为foreach是没有return返回值的（可以自己去跟下源码，<code>foreach</code>内部实现只是简单的回调）</p><p>2、而foreach里面的回调函数因为加了async的原因，所以默认会返回一个promise，但是因为foreach的实现并没有返回值，所以导致返回的这个promise对象没人去管了</p><p>首先为了保证end最后输出，我们肯定要先等待循环的返回结果因此改成如下代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">async function test() {</span>
<span class="line"> let arr = [1, 2, 3]</span>
<span class="line"> await arr.forEach(async item =&gt; {</span>
<span class="line">  const res = await fetch(item)</span>
<span class="line">  console.log(res)</span>
<span class="line"> })</span>
<span class="line"> console.log(&#39;end&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这样改之后依然行不通，原因是 <code>foreach</code>没有返回值，所以我们必须保证循环能够有返回值，所以要将foreach改成map</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">async function test() {</span>
<span class="line"> let arr = [1, 2, 3]</span>
<span class="line"> await arr.map(async item =&gt; {</span>
<span class="line">  const res = await fetch(item)</span>
<span class="line">  console.log(res)</span>
<span class="line"> })</span>
<span class="line"> console.log(&#39;end&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果依然不行，然后我们会发现其实 <code>map</code>返回的并不是一个promise对象，而是一个包含promise对象的数组 <code>[promise, promise, promise]</code>，其中每个promise对象都是循环迭代产生的结果。而await是处理不了数组的，它只能处理promise对象。考虑到这一点我们基本上就差不多知道如何改正了、有两种方法。</p><p>第一是将循环改成常规的遍历方式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">async function test() {</span>
<span class="line"> let arr = [1, 2, 3]</span>
<span class="line"> for(let i in arr){</span>
<span class="line">   const res = await fetch(arr[i])</span>
<span class="line">   console.log(res)          </span>
<span class="line"> }</span>
<span class="line"> console.log(&#39;end&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种就比较高端了，使用 <code>Promise.all()</code>，这是一个专门处理promise数组的方法，当async标记的箭头函数返回一个promise对象时，<code>map</code>方法得到的就是一个promise对象数组，然后我们将这个数组丢给 <code>Promise.all()</code>去依次执行，然后只需要使用 <code>await</code>去等待执行结果，就能保证后面的end在得到结果后才会被输出，得到最终输出结果1，2，3，end</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">async function test() {</span>
<span class="line"> let arr = [1, 2, 3]</span>
<span class="line"> await Promise.all(arr.map(async item =&gt; {</span>
<span class="line">  const res = await fetch(item)</span>
<span class="line">  console.log(res)</span>
<span class="line"> }))</span>
<span class="line"> console.log(&#39;end&#39;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const r=n(l,[["render",c],["__file","awaitbuqizuoyongjiejuefangan.html.vue"]]),p=JSON.parse('{"path":"/blogs/2024Notes/awaitbuqizuoyongjiejuefangan.html","title":"在forEach中使用async/await不起作用解决方案","lang":"en-US","frontmatter":{"title":"在forEach中使用async/await不起作用解决方案","date":"2023/12/02","tags":["Javascript"],"categories":["2024Notes"]},"headers":[],"git":{"createdTime":1730275036000,"updatedTime":1730275036000,"contributors":[{"name":"zengjielin","email":"248717607@qq.com","commits":1}]},"filePathRelative":"blogs/2024Notes/await不起作用解决方案.md"}');export{r as comp,p as data};
