const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const rules = {
  exact(target) {
    return value => value === target;
  },
  equal(target) {
    return value => value == target;
  },
  length(min, max) {
    return value => value.length >= min && value.length <= (max || min);
  },
  minLength(len) {
    return value => value.length >= len;
  },
  maxLength(len) {
    return value => value.length <= len;
  },
  first(target) {
    return value => value[0] === target;
  },
  end(target) {
    return value => value[value.length - 1] === target;
  },
  startWith(target) {
    return value => value[0] === target;
  },
  endWith(target) {
    return value => value[value.length - 1] === target;
  },
  pattern(target) {
    return value => target.test(value);
  },
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
  mail() {
    return value => emailRegex.test(value);
  },
  lower() {
    return value => value.toLowerCase() === value
  },
  upper() {
    return value => value.toUpperCase() === value
  }
};

export default rules;
