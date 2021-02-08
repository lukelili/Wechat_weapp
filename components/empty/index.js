Component({
  properties: {
    desc: {
      type: String,
      value: '你还没有登录，请登录后查看'
    },
    image: {
      type: String,
      value: '/icon/un_login.png' // error | network | search | default
    },
    url: {
      type: String,
      value: ''
    },
    btnText: {
      type: String,
      value: '去登录'
    }
  }
})
