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

test('rule required', () => {
  expect(noV().required('name', 'age').test({
    name: 'nov',
    age: '1'
  })).toBe(true);
  expect(noV().required('name', 'age').test({
    name: null,
    age: 12
  }))
  expect(noV().required('name', 'sex').test({
    name: 'nov',
    age: '12'
  })).toBe(false)
})
