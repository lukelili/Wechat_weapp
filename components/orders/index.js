Component({
  properties: {
    orders: {
      type: Array,
      value: []
    }
  },
  data: {
    isRefresher: false,
    status: {
      toBePaid: {
        color: '#ff9c9b',
        label: '待付款',
        btns: [
          { text: '付款', event: 'handleToBePaid' }
        ]
      },
      pending: {
        color: '#ffce47',
        label: '等待酒店确认',
        btns: [
          { text: '详情', event: 'handleDetails' }
        ]
      },
      stay: {
        color: '#7edfb5',
        label: '已确认 等待入住',
        btns: [
          {
            text: '联系酒店',
            event: 'handleConcatHotel'
          },
          {
            text: '酒店导航',
            event: 'handleNavigate'
          }
        ]
      },
      paid: {
        color: '#7e88ec',
        label: '已消费待评价',
        btns: [
          {
            text: '去评价',
            event: 'handleComment'
          },
          {
            text: '再次预定',
            event: 'handleReservation'
          }
        ]
      },
      timeOut: {
        color: '#999',
        label: '支付超时',
        btns: [
          {
            text: '删除订单',
            event: 'handleDelete'
          },
          {
            text: '再次预定',
            event: 'handleReservation'
          }
        ]
      },
      cancel: {
        color: '#999',
        label: '已取消',
        btns: [
          {
            text: '删除订单',
            event: 'handleDelete'
          },
          {
            text: '再次预定',
            event: 'handleReservation'
          },
          {
            text: '退款进度',
            event: 'handleRefund'
          }
        ]
      }
    }
  },
  methods: {
    // 下拉刷新
    handleRefresher() {
      console.log('下拉被触发')
      setTimeout(() => {
        this.setData({
          isRefresher: false
        })
        wx.showToast({
          title: '数据刷新成功',
          icon: 'none'
        })
      }, 1000)
    },
    // 滚动到底部
    handleScrollLower() {
      wx.showLoading({
        mask: true,
        title: '加载更多...',
      })

      setTimeout(() => {
        wx.hideLoading()
      }, 1000)
      console.log('我还有50px到底部了')
    },
    // 去付款
    handleToBePaid() {},
    // 详情
    handleDetails() {},
  }
})
