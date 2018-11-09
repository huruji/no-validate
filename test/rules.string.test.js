import validation from '../index'

const noV = validation

test('string rules email', () => {
  expect(noV().email().test('594613537@qq.com')).toBe(true);
  expect(noV().email().test('nov_support@163.com')).toBe(true);
  expect(noV().email().test('huruji3#gmail.com')).toBe(false);
})
