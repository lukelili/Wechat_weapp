import { getItem } from '../../utils/storage'
Page({
  data: {
    userInfo: {
      avatarUrl: '',
      gender: 1,
      nickName: '',
      province: ''
    },
    // 更多功能
    cells: [
      {
        icon: 'vip-card-o',
        title: '会员中心',
        url: '/pages/user/member/index'
      },
      {
        icon: 'after-sale',
        title: '我的钱包',
        url: '/pages/user/wallet/index'
      },
      {
        icon: 'coupon-o',
        title: '领券中心',
        url: '/pages/user/couponCenter/index'
      },
      {
        icon: 'envelop-o',
        title: '常用信息',
        url: '/pages/user/info/index'
      },
      {
        icon: 'thumb-circle-o',
        title: '我的评价',
        url: '/pages/user/comment/index'
      }
    ]
  },
  onShow() {
    this.initUser()
  },
  initUser() {
    const userInfo = getItem('userInfo')
    this.setData({
      userInfo: Object.assign({}, this.data.userInfo, userInfo)
    })
  }
})