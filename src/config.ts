const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 2, title: "开源万岁" },
  { id: 1, title: "我的信息" },
];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "qq",
    description: "2293725581",
    url: "https://im.qq.com/index/",
    icon: "QQ.png",
    color: ""
  },
  {
    sortId: 1,
    title: "wechat",
    description: "chat2293725581",
    url: "https://weixin.qq.com/",
    icon: "wechat.png",
    color: ""
  },
  {
    sortId: 1,
    title: "twitter",
    description: "P-george",
    url: "https://twitter.com/paul1314688",
    icon: "twitter.png",
    color: ""
  },
  {
    sortId: 1,
    title: "douyin",
    description: "28594989866",
    url: "https://www.douyin.com/",
    icon: "douyin.png",
    color: ""
  },
  {
    sortId: 2,
    title: "dism++",
    description: "控制winPC",
    url: "https://github.com/Chuyu-Team/Dism-Multi-language",
    icon: "dismiss.png",
    color: ""
  },
  {
    sortId: 2,
    title: "snipaste",
    description: "截图/贴图",
    url: "https://zh.snipaste.com/",
    icon: "sniff.png",
    color: ""
  },
  {
    sortId: 2,
    title: "geek",
    description: "还担心流氓软件?",
    url: "https://geekuninstaller.com/",
    icon: "uninstall.png",
    color: ""
  },
  {
    sortId: 2,
    title: "tcc-g15",
    description: "AWCC受害者?",
    url: "https://github.com/AlexIII/tcc-g15",
    icon: "fan.png",
    color: ""
  },
  {
    sortId: 2,
    title: "iconfont",
    description: "阿里矢量库",
    url: "https://www.iconfont.cn/",
    icon: "aliyun.png",
    color: ""
  },
  {
    sortId: 2,
    title: "marktext",
    description: "Markdown编辑器",
    url: "https://marktext.weero.net/",
    icon: "markdown.png",
    color: ""
  },
  {
    sortId: 2,
    title: "SpaceSniffer",
    description: "win磁盘控制",
    url: "https://github.com/redtrillix/SpaceSniffer",
    icon: "sniff.png",
    color: ""
  },
  {
    sortId: 2,
    title: "pdmaner",
    description: "元数建模",
    url: "https://gitee.com/robergroup/pdmaner",
    icon: "p.png",
    color: ""
  },
  {
    sortId: 2,
    title: "xshell",
    description: "ssh客户端",
    url: "https://www.xshell.com/zh/xshell/",
    icon: "Xshell.png",
    color: ""
  },
  {
    sortId: 2,
    title: "clash",
    description: "小猫咪",
    url: "https://www.clash.la/releases/",
    icon: "cls.png",
    color: ""
  },

];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "P-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.csdn.net/qq_74080022?spm=1010.2135.3001.5343",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/yydspg",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "lary.jpg",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "陇ICP备2024007237号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
    "谢谢你 在这世界的角落发现了我",
    "我们还年轻，长长的人生可以受一点风浪",
    "一约既定，万山无阻",
    "最大的安心是自律温柔和爱自己",
    "不用看日月，你就是星辰",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "MyBlog",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
