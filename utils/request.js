const baseUrl = 'https://www.fastmock.site/mock/62c3afa6b49110a5c38a7f81f1ca12fa/mobile'
export const request = (parame) => {
  wx.showLoading()
  return new Promise((resolve, reject) => {
    wx.request({
      ...parame,
      url: baseUrl + parame.url,
      success(res) {
        const { code, message } = res.data
        if (code !== 0) {
          wx.showToast({
            title: message,
            icon: 'none',
            duration: 2000
          })
          return
        }
        resolve(res)
      },
      fail(error) {
        reject(error)
      },
      complete() {
        wx.hideLoading()
      }
    })
  })
}