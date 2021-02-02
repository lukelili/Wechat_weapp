// pages/user/orders/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'all',
    orders: [
      {
        status: 'toBePaid',
        name: '贯通现代酒店（北京前门店）',
        type: '经济双人床（无窗）',
        start: '12月18',
        end: '12月18',
        price: '667',
        id: 1
      },
      {
        status: 'pending',
        name: '贯通现代酒店（北京前门店）',
        type: '经济双人床（无窗）',
        start: '12月20',
        end: '12月20',
        price: '320',
        id: 2
      },
      {
        status: 'stay',
        name: '贯通现代酒店（北京前门店）',
        type: '经济双人床（无窗）',
        start: '12月20',
        end: '12月20',
        price: '320',
        id: 3
      },
      {
        status: 'paid',
        name: '贯通现代酒店（北京前门店）',
        type: '经济双人床（无窗）',
        start: '12月20',
        end: '12月20',
        price: '320',
        id: 4
      },
      {
        status: 'timeOut',
        name: '贯通现代酒店（北京前门店）',
        type: '经济双人床（无窗）',
        start: '12月20',
        end: '12月20',
        price: '320',
        id: 5
      },
      {
        status: 'cancel',
        name: '贯通现代酒店（北京前门店）',
        type: '经济双人床（无窗）',
        start: '12月20',
        end: '12月20',
        price: '320',
        id: 6
      }
    ],
    filtersData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      active: options.type
    })
  },
  handleTabChange(e) {
    const { name } = e.detail
    const filtersData = this.data.orders.filter(item => item.status === name)
    this.setData({
      filtersData: filtersData
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