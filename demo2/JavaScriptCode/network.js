export default function(options)
{
  return new Promise((resolve,reject)=>{
  console.log("调用网络请求接口")
  wx.request({
    url: options.url,
    method: options.method||'get',
    data:options.data,
    success:function(res){
      resolve(res)
    },
    fail:function(res){
      reject(err)
    }
  })
})
}