import validation from '../index'

const noV = validation

test('modifies every', () => {
  expect(noV().every.gt(2).test([23, 45, 3, 7])).toBe(true);
  expect(noV().every.lt(10).test([23, 3, 5, 7])).toBe(false);
})

test('modifies not', () => {
  expect(noV().not.minLength(5).test('huruji')).toBe(false);
  expect(noV().not.gt(6).test(4)).toBe(true);
})

test('modifies some', () => {
  expect(noV().some.minLength(5).test(['huruji', 'n', 'no', 'noV'])).toBe(true);
  expect(noV().some.first('n').test(['von', 'ovn', 'vno'])).toBe(false);
})
