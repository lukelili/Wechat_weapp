
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
    const hide = value.length ? false : true
    this.setData({ hiddenModel: hide })
    if (hide) return
    const isChina = /^[\u4e00-\u9fa5]*$/.test(value)
    const parame = {
      match: 'name',
      value: value
    }
    // 非中文
    if (!isChina) {
      parame.match = 'pinyin'
      parame.value = pinyin.getFullChars(value).toLowerCase()
    }
    this.matchCity(parame.match, parame.value)
  },
  matchCity(property, val) {
    // 1. 将值转为字母 取首位 转大写
    const firstVal = pinyin.getFullChars(val).slice(0, 1).toUpperCase()
    // 2. 根据首位的字母 匹配索引 找到对应的数据
    const matchData = this.data.cityList.filter(item => item.idx === firstVal)[0]
    const data = matchData.cities.filter(item => {
      if (item[property].indexOf(val) !== -1) {
        return item
      }
    })
    this.setData({
      cities: data
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
      const a = ''
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