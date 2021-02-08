export const login = () => {
  return new Promise((resolve, reject) => {
    // 发送 res.code 到后台换取 openId, sessionKey, unionId
    wx.login({
      timeout: 10000,
      success: (res) => {
        resolve(res)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}