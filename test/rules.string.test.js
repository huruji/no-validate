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
