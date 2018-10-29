import validation from '../index'

const noV = validation


test('equal', () => {
  expect(noV().equal('huruji').test()).toBe(false);
  expect(noV().equal(1).test('1')).toBe(true);
  expect(noV().equal('s').test('a')).toBe(false);
});

test('exact', () => {
  expect(noV().exact(123).test('123')).toBe(false);
  expect(noV().exact('noV').test('noV')).toBe(true);
})

test('length', () => {
  expect(noV().length(6).test('noV')).toBe(false);
  expect(noV().length(3).test('noV')).toBe(true);
});

test('minLength', () => {
  expect(noV().minLength(5).test('noV')).toBe(false);
  expect(noV().minLength(2).test('noV')).toBe(true);
  expect(noV().minLength(3).test(['n', 'o', 'V'])).toBe(true);
  expect(noV().minLength(5).test(['n', 'o', 'V'])).toBe(false);
})

test('maxLength', () => {
  expect(noV().maxLength(6).test('noV')).toBe(true);
  expect(noV().maxLength(2).test([1, 2, 3])).toBe(false);
})

test('first', () => {
  expect(noV().first('o').test('noV')).toBe(false);
  expect(noV().first(1).test([1, 2, 3])).toBe(true);
})

test('end', () => {
  expect(noV().end('v').test('noV')).toBe(false);
  expect(noV().end('V').test('noV')).toBe(true);
});

test('startWith', () => {
  expect(noV().startWith('o').test('noV')).toBe(false);
  expect(noV().startWith(1).test([1, 2, 3])).toBe(true);
})

test('endWith', () => {
  expect(noV().endWith('v').test('noV')).toBe(false);
  expect(noV().endWith('V').test('noV')).toBe(true);
})

test('pattern', () => {
  expect(noV().pattern(/^n/).test('noV')).toBe(true);
})

test('gt', () => {
  expect(noV().gt(1).test(4)).toBe(true);
  expect(noV().gt(5).test(4)).toBe(false);
})

test('gte', () => {
  expect(noV().gte(4).test(4)).toBe(true)
})

test('lt', () => {
  expect(noV().lt(2).test(4)).toBe(false)
})

test('lte', () => {
  expect(noV().lte(4).test(4)).toBe(true);
})

test('ne', () => {
  expect(noV().ne(4).test(4)).toBe(false);
})

test('range', () => {
  expect(noV().range(2, 5).test(4)).toBe(true);
  expect(noV().range(2, 3).test(4)).toBe(false);
});

test('even', () => {
  expect(noV().even().test(4)).toBe(true)
})

test('odd', () => {
  expect(noV().odd().test(4)).toBe(false);
})

test('negative', () => {
  expect(noV().negative().test(3)).toBe(false);
})

test('positive', () => {
  expect(noV().positive().test(4)).toBe(true)
})

test('mail', () => {
  expect(noV().mail().test('594613537@qq.com')).toBe(true);
  expect(noV().mail().test('nov_support@163.com')).toBe(true);
  expect(noV().mail().test('huruji3#gmail.com')).toBe(false);
})
