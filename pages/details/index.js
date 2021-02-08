Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    products: [
      {
        picture: '',
        position: "5张",
        title: '锦江之星（有窗）',
        score: '4.6',
        number: '5000+',
        price: '360',
        red: '新人红包',
        id: 1
      },
      {
        picture: '',
        position: "5张",
        title: '锦江之星（有窗）',
        score: '4.6',
        number: '5000+',
        price: '360',
        red: '新人红包',
        id: 2
      },
      {
        picture: '',
        position: "5张",
        title: '锦江之星（有窗）',
        score: '4.6',
        number: '5000+',
        price: '360',
        red: '新人红包',
        id: 3
      },
      {
        picture: '',
        position: "5张",
        title: '锦江之星（有窗）',
        score: '4.6',
        number: '5000+',
        price: '360',
        red: '新人红包',
        id: 4
      }
    ]
  },
  // 产品子组件的事件
  showChildEvent() {
    console.log(e)
  }
})