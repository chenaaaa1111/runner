// pages/forwho/forwho.js
import { req } from './../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseItem:['事业','朋友','健康','无所事事','未来','明天','没压力','工作','幸福','家人','爱情','自定义'],
    forwhom:'爱情',
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  chooseFom:function(e){
    console.log(e);
    var froms = e.currentTarget.dataset.form;
    this.setData({ forwhom: froms})
  },
  gotoRun:function(e){
    var self=this;
      wx.navigateTo({
        url: './../running/running?id=' + self.data.name,
      })
  },
  addForwho:function(e){
     var self=this;
    req.reqaddforwho({
      'name':self.data.forwhom,
      'smname': self.data.name,
      'content':'最大'

    },function(res){
      console.log('forWho',res);
      wx.navigateTo({
        url: './../running/running?id='+self.data.name,
      })
    })
  },
  onLoad: function (options) {
       console.log('options',options);
    this.setData({ name: options.id})
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