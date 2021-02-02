// components/coupons/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    coupons: {
      type: Array,
      value: []
    },
    type: {
      type: String,
      value: 'employ'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    operator: {
      employ: {
        btnText: '立即使用',
        event: 'handleEmploy',
        plain: false
      },
      receive: {
        btnText: '领取',
        event: 'handleRecive',
        plain: true
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 使用优惠券
    handleEmploy() {
      console.log('使用优惠券')
    },
    // 领取优惠券
    handleRecive() {
      console.log('领取优惠券')
    }
  }
})
