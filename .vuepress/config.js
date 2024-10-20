module.exports = {
  title: "Lutra'Blog",
  description: 'Lutra blogs or notes',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: "/lutra-blog/",
  theme: 'reco',
  themeConfig: {
    huawei: true,
    nav: [
      // { text: 'Home', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '文档', 
        icon: 'reco-message',
        items: [
          { text: '项目截图', link: '/docs/screen-shot/' },
        ]
      },
      // { text: 'Contact', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' }
      //   ]
      // }
    ],
    sidebar: {
      '/docs/screen-shot/': [
        '',
        '易创宝管理系统',
        '易创宝学习平台',
        '双十一大屏数据看板',
        '小黑探会展约车小程序',
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        // text: 'Category' // 默认 “分类”
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        // text: 'Tag' // 默认 “标签”
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: 'ShinyGal',
        desc: '这一路上走走停停，顺着少年漂流的痕迹。',
        email: '248717607@qq.com',
        avatar: "/avatar.jpg",
        link: 'https://www.cnblogs.com/zengjielin'
      },
      {
        title: '个人Github',
        desc: '优秀的代码就应该被收藏和分享',
        email: '248717607@qq.com',
        avatar: "/avatar.jpg",
        link: 'https://github.com/zengjielin'
      },
    ],
    // logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'zengjielin',
    // 作者头像
    authorAvatar: '/avatar.jpg',
    // 备案号
    record: '',
    recordLink: '',
    cyberSecurityRecord: '',
    cyberSecurityLink: '',

    // 项目开始时间
    startYear: '2017',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: "7Rd5srHP9piH7CCJ62sKuAW2-gzGzoHsz",
      appKey: "9CZeENYCYA02EouZB0WWy3D1",
      placeholder: "填写邮箱可以收到回复提醒哦！",
    }
  },
  markdown: {
    lineNumbers: true
  }
}  
