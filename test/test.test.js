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

  expect(noV().minLength(1).maxLength(3).first('n')
    .testPlus('noVs', {
      minLength: 'mingLength',
      maxLength: 'maxLength',
      first: 'first'
    })).toEqual({
    result: false,
    step: 2,
    info: 'maxLength'
  })
})
