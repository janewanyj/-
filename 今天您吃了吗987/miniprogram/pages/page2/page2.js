// wx.cloud.callFunction({
//   name:'update',
//   complete:res=>{
//     console.log('callfunction test result:',res)
//   },
// })
//上面是我们的云函数,貌似不可以
Page({
  onAdd:function(){
    const db = wx.cloud.database()
    db.collection('meal').add({
    // data 字段表示需新增的 JSON 数据
    data: {
          _id:1,
          username:"鸡蛋灌饼",
          cai1:"肉肉",
          kouwei1:"不辣",
          weizhi1:"食堂",
          fan1:"饼类",
          area:"学一"
    },
    success: function(res) {
      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      console.log(res)
    }
  })
},
onAdd2:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:2,
        username:"脆皮鸡饭",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"米饭",
        area:"学一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd3:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:3,
        username:"烤肉拌饭",
        cai1:"肉肉",
        cai2:"菜菜",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"米饭",
        area:"学一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd4:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:4,
        username:"煎饼",
        cai1:"菜菜",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"饼类",
        area:"学一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd5:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:5,
        username:"黄焖鸡米饭",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"米饭",
        area:"学一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd10:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:10,
        username:"北京烤鸭",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"饼类",
        area:"教四"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},onAdd6:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:6,
        username:"酸菜鱼",
        cai1:"肉肉",
        kouwei1:"辣",
        weizhi1:"食堂",
        fan1:"米饭",
        area:"教二"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},onAdd7:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:7,
        username:"庆丰包子",
        cai1:"肉肉",
        cai2:"菜菜",
        kouwei1:"不辣",
        weizhi1:"外卖",
        fan1:"面食",
        area:"美团"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd8:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:8,
        username:"馄饨",
        cai1:"肉肉",
        cai2:"菜菜",
        kouwei1:"不辣",
        weizhi1:"外卖",
        fan1:"面食",
        area:"美团"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd9:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:9,
        username:"米线",
        cai1:"菜菜",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"其他",
        area:"学一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd11:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:11,
        username:"麻辣烫",
        cai1:"菜菜",
        kouwei1:"辣",
        weizhi1:"食堂",
        fan1:"其他",
        area:"教一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd12:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:12,
        username:"螺蛳粉",
        cai1:"其他",
        kouwei1:"辣",
        weizhi1:"外卖",
        fan1:"其他",
        area:"美团"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd13:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:13,
        username:"兰州拉面",
        cai1:"其他",
        kouwei1:"辣",
        weizhi1:"食堂",
        fan1:"其他",
        area:"学二"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd14:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:14,
        username:"肯德基",
        cai1:"肉肉",
        kouwei1:"辣",
        weizhi1:"外卖",
        fan1:"其他",
        area:"美团"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd15:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:15,
        username:"粥",
        cai1:"菜菜",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"其他",
        area:"学一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd16:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:16,
        username:"扬州炒饭",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"米饭",
        area:"学一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd17:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:17,
        username:"水饺",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"面食",
        area:"教四"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd18:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:18,
        username:"火锅",
        cai1:"肉肉",
        kouwei1:"辣",
        weizhi1:"外卖",
        fan1:"菜菜",
        area:"教五"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd19:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:19,
        username:"火锅",
        cai1:"肉肉",
        kouwei1:"辣",
        weizhi1:"外卖",
        fan1:"菜菜",
        area:"教五"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd20:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:20,
        username:"牛肉面",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"面食",
        area:"教一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd21:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:21,
        username:"榴莲千层蛋糕",
        cai1:"其他",
        kouwei1:"不辣",
        weizhi1:"外卖",
        fan1:"甜点饮品",
        area:"美团 推荐喜舍喜茶"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd22:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:22,
        username:"布丁红豆奶茶",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"外卖",
        fan1:"甜点饮品",
        area:"美团 推荐快乐柠檬/一点点"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd23:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:23,
        username:"鳗鱼照烧鸡双拼饭",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"外卖",
        fan1:"米饭",
        area:"美团 和番丼饭"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd24:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:24,
        username:"紫菜包饭",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"外卖",
        fan1:"米饭",
        area:"美团 推荐喵喵寿司.紫菜包饭"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd25:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:25,
        username:"汉堡",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"美团",
        fan1:"炸鸡汉堡",
        area:"美团 推荐华莱士炸鸡汉堡"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd26:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:26,
        username:"韩式炸鸡",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"外卖",
        fan1:"其他",
        area:"美团 推荐熊家韩式炸鸡"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd27:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:27,
        username:"披萨",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"外卖",
        fan1:"饼类",
        area:"美团 达美乐披萨"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd28:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:28,
        username:"梅菜扣肉盖饭",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"米饭",
        area:"学一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd29:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:29,
        username:"孜然牛肉+米饭",
        cai1:"肉肉",
        kouwei1:"辣",
        weizhi1:"外卖",
        fan1:"米饭",
        area:"美团 推荐百香国中式快餐"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},
onAdd30:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:30,
        username:"清炒西兰花+辣子鸡丁（偏甜口）+米饭",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"米饭",
        area:"教一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd31:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:31,
        username:"土家大饼",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"饼类",
        area:"教一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd32:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:32,
        username:"肉末豆角面",
        cai1:"肉肉",
        kouwei1:"辣",
        weizhi1:"食堂",
        fan1:"面食",
        area:"教一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd33:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:33,
        username:"泡芙",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"甜点饮品",
        area:"食堂隔壁面包房"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd34:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:34,
        username:"咖喱鸡肉清真炒饭",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"食堂",
        fan1:"米饭",
        area:"学二"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd35:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:35,
        username:"麻辣香锅+米饭",
        cai1:"肉肉",
        kouwei1:"辣",
        weizhi1:"食堂",
        fan1:"米饭",
        area:"学一"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd36:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:36,
        username:"老坛酸菜牛肉方便面",
        cai1:"肉肉",
        kouwei1:"辣",
        weizhi1:"食堂",
        fan1:"面食",
        area:"食堂对面小麦铺"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

onAdd37:function(){
  const db = wx.cloud.database()
  db.collection('meal').add({
  // data 字段表示需新增的 JSON 数据
  data: {
        _id:37,
        username:"肯德基炸鸡汉堡",
        cai1:"肉肉",
        kouwei1:"不辣",
        weizhi1:"外卖",
        fan1:"其他",
        area:"kfc 建议微信小程序下单 优惠更多"
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
},

})
