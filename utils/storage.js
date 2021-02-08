export function getItem(name) {
  const data = wx.getStorageSync(name)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export function setItem(name, value) {
  console.log(name, value)
  if (typeof value !== 'object') {
    wx.setStorageSync(name, value)
  } else {
    wx.setStorageSync(name, JSON.stringify(value))
  }
}

export function removeItem(name) {
  return wx.removeStorageSync(name)
}

export function clear() {
  wx.clearStorageSync()
}