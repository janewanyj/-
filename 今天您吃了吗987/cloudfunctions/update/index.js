const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  return await db.createCollection('meal')
}

  // try {
  //   return await db.collection("meal").doc(event._id).update({
  //     data:{
  //       nickname:event.nickname
  //     }
  //   })
  // }catch(e){
  //   console.error(e)
  // }

