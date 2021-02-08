import { request } from '../../utils/request'
Page({
  data: {
    active: 'hot',
    products: [
      {
        picture: '',
        position: "南锣鼓巷附近",
        title: '锦江之星（北京王府井店）',
        score: '4.6',
        number: '5000+',
        price: '360',
        red: '新人红包',
        id: 1
      },
      {
        picture: '',
        position: "南锣鼓巷附近",
        title: '锦江之星（北京王府井店）',
        score: '4.6',
        number: '5000+',
        price: '360',
        red: '新人红包',
        id: 2
      },
      {
        picture: '',
        position: "南锣鼓巷附近",
        title: '锦江之星（北京王府井店）',
        score: '4.6',
        number: '5000+',
        price: '360',
        red: '新人红包',
        id: 3
      },
      {
        picture: '',
        position: "南锣鼓巷附近",
        title: '锦江之星（北京王府井店）',
        score: '4.6',
        number: '5000+',
        price: '360',
        red: '新人红包',
        id: 4
      }
    ]
  },
  async onLoad(options) {
    const res = await request({ url: '/hotel/list', data: {}, method: 'GET'})
    const { size, list } = res.data.data
  },
  handleToDetails() {
    console.log('ss')
  },
  handleOnLine() {
    console.log('online')
  }
})