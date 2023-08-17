module.exports = {
  "title": "Toxin",
  "description": "这是一个菜鸟的博客",
  "base":"/Toxin-wht.github.io/",
  "dest": "public",
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
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "mglmonster",
        "desc": "老于的个人博客",
        "avatar": "https://mglmonster.github.io/blogOfReco/hanhan1.jpg",
        "link": "https://mglmonster.github.io/blogOfReco/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "王洪涛",
    "authorAvatar": "/avatar.png",
    "startYear": "2023"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        "theme": [
          'blackCat'
        ],
        "clean": true,
        "messages": { 
          welcome: '欢迎来到我的博客'
        },
        "messageStyle": { right: '68px', bottom: '290px' },
        "width": "250",
        "height": "320"
      },
    ],
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      title: '公告',
      body: [
        {
          type: 'title',
          content: '欢迎来到我的个人博客 🎉🎉🎉',
          style: 'text-aligin: center;',
        },
        {
          type: 'text',
          content: 'weChat：wht19980518',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '这是一个前端菜鸟的博客',
          style: 'text-align: center;'
        },
      ],
    }],
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: 'star',  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
  ],
}