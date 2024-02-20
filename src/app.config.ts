export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index'
  ],
  permission: {
    'scope.userLocation': {
      desc: "你的位置信息将用于小程序的位置接口的效果展示"
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#32ff44',
    selectedColor: '#ddcc11',
    borderStyle: 'black',
    position: "bottom",
    list: [
      {
        pagePath: 'pages/index/index',
        text: "首页"
      },
      {
        pagePath: 'pages/user/index',
        text: "我的"
      }
    ]
  }
})
