var appDatas=getApp()
Page({
  data:{
    weizhi:'',
    kouwei:'',
    kouwei1:'',
    fan:'',
    cai:'',
    info:[],
    list:[],
    // a:["A","B","C","D"]
  },

  checkboxchange:function(e){
    console.log('发生change事件,携带value值为',e.detail.value)
    this.setData({weizhi:e.detail.value})
  },
  checkboxchange2:function(e){
    console.log('发生change事件,携带value值为',e.detail.value)
    this.setData({kouwei:e.detail.value})
  },
  checkboxchange3:function(e){
    console.log('发生change事件,携带value值为',e.detail.value)
    this.setData({fan:e.detail.value})
  },
  // checkboxchange4:function(e){
  //   console.log('发生change事件,携带value值为',e.detail.value)
  //  // appDatas.globalData.cai = e.detail.value
  //   //console.log('球球了',this.data.cai)
  //   this.setData({cai:e.detail.value})
  // },

  onQuery: function(res) {
    console.log('再次球球',this.data.cai)
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    //let a=this.data.cai
    db.collection('meal').where({
      // cai1:String(this.data.cai),
      kouwei1:String(this.data.kouwei),
      weizhi1:String(this.data.weizhi),
      fan1:String(this.data.fan)
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
  // suiji: function(res) {
    
  //   const db = wx.cloud.database()
  //   db.collection('meal').where({
  //     _openid:this.data.openid,
  //   })
  //   db.collection('meal')
  //   .aggregate()
  //   .sample({
  //     size: 1
  //   })
  //   .end().then(  res => {  console.log(res.list[0].username); console.log(res.list);   })

  // }
 
})




// Page({
//   data: {
//     checked_value: "",
//     lable: [
//       {
//         value: "食堂",
//         checked: false
//       },
//       {
//         value: "外卖",
//         checked: false
//       },
//       {
//         value: "辣",
//         checked: false
//       },
//       {
//         value: "不辣",
//         checked: false
//       },
//       {
//         value: "酸",
//         checked: false
//       },{
//         value: "甜",
//         checked: false
//       },
//       {
//         value: "米饭",
//         checked: false
//       },
//       {
//         value :"面食",
//         checked:false
//       },
//       {
//         value :"米线",
//         checked:false
//       },
//       {
//         value :"其他",
//         checked:false
//       },
//     ],
//   },
//   change2: function (e) {
//     let items = this.data.lable;
//     let values = e.detail.value;
//     for (let i = 0; i < items.length; i++) {
//       items[i].checked = false;
//       for (let j=0; j < values.length; j++){
//         if(items[i].value == values[j]){
//           items[i].checked = true
//         }
//       }
//     }
//     this.setData({
//       lable: items,
//       checked_value: values.toString()
//     })
//   },
// })
// Page({
//   data:{
//     checkboxchange: "未选中",
//     checked: false,
//   },
//   checkboxchange: function(e){
//     this.setData({
//       checked: !this.data.checked
//     })
//     if(this.data.checked == true){
//       this.setData({
//         checkboxchange:"选中"
//       })
//     }else{
//       this.setData({
//         checkboxchange:"未选中"
//       })
//     }
//   },
// })

