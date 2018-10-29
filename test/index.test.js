import validation from '../index';

const noV = validation;


test('equal', () => {
  expect(noV().equal('huruji').test()).toBe(false);
  expect(noV().equal(1).test('1')).toBe(true);
  expect(noV().equal('s').test('a')).toBe(false);
});
