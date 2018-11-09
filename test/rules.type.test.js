import validation from '../index'

const noV = validation

test('type rules number', () => {
  expect(noV().number().test(12)).toBe(true);
  expect(noV().number().test('12')).toBe(false);
})
