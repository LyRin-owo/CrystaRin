const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-11-23', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎光临镜雨阁！零音在这里等候多时啦w', url: 'https://crystal.lyrin-owo.top' },
    { title: '你可以在 GitHub 上找到零音！', url: 'https://github.com/LyRin-owo' },
    { title: '可以通过邮件联系零音哦~', url: 'mailto:LyRin-owo@outlook.com' },
    { title: '零音可能会在 X 上活动。', url: 'https://x.com/LyRin_owo' },
    { title: '这里是零音的 Telegram！', url: 'https://t.me/LyRin_owo' },
    { title: '欢迎关注零音的 bilibili 账号！', url: 'https://space.bilibili.com/182330206' },
    { title: '点击跳转零音的 YouTube~', url: 'https://www.youtube.com/@LyRin-owo' },
    { title: '零音会在小红书上活动——', url: 'https://www.xiaohongshu.com/user/profile/65ffa942000000000b00c4f4' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '寒冰盈渠结',
  HEO_HERO_TITLE_2: '素霜竟栏凝',
  HEO_HERO_TITLE_3: '镜雨阁CrystaRin',
  HEO_HERO_TITLE_4: '零音的博客，堂堂回归——',
  HEO_HERO_TITLE_5: '至高 · 第八探索者',
  HEO_HERO_TITLE_LINK: 'https://crystal.lyrin-owo.top',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随机跳转文章',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '科学技术', url: '/category/科学技术' },
  HEO_HERO_CATEGORY_2: { title: '杂波随笔', url: '/category/杂波随笔' },
  HEO_HERO_CATEGORY_3: { title: '学习交流', url: '/category/学习交流' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🎮 糊糊菜菜音游人',
    '🏫 一般路过高三生',
    '✨ 科技狂热爱好者',
    '😭 抑郁失眠大社恐',
    '🤖️ 人工智能大模型'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: 'https://crystal.lyrin-owo.top/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/LyRin-owo',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://space.bilibili.com/182330206',
  HEO_INFO_CARD_TEXT3: '哔哩哔哩',

  // 用户技能图标
    "HEO_GROUP_ICONS": [
      {
        "title_1": "-",
        "img_1": "/images/heo/avatars/-.jpg",
        "color_1": "#ffffff",
        "title_2": "¿¿¿¿¿",
        "img_2": "/images/heo/avatars/¿¿¿¿¿.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "⑨0%碘化钙",
        "img_1": "/images/heo/avatars/⑨0%碘化钙.jpg",
        "color_1": "#ffffff",
        "title_2": "海底捞凤梨汁",
        "img_2": "/images/heo/avatars/海底捞凤梨汁.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "霁月",
        "img_1": "/images/heo/avatars/霁月.jpg",
        "color_1": "#ffffff",
        "title_2": "江暮迟",
        "img_2": "/images/heo/avatars/江暮迟.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "禁地",
        "img_1": "/images/heo/avatars/禁地.jpg",
        "color_1": "#ffffff",
        "title_2": "林",
        "img_2": "/images/heo/avatars/林.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "牧野",
        "img_1": "/images/heo/avatars/牧野.jpg",
        "color_1": "#ffffff",
        "title_2": "晴霜",
        "img_2": "/images/heo/avatars/晴霜.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "三硝基甲苯",
        "img_1": "/images/heo/avatars/三硝基甲苯.jpg",
        "color_1": "#ffffff",
        "title_2": "扬州炒饭",
        "img_2": "/images/heo/avatars/扬州炒饭.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "月亮有点困",
        "img_1": "/images/heo/avatars/月亮有点困.jpg",
        "color_1": "#ffffff",
        "title_2": "雲",
        "img_2": "/images/heo/avatars/雲.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "稚璇Yumi",
        "img_1": "/images/heo/avatars/稚璇Yumi.jpg",
        "color_1": "#ffffff",
        "title_2": "chihuoQwQ",
        "img_2": "/images/heo/avatars/chihuoQwQ.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "ClassiSBand",
        "img_1": "/images/heo/avatars/ClassiSBand.jpg",
        "color_1": "#ffffff",
        "title_2": "Cokee",
        "img_2": "/images/heo/avatars/Cokee.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "cyy",
        "img_1": "/images/heo/avatars/cyy.png",
        "color_1": "#ffffff",
        "title_2": "DryIce-cc",
        "img_2": "/images/heo/avatars/DryIce-cc.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "Epsilon",
        "img_1": "/images/heo/avatars/Epsilon.jpg",
        "color_1": "#ffffff",
        "title_2": "fsw",
        "img_2": "/images/heo/avatars/fsw.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "gbcy",
        "img_1": "/images/heo/avatars/gbcy.jpg",
        "color_1": "#ffffff",
        "title_2": "Heiyc",
        "img_2": "/images/heo/avatars/Heiyc.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "Hiper",
        "img_1": "/images/heo/avatars/Hiper.jpg",
        "color_1": "#ffffff",
        "title_2": "kriastans",
        "img_2": "/images/heo/avatars/kriastans.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "LiuYan-xwx",
        "img_1": "/images/heo/avatars/LiuYan-xwx.jpg",
        "color_1": "#ffffff",
        "title_2": "LyRin-owo",
        "img_2": "/images/heo/avatars/LyRin-owo.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "MikaRELIA",
        "img_1": "/images/heo/avatars/MikaRELIA.jpg",
        "color_1": "#ffffff",
        "title_2": "MiniSentry",
        "img_2": "/images/heo/avatars/MiniSentry.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "MoonBigD",
        "img_1": "/images/heo/avatars/MoonBigD.jpg",
        "color_1": "#ffffff",
        "title_2": "Nanami",
        "img_2": "/images/heo/avatars/Nanami.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "Nireno",
        "img_1": "/images/heo/avatars/Nireno.jpg",
        "color_1": "#ffffff",
        "title_2": "Patricia",
        "img_2": "/images/heo/avatars/Patricia.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "sanwu",
        "img_1": "/images/heo/avatars/sanwu.jpg",
        "color_1": "#ffffff",
        "title_2": "SEALYikang",
        "img_2": "/images/heo/avatars/SEALYikang.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "sjzyQwQ",
        "img_1": "/images/heo/avatars/sjzyQwQ.png",
        "color_1": "#ffffff",
        "title_2": "SkyEx",
        "img_2": "/images/heo/avatars/SkyEx.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "SLeanF",
        "img_1": "/images/heo/avatars/SLeanF.jpg",
        "color_1": "#ffffff",
        "title_2": "SugarMGP",
        "img_2": "/images/heo/avatars/SugarMGP.jpg",
        "color_2": "#ffffff"
      },
      {
        "title_1": "vagrant",
        "img_1": "/images/heo/avatars/vagrant.jpg",
        "color_1": "#ffffff",
        "title_2": "Vesper",
        "img_2": "/images/heo/avatars/Vesper.jpg",
        "color_2": "#ffffff"
      }
    ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '加入群聊',
  HEO_SOCIAL_CARD_TITLE_2: '加入 Hazelita 交流群',
  HEO_SOCIAL_CARD_TITLE_3: '通往神秘群聊的大门——',
  HEO_SOCIAL_CARD_URL: 'https://qm.qq.com/q/BgoTIxaiB4',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
