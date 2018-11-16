import validation from '../index'

const noV = validation

test('base rules exact', () => {
  expect(noV().exact(123).test('123')).toBe(false);
  expect(noV().exact('noV').test('noV')).toBe(true);
})

test('base rules equal', () => {
  expect(noV().equal('huruji').test()).toBe(false);
  expect(noV().equal(1).test('1')).toBe(true);
  expect(noV().equal('s').test('a')).toBe(false);
});

test('base rules length', () => {
  expect(noV().length(6).test('noV')).toBe(false);
  expect(noV().length(3).test('noV')).toBe(true);
});

test('base rules minLength', () => {
  expect(noV().minLength(5).test('noV')).toBe(false);
  expect(noV().minLength(2).test('noV')).toBe(true);
  expect(noV().minLength(3).test(['n', 'o', 'V'])).toBe(true);
  expect(noV().minLength(5).test(['n', 'o', 'V'])).toBe(false);
})

test('base rules maxLength', () => {
  expect(noV().maxLength(6).test('noV')).toBe(true);
  expect(noV().maxLength(2).test([1, 2, 3])).toBe(false);
})

test('base rules first', () => {
  expect(noV().first('o').test('noV')).toBe(false);
  expect(noV().first(1).test([1, 2, 3])).toBe(true);
})

test('base rules end', () => {
  expect(noV().end('v').test('noV')).toBe(false);
  expect(noV().end('V').test('noV')).toBe(true);
});

test('base rules startWith', () => {
  expect(noV().startWith('o').test('noV')).toBe(false);
  expect(noV().startWith(1).test([1, 2, 3])).toBe(true);
})

test('base rules endWith', () => {
  expect(noV().endWith('v').test('noV')).toBe(false);
  expect(noV().endWith('V').test('noV')).toBe(true);
})

test('base rules pattern', () => {
  expect(noV().pattern(/^n/).test('noV')).toBe(true);
})

test('base rules empty', () => {
  expect(noV().empty().test({ first: undefined, last: 'noV' })).toBe(false);
  expect(noV().empty().test('noV')).toBe(false);
  expect(noV().not.empty().test({ first: undefined, last: 'noV' })).toBe(true);
})
