
import { citys } from '../../../utils/city'
import Toast from '@vant/weapp/toast/toast'
import pinyin from 'js-pinyin'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList: citys.cityList,
    indexList: [],
    cities: [],
    hiddenModel: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化 => 城市索引 汉字转化拼音
    this.init()
  },
  init() {
    pinyin.setOptions({checkPolyphone: false, charCase: 0});
    const indexs = this.data.cityList.map(item => item.idx)
    this.setData({
      indexList: indexs
    })
    console.log(this.data.cityList)
  },
  // 城市索引选中
  handleIndexSelect(e) {
    Toast({
      message: e.detail,
      duration: 1000
    })
  },
  // 搜索输入框
  onSearchChange(e) {
    const value = e.detail
    if (!value.length) {
      this.setData({
        hiddenModel: true
      })
      return
    }
    this.setData({
      hiddenModel: false
    })
    // 存储值的首位
    let first = ''
    const cityList = this.data.cityList
    let sliceValue = value.slice(0, 1)
    first = sliceValue.toUpperCase()
    if (/^[\u4e00-\u9fa5]*$/.test(sliceValue)) {
      first = pinyin.getFullChars(sliceValue).slice(0, 1)
    }
    const cities = cityList.filter(item => item.idx === first)
    if (value.length === 1) {
      this.setData({
        cities: cities[0].cities
      })
    }
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