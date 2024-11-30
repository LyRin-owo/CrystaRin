const CONFIG = {
  // 首屏信息栏按钮文字
  MAGZINE_HOME_BANNER_ENABLE: true, // 首屏右上角的宣传位
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: 'https://classisland.tech/',
  MAGZINE_HOME_BUTTON_TEXT: '访问 ClassIsland 官网',

  MAGZINE_HOME_HIDDEN_CATEGORY: '', //不希望在首页展示的文章分类，用英文逗号隔开

  MAGZINE_HOME_TITLE: '使用 ClassIsland，并见证课表的又一次进化。',
  MAGZINE_HOME_DESCRIPTION:
    '适用于班级大屏的课表工具，但能做的远胜于显示课表。',
  MAGZINE_HOME_TIPS: '在 GitHub 上获取最新发行版。',

  // 首页底部推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  MAGZINE_RECOMMEND_POST_TAG: '',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: '推荐文章',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // Style
  MAGZINE_RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MAGZINE_RIGHT_DARK || false, // 右侧面板深色模式

  MAGZINE_POST_LIST_COVER: true, // 文章列表显示图片封面
  MAGZINE_POST_LIST_PREVIEW: true, // 列表显示文章预览
  MAGZINE_POST_LIST_CATEGORY: true, // 列表显示文章分类
  MAGZINE_POST_LIST_TAG: true, // 列表显示文章标签

  MAGZINE_POST_DETAIL_CATEGORY: true, // 文章显示分类
  MAGZINE_POST_DETAIL_TAG: true, // 文章显示标签

  // 文章页面联系卡
  MAGZINE_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  MAGZINE_SOCIAL_CARD_TITLE_1: '加入群聊',
  MAGZINE_SOCIAL_CARD_TITLE_2: '加入 Hazelita 交流群',
  MAGZINE_SOCIAL_CARD_TITLE_3: '通往神秘群聊的大门——',
  MAGZINE_SOCIAL_CARD_URL: 'https://qm.qq.com/q/BgoTIxaiB4',

  // 页脚菜单
  MAGZINE_FOOTER_LINKS: [],

  // 旧版本顶部菜单
  MAGZINE_MENU_CATEGORY: true, // 显示分类
  MAGZINE_MENU_TAG: true, // 显示标签
  MAGZINE_MENU_ARCHIVE: true, // 显示归档
  MAGZINE_MENU_SEARCH: true, // 显示搜索

  MAGZINE_WIDGET_TO_TOP: true // 跳回顶部
}
export default CONFIG
