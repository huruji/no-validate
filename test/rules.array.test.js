import validation from '../index'

const noV = validation

test('array rules unique', () => {
  expect(noV().unique().test([1, 2, 3])).toBe(true);
  expect(noV().unique().test([1, 'n', 'o', 'V', 1])).toBe(false);
})

test('array rules contains', () => {
  expect(noV().contains('n').test(['n', 'o', 'V'])).toBe(true);
  expect(noV().contains('1').test(['n', 'o', 'V', 1])).toBe(false);
})
