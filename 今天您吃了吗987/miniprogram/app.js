//app.js
App({
  globalData:{
    cai:"tellmewhy"
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        
      // env: 'zeng-8gra54g5e75f2f49',
        traceUser: true,
        
      })
    }

    this.globalData = {}
  }
})

