
Page({
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
  }
})