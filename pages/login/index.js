// pages/login/index.js
import { login } from '../../utils/asyncWx'
import { setItem } from '../../utils/storage'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取用户信息
  async getUserInfo(e) {
    const { encryptedData, iv, rawData, signature, userInfo } = e.detail
    // 拒绝授权
    if (!userInfo) {
      wx.showToast({ title: '用户未授权', icon: 'none', duration: 2000 })
      return
    }
    // 发送 res.code 到后台换取 openId, sessionKey, unionId
    const { code } = await login()
    setItem('userInfo', userInfo)
    getApp().globalData.userInfo = userInfo
    wx.navigateBack({ delta: 1 })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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