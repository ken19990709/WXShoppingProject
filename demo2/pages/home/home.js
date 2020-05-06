// pages/home/home.js
import request from "../../JavaScriptCode/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:['https://img13.360buyimg.com/pop/s590x470_jfs/t1/117036/28/3161/52257/5ea67b9cEed6c890d/372d2fa97286919d.jpg.webp','https://img12.360buyimg.com/pop/s590x470_jfs/t1/90803/11/19652/80070/5ea13f64E34175b81/fb1d28ba917fd8b1.jpg.webp','https://img11.360buyimg.com/da/s590x470_jfs/t1/101906/25/19268/97220/5ea2ae92Ee1876bdb/44f7265ea3518223.jpg.webp','https://img30.360buyimg.com/pop/s590x470_jfs/t1/114880/20/3561/74429/5ea7f7c7E9e5d3c40/9c98af9c9dabb48e.jpg.webp'],
    // recommend:{url:["http://img30.360buyimg.com/babel/s380x300_jfs/t1/116747/15/1326/69498/5e96bd9dEb9c6d528/9a89ba33ec86088a.jpg.webp","http://img12.360buyimg.com/babel/s380x300_jfs/t1/113045/23/3085/90081/5ea65198Ee1f45d84/8ac3ebc8ba340272.jpg.webp","http://img11.360buyimg.com/pop/s380x300_jfs/t1/112670/25/1263/23615/5e96ac19E2542587f/11d1a625f3aa4958.jpg.webp"],
    // text:["实惠大件","时令生鲜","热卖单品"]}
    recommend:[{url:"http://img30.360buyimg.com/babel/s380x300_jfs/t1/116747/15/1326/69498/5e96bd9dEb9c6d528/9a89ba33ec86088a.jpg.webp",text:"实惠大件"},{url:"http://img12.360buyimg.com/babel/s380x300_jfs/t1/113045/23/3085/90081/5ea65198Ee1f45d84/8ac3ebc8ba340272.jpg.webp",text:"时令生鲜"},{url:"http://img11.360buyimg.com/pop/s380x300_jfs/t1/112670/25/1263/23615/5e96ac19E2542587f/11d1a625f3aa4958.jpg.webp",text:"热卖单品"}],
    tab_controls:['流行','新款','精选'],
    page_number:0,
    type:"流行",
    detail:[],
    more_detail_button:"加载更多"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  get_detail_data()
  {
    request({
      url:"http://192.168.56.1:5000/",
      data:{page:this.data.page_number,type:this.data.type}

    }).then(res=>{
      this.setData(
        {
          detail:res.data.data
        }
      )
      
    }).catch(err=>{
      console.log(err)
    })
  },

  more_detail(){
    this.setData({page_number:this.data.page_number+1});
    request({
      url:"http://192.168.56.1:5000/",
      data:{page:this.data.page_number,type:this.data.type}

    }).then(res=>{
     if(res.data.data!=null)
     { this.setData(
        {
          detail:this.data.detail.concat(res.data.data)
        }
      )}
    else
    {
      this.setData({more_detail_button:"已经到底了"})
    }

      }).catch(err=>{
      console.log(err)
    })


  },

  onReachBottom(res){
    console.log(res);
  },
  onLoad: function (options) {
    this.get_detail_data();
  },
  control_tab_control(res){
    
    this.setData({
      
      type:this.data.tab_controls[res.detail.currentIndex],
      page_number:0
    });
    this.get_detail_data();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */

  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})