import validation from '../index'

const noV = validation

test('type rules number', () => {
  expect(noV().number().test(12)).toBe(true);
  expect(noV().number().test('12')).toBe(false);
})

test('type rules array', () => {
  expect(noV().array().test(['n', 'o', 'V'])).toBe(true);
})

test('type rules string', () => {
  expect(noV().string().test('noV')).toBe(true);
})

test('type rules boolean', () => {
  expect(noV().boolean().test(1.2)).toBe(false);
  expect(noV().boolean().test(!1.2)).toBe(true);
})

test('type rules float', () => {
  expect(noV().float().test(1.2)).toBe(true);
  expect(noV().float().test(198)).toBe(false);
})

test('type rules nan', () => {
  expect(noV().nan().test(NaN)).toBe(true);
})

test('type rules null', () => {
  expect(noV().null().test(null)).toBe(true);
  expect(noV().null().test('noV')).toBe(false);
})

test('type rules object', () => {
  expect(noV().object().test('nov')).toBe(false);
  expect(noV().object().test({
    name: 'noV'
  })).toBe(true)
})

test('type rules type', () => {
  expect(noV().type('regexp').test(/^\d+$/)).toBe(true);
  expect(noV().type('map').test(new Map())).toBe(true);
})
