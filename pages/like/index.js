import { getItem } from '../../utils/storage'
Page({
  data: {
    isLogin: false
  },
  onLoad: function (options) {
    this.setData({
      isLogin: !getItem('userInfo')
    })
  },
  onShow() {
    this.setData({
      isLogin: !getItem('userInfo')
    })
  }
})