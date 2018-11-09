import validation from '../index'

const noV = validation

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
