import validation from '../index'

const noV = validation

test('rules equal', () => {
  expect(noV().equal('huruji').test()).toBe(false);
  expect(noV().equal(1).test('1')).toBe(true);
  expect(noV().equal('s').test('a')).toBe(false);
});

test('rules exact', () => {
  expect(noV().exact(123).test('123')).toBe(false);
  expect(noV().exact('noV').test('noV')).toBe(true);
})

test('rules length', () => {
  expect(noV().length(6).test('noV')).toBe(false);
  expect(noV().length(3).test('noV')).toBe(true);
});

test('rules minLength', () => {
  expect(noV().minLength(5).test('noV')).toBe(false);
  expect(noV().minLength(2).test('noV')).toBe(true);
  expect(noV().minLength(3).test(['n', 'o', 'V'])).toBe(true);
  expect(noV().minLength(5).test(['n', 'o', 'V'])).toBe(false);
})

test('rules maxLength', () => {
  expect(noV().maxLength(6).test('noV')).toBe(true);
  expect(noV().maxLength(2).test([1, 2, 3])).toBe(false);
})

test('rules first', () => {
  expect(noV().first('o').test('noV')).toBe(false);
  expect(noV().first(1).test([1, 2, 3])).toBe(true);
})

test('rules end', () => {
  expect(noV().end('v').test('noV')).toBe(false);
  expect(noV().end('V').test('noV')).toBe(true);
});

test('rules startWith', () => {
  expect(noV().startWith('o').test('noV')).toBe(false);
  expect(noV().startWith(1).test([1, 2, 3])).toBe(true);
})

test('rules endWith', () => {
  expect(noV().endWith('v').test('noV')).toBe(false);
  expect(noV().endWith('V').test('noV')).toBe(true);
})

test('rules pattern', () => {
  expect(noV().pattern(/^n/).test('noV')).toBe(true);
})

test('rules gt', () => {
  expect(noV().gt(1).test(4)).toBe(true);
  expect(noV().gt(5).test(4)).toBe(false);
})

test('rules gte', () => {
  expect(noV().gte(4).test(4)).toBe(true)
})

test('rules lt', () => {
  expect(noV().lt(2).test(4)).toBe(false)
})

test('rules lte', () => {
  expect(noV().lte(4).test(4)).toBe(true);
})

test('rules ne', () => {
  expect(noV().ne(4).test(4)).toBe(false);
})

test('rules range', () => {
  expect(noV().range(2, 5).test(4)).toBe(true);
  expect(noV().range(2, 3).test(4)).toBe(false);
});

test('rules even', () => {
  expect(noV().even().test(4)).toBe(true)
})

test('rules odd', () => {
  expect(noV().odd().test(4)).toBe(false);
})

test('rules negative', () => {
  expect(noV().negative().test(3)).toBe(false);
})

test('rules positive', () => {
  expect(noV().positive().test(4)).toBe(true)
})

test('rules email', () => {
  expect(noV().email().test('594613537@qq.com')).toBe(true);
  expect(noV().email().test('nov_support@163.com')).toBe(true);
  expect(noV().email().test('huruji3#gmail.com')).toBe(false);
})

test('rules falsyObj', () => {
  expect(noV().falsyObj({
    'a.b': 2
  }).test({
    a: {
      b: 2,
      c: null
    }
  })).toBe(true);
  expect(noV().falsyObj().test({
    a: '',
    b: {
      c: []
    }
  })).toBe(true)
  expect(noV().falsyObj().test({
    a: 'noV',
    b: {}
  })).toBe(false)
})

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

test('test testplus', () => {
  expect(noV().minLength(3).first('n').testPlus('novs', {
    minLength: '123',
    first: '456'
  })).toEqual({
    result: true,
    info: '456'
  })
})
