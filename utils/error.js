import { getCurrentPageUrl, formatTime } from './common'
// var fundebug = require('../libs/fundebug.min.js');
/**
 * 
 * @param {string} name 错误名字
 * @param {string} action 错误动作描述
 * @param {string} info 错误信息，通常是 fail 返回的
 */
export const logError = (name, action, info) => {
  if (!info) {
    info = 'empty'
  }
  try {
    let deviceInfo = wx.getSystemInfoSync()
    var device = JSON.stringify(deviceInfo)
  } catch (e) {
    console.error('not support getSystemInfoSync api', err.message)
  }
  let time = formatTime(new Date())
  console.error(time, name, action, JSON.stringify(info), device)
  if (typeof action !== 'object') {
    // fundebug.notify(name, action, info)
  }
  // fundebug.notifyError(info, { name, action, device, time })
  if (typeof info === 'object') {
    info = JSON.stringify(info)
  }
  getApp().globalData.elkReport.send({ message:info,status:0})
  wx.reportAnalytics('error', {
    page: getCurrentPageUrl(),
    device: device,
    time: time,
    content: info,
    event: action
  })
}

export const notify = (name, action, info) => {
  if (!info) {
    info = 'empty'
  }
  try {
    let deviceInfo = wx.getSystemInfoSync()
    var device = JSON.stringify(deviceInfo)
  } catch (e) {
    console.error('not support getSystemInfoSync api', err.message)
  }
  let time = formatTime(new Date())
  // fundebug.notify(name)
  
  console.log(name, action)
  getApp().globalData.elkReport.send({ message:info,status:0})
}

export const reportError = (data) => {
  wx.reportAnalytics(name, filed)
}


