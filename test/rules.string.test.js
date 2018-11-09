import {
  Base64
} from 'js-base64'

import validation from '../index'

const noV = validation


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
