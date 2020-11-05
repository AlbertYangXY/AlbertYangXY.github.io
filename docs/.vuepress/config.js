module.exports = {
  "title": "APPOPS 文档中心",
  "description": "知识积累, 经验传递, 善于记录, 助力成长！",
  "dest": "public",
  "base": "/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "valineConfig": {
      "appId": 'cXHj2xfPyVGJMCjqN22AndwV-gzGzoHsz',
      "appKey": '6zEcsR2GrK0sE7dPLFuVpWy2',
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系方式",
        "icon": "reco-message",
        "items": [
	  { 
	    "text": "Email",
	    "link": "mailto:g-game-ops@360.cn",
	    "icon": "reco-mail"
	  }
        ]
      }
    ],
    sidebar: {
      //'/views/sidebar/': [
      //  '',
      //  'bar1',
      //  'bar2'
      //],
      '/views/linux/': [
        {
          title: '运维相关技术',
          collapsable: true,
          children: [
            '',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
          ]
        },
        //{
        //  title: '其他',
        //  collapsable: true,
        //  children: [
        //    '2'
        //  ]
        //},
      ]
    },
    //"type": "blog",
    //"blogConfig": {
    //  "category": {
    //    "location": 2,
    //    "text": "分类"
    //  },
    //  "tag": {
    //    "location": 3,
    //    "text": "标签"
    //  }
    //},
    //"friendLink": [
    //  {
    //    "title": "vuepress-theme-reco",
    //    "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //    "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //    "link": "https://vuepress-theme-reco.recoluan.com"
    //  }
    //],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    //"sidebar": "auto",
    "subSidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "yuanyuan-g",
    "authorAvatar": "/avatar.png",
    //"record": "ICP备案",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["flowchart"],  // 支持流程图
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",  // BGM播放器
      {
        "audios": [
          {"name": "Faster Than Light","artist": "Andreas Waldetoft / Mia Stegmar","url": "https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3","cover": "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg"},
          {"name": "Dawn","artist": "DDRKirby(ISQ)","url": "https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3","cover": "https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg"},
          {"name": "TRON Legacy (End Titles)","artist": "Daft Punk","url": "https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3","cover": "https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg"},
          {"name": "Broken Boy","artist": "Tonspender","url": "https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac","cover": "https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg"},
          {"name": "Life Of Sin Pt. 4","artist": "MitiS","url": "https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3","cover": "https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg"},
          {"name": "Sea Of Voices (RAC Mix)","artist": "Porter Robinson","url": "https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3","cover": "https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg"},
          {"name": "New Lipstick","artist": "The Kissaway Trail","url": "https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac","cover": "https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg"},
        ],
      },
    ],
    ["vuepress-plugin-smooth-scroll"],  // 平滑滚动
    ["@vuepress/nprogress"],  // 加载进度条
    ["reading-progress"]  // 阅读进度条
  ]
}
