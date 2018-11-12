import validation from '../index'

const noV = validation


test('test testplus', () => {
  expect(noV().minLength(3).first('n').testPlus('novs', {
    minLength: '123',
    first: '456'
  })).toEqual({
    result: true,
    step: 2,
    info: '456'
  })
})
