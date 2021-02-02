// pages/user/info/addInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      fullName: '',
      surName: '',
      givenName: '',
      idType: '',
      idNumber: '',
      birthday: '',
      gender: '',
      mobile: ''
    },
    idTypes: [
      {
        name: '身份证'
      },
      {
        name: '护照'
      },
      {
        name: '军官证'
      }
    ],
    isShowIdTypes: false,
    isShowDate: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleShowIdTypes() {
    this.setData({
      isShowIdTypes: true
    })
  },
  // 证件选择
  handleSelectIdTypes(e) {
    const { name } = e.detail
    this.setData({   
      'form.idType': name,
      isShowIdTypes: false
    })
  },
  // 取消证件选择
  handleCancelIdTypes() {
    this.setData({
      isShowIdTypes: false
    })
  },
  handleSelectData() {
    this.setData({
      isShowDate: true
    })
  },
  onClose() {
    this.setData({
      isShowDate: false
    })
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