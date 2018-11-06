const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const phoneRegex = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/

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
  email() {
    return value => emailRegex.test(value);
  },
  lower() {
    return value => value.toLowerCase() === value
  },
  upper() {
    return value => value.toUpperCase() === value
  },
  phoneNumber() {
    return value => phoneRegex.test(value)
  },
  url() {

  },
  base64() {

  },
  json() {
    return (value) => {
      try {
        JSON.parse(value);
        return true;
      } catch (err) {
        return false;
      }
    }
  },
  empty() {

  },
  truthy() {
    return value => !!value
  },
  falsy() {
    return value => !value
  },
  uaIOS() {

  },
  uaAndroid() {

  },
  uaWX() {

  },
  uaQQ() {

  },
  before() {

  },
  after() {

  }
};

export default rules;
