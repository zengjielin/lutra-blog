import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";

export default defineUserConfig({
  title: "Lutra's Blog",
  description: "Lutra's Blog or Note",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  base: "/lutra-blog/",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.jpg",
    author: "zengjielin",
    authorAvatar: "/avatar.jpg",
    docsRepo: "https://github.com/zengjielin/lutra-blog",
    docsBranch: "main",
    docsDir: "",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/screen-shot/": [
        {
          text: "项目截图",
          children: [
            "REDEME",
            "易创宝管理系统",
            "易创宝商品中心",
            "易创宝学习平台",
            "双十一大屏数据看板",
            "小黑探会展约车小程序",
          ],
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      {
        text: "分类",
        link: "/categories/2024Notes/1.html",
      },
      { text: "标签", link: "/tags/Javascript/1.html" },
      {
        text: "文档",
        children: [
          { text: "项目截图", link: "/docs/screen-shot/易创宝管理系统" },
        ],
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    commentConfig: {
      type: "valine",
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        appId: "zlpggJ3MnvFMyid6H0YifAxj-gzGzoHsz",
        appKey: "LxUJ2xD0zGUfzqXLTY7JMAkx",
        placeholder: "填写邮箱可以收到回复提醒哦！",
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: true // 隐藏评论
      },
    },
  }),
  // debug: true,
});
