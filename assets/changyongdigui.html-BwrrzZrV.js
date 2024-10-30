import{_ as s,c as e,a,o as i}from"./app-C-NtZyzW.js";const l={};function d(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="常用递归" tabindex="-1"><a class="header-anchor" href="#常用递归"><span>常用递归</span></a></h1><h5 id="向上递归获取部门-id-路径" tabindex="-1"><a class="header-anchor" href="#向上递归获取部门-id-路径"><span>向上递归获取部门 id 路径</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">const originData: any[] = treeData // 接口返回的部门树数据</span>
<span class="line"></span>
<span class="line">const recursionDepartmentIdPath = (data: any[], id: string, arr: string[]) =&gt; {</span>
<span class="line">  data.forEach((item: any) =&gt; {</span>
<span class="line">    if(item.id === id) {</span>
<span class="line">      arr.unshift(id)</span>
<span class="line">      if(item.parentid) {</span>
<span class="line">        recursionDepartmentIdPath(originData, item.parentid, arr)</span>
<span class="line">      }</span>
<span class="line">    } else if(item.children.length) {</span>
<span class="line">      recursionDepartmentIdPath(item.children, id, arr)</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let deptIdArr: string [] = []</span>
<span class="line">recursionDepartmentIdPath(originData, 3, deptIdArr)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="递归去空-children" tabindex="-1"><a class="header-anchor" href="#递归去空-children"><span>递归去空 children</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">function recurveDelEmpty(data) {</span>
<span class="line">  data.forEach(item =&gt; {</span>
<span class="line">    if(item.children.length) {</span>
<span class="line">      recurveDelEmpty(item.children)</span>
<span class="line">    } else {</span>
<span class="line">      delete item.children</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="获取后代分类-ids" tabindex="-1"><a class="header-anchor" href="#获取后代分类-ids"><span>获取后代分类 ids</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">function getPosterityCategoryIds(list, pid, arr) {</span>
<span class="line">  list.forEach(item =&gt; {</span>
<span class="line">    if(item.pid == pid) {</span>
<span class="line">      arr.push(item.id)</span>
<span class="line">      getPosterityCategoryIds(list, item.id, arr)</span>
<span class="line">    }</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const c=s(l,[["render",d],["__file","changyongdigui.html.vue"]]),p=JSON.parse('{"path":"/blogs/2024Notes/changyongdigui.html","title":"常用递归","lang":"en-US","frontmatter":{"title":"常用递归","date":"2022/02/02","tags":["Javascript"],"categories":["2024Notes"]},"headers":[],"git":{"createdTime":1730275036000,"updatedTime":1730275036000,"contributors":[{"name":"zengjielin","email":"248717607@qq.com","commits":1}]},"filePathRelative":"blogs/2024Notes/常用递归.md"}');export{c as comp,p as data};
