export default {
  gt(target) {
    return value => value > target;
  },
  gte(target) {
    return value => value >= target;
  },
  lt(target) {
    return value => value < target;
  },
  lte(target) {
    return value => value <= target;
  },
  ne(target) {
    return value => value !== target;
  },
  range(min, max) {
    return value => value >= min && value <= max;
  },
  even() {
    return value => value % 2 === 0;
  },
  odd() {
    return value => value % 2 !== 0;
  },
  negative() {
    return value => value < 0;
  },
  positive() {
    return value => value >= 0;
  },
  uaIOS() {

  },
  uaAndroid() {

  },
  uaWX() {

  },
  uaQQ() {

  },
}
