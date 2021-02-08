Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 产品数据
    products: {
      type: Array,
      value: []
    },
    // 图片宽高
    image: {
      type: Object,
      value: {
        w: '12rem',
        h: '8rem'
      }
    },
    // 排列类型
    mode: {
      type: String,
      value: 'vertical'
    },
    // 是否禁用滑动
    disabled: {
      type: Boolean,
      value: true
    },
    // 当前组件所在的模块
    range: {
      type: String,
      value: ''
    },
    // 跳转方式 在当前页面打开还是去新的页面
    jump: {
      type: String,
      value: '' // currentPage | newPage
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    history: false,
    product: false,
    nearby: false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleToDetails() {
      const jump = this.data.jump
      // 如果jump存在 就抛出一个自定义事件
      if (jump) {
        this.triggerEvent('show')
        return
      }
      // 不能存在的时候 就默认去详情就好啦
      wx.navigateTo({
        url: '/pages/details/index',
      })
    },
    handleOnLine() {
      console.log('online', '在线预定')
    }
  },
  pageLifetimes: {
    show() {
      const range = this.data.range
      range && this.setData({
        [range]: true
      })
    }
  }
})
