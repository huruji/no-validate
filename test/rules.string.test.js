import {
  Base64
} from 'js-base64'

import validation from '../index'

const noV = validation

const ios = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1'
const android = 'Mozilla/5.0 (Linux; U; Android 6.0.1; zh-cn; MI 5s Build/MXB48T) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/9.7.2'
const wx = 'Mozilla/5.0 (Linux; Android 6.0.1; MI 5s Build/MXB48T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044306 Mobile Safari/537.36 MicroMessenger/6.6.7.1320(0x26060739) NetType/WIFI Language/zh_CN'
const qq = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79 QQ/7.8.8.420 V1_IPH_SQ_7.8.8_1_APP_A Pixel/1080 Core/UIWebView Device/Apple(iPhone 6sPlus) NetType/WIFI QBWebViewType/1'

test('string rules email', () => {
  expect(noV().email().test('594613537@qq.com')).toBe(true);
  expect(noV().email().test('nov_support@163.com')).toBe(true);
  expect(noV().email().test('huruji3#gmail.com')).toBe(false);
})

test('string rules lower', () => {
  expect(noV().lower().test('nov')).toBe(true);
  expect(noV().lower().test('noV')).toBe(false);
})

test('string rules upper', () => {
  expect(noV().upper().test('nov')).toBe(false);
  expect(noV().upper().test('NOV')).toBe(true);
})

test('string rules phoneNumber', () => {
  const phone = '18020481871';
  expect(noV().phoneNumber().test(phone)).toBe(true);
  expect(noV().phoneNumber().test(phone.substr(1))).toBe(false);
})

test('string rules url', () => {
  const urls = [
    'http://www.baidu.com',
    'https://google.com',
    '//jd.com'
  ]
  urls.forEach((e) => {
    expect(noV().url().test(e)).toBe(true);
  })
})

test('string rules base64', () => {
  expect(noV().base64().test(Base64.encode('noV'))).toBe(true);
  expect(noV().base64().test(Base64.encode('灰风也叫忽如寄'))).toBe(true);
})

test('string rules json', () => {
  const name = ['n', 'o', 'V']
  const person = {
    name: 'nov',
    age: 12
  }

  expect(noV().json().test(JSON.stringify(name))).toBe(true);
  expect(noV().json().test(JSON.stringify(name).slice(2))).toBe(false);
  expect(noV().json().test(JSON.stringify(person))).toBe(true);
})


test('string rules hex', () => {
  expect(noV().hex().test('fff')).toBe(true)
  expect(noV().hex().test('f5f5fh')).toBe(false)
})

test('strin rules ip', () => {
  expect(noV().ip().test('8.8.8.8')).toBe(true)
  expect(noV().ip().test('192.168.1.1')).toBe(true)
})

test('string rules uaIOS', () => {
  expect(noV().uaIOS().test(ios)).toBe(true)
  expect(noV().uaIOS().test(android)).toBe(false)
})

test('string rules uaAndroid', () => {
  expect(noV().uaAndroid().test(android)).toBe(true)
  expect(noV().uaAndroid().test(ios)).toBe(false)
})

test('string rules uaWX', () => {
  expect(noV().uaWX().test(wx)).toBe(true)
})

test('string rules uaQQ', () => {
  expect(noV().uaQQ().test(qq)).toBe(true)
})
