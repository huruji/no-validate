import validation from '../index'

const noV = validation

test('number rules gt', () => {
  expect(noV().gt(1).test(4)).toBe(true);
  expect(noV().gt(5).test(4)).toBe(false);
})

test('number rules gte', () => {
  expect(noV().gte(4).test(4)).toBe(true)
})

test('number rules lt', () => {
  expect(noV().lt(2).test(4)).toBe(false)
})

test('number rules lte', () => {
  expect(noV().lte(4).test(4)).toBe(true);
})

test('number rules ne', () => {
  expect(noV().ne(4).test(4)).toBe(false);
})

test('number rules range', () => {
  expect(noV().range(2, 5).test(4)).toBe(true);
  expect(noV().range(2, 3).test(4)).toBe(false);
});

test('number rules even', () => {
  expect(noV().even().test(4)).toBe(true)
})

test('number rules odd', () => {
  expect(noV().odd().test(4)).toBe(false);
})

test('number rules negative', () => {
  expect(noV().negative().test(3)).toBe(false);
})

test('number rules positive', () => {
  expect(noV().positive().test(4)).toBe(true)
})
