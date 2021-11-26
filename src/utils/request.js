/*
 * @Author: migor
 * @Date: 2021-11-26 09:48:20
 * @LastEditors: migor
 * @LastEditTime: 2021-11-26 09:59:08
 * @Description: file content
 */
export const request = (url, id, referre, flag = true) => {
  if(!id || !url) {
    return
  }
  const headers = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  }
  const other = {
    "referrer": referre,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }
  const body = {
    "headers": {
      headers
    },
    ...other
  }
  return new Promise((resolve, reject) => {
    const fetchUrl = flag ? url + id : url
    fetch(fetchUrl, body).then(res => res.json()).then(data => resolve(data)).catch(err => reject(err))
  })
}