import utils from '../utils'
import deleteKey from '../utils/deleteKey';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const phoneRegex = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/
const hexRegex = /^[0-9A-F]{3}$|^[0-9A-F]{6}$/i;
const ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/;
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

  },
  type(ty) {
    return value => Object.prototype.toString.call(value).march(/^\[object\s(.*)\]$/)[1] === ty.toLowerCase()
  },
  empty() {
    return (value) => {
      let result = false;
      if (typeof value === 'string' || Array.isArray(value)) {
        result = !!value.length
      } else if (typeof value === 'object') {
        result = !!Object.keys(value).length;
      }
      return result;
    }
  },
  falsyObj(defObj) {
    return function check(value, del = true) {
      let result = true;
      if (typeof value === 'object') {
        const tempV = Object.assign({}, value);

        if (del && defObj) {
          const keys = Object.keys(defObj);
          for (let i = 0; i < keys.length; i++) {
            if (utils.get(tempV, `${keys[i]}`) !== defObj[keys[i]]) {
              return false;
            }
            deleteKey(tempV, `${keys[i]}`)
          }
        }

        const tempVKeys = Object.keys(tempV);

        for (let i = 0; i < tempVKeys.length; i++) {
          if (typeof tempV[tempVKeys[i]] === 'object') {
            result = check(tempV[tempVKeys[i]], false);
            console.log(result);
            if (!result) break
          } else if (tempV[tempVKeys[i]]) {
            result = false;
            break;
          }
        }
      } else if (value !== null && value !== undefined && value !== '' && value !== false) result = false;

      return result
    }
  },
  number() {
    return value => typeof value === 'number'
  },
  array() {
    return value => Array.isArray(value)
  },
  string() {
    return value => typeof value === 'string'
  },
  boolean() {
    return value => typeof value === 'boolean'
  },
  float() {
    return value => value % 1 !== 0
  },
  nan() {
    return value => Number.isNaN(value)
  },
  null() {
    return value => value === null
  },
  object() {
    return value => (typeof value === 'object' && !Array.isArray(value) && value !== null)
  },
  unique() {
    return value => [...new Set(value)].length === value.length
  },
  contains(search) {
    return (value) => {
      let result = true;
      if (Array.isArray(search)) {
        result = search.every(e => value.indexOf(e) > -1)
      } else {
        result = value.indexOf(search) > -1
      }
      return result
    }
  },
  hex() {
    return value => hexRegex.test(value)
  },
  ip() {
    return value => ipRegex.test(value)
  }
}

export default rules;
