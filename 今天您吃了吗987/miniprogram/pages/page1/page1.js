// pages/index/page1.js
Page({
    data:{
      caidan:"",
      list: [
        {
          id: 0,
          name: "1"
        },
        {
          id: 1,
          name: "2"
        },
        {
          id: 2,
          name: "3"
        },
  
        {
          id: 3,
          name: "4"
        }
      ],
    },

suiji(){
  this.setData({
    i:Math.floor(Math.random() * 4)
  })
 console.log("") 
},
})
