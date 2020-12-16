Page({
  data: {
     todo: '',
    info:[],
     searchContent: '',
     todoList: [],
  },
 //添加
 res: function(e) {
   const db = wx.cloud.database()
   db.collection('meal').add({
     data: {
       message:987,
       username: e.detail.value.username
     },
     success: res => {
       // 在返回结果中会包含新创建的记录的 _id
       this.setData({
         username: e.detail.value.username
       })
       wx.showToast({
         title: '新增记录成功',
       })
       console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
     },
     fail: err => {
       wx.showToast({
         icon: 'none',
         title: '新增记录失败'
       })
       console.error('[数据库] [新增记录] 失败：', err)
     }
   })
 },
 onQuery: function(res) {
   const db = wx.cloud.database()
   // 查询当前用户所有的 counters
   db.collection('meal').where({
     message:987
   }).get().then(res=>{
     let list=res.data
     console.log(list)
     this.setData({
       info:list,
     })
   }).catch(err=>{
     console.log(err)
   })
 },
})
