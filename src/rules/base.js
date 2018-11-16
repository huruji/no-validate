export default {
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
  truthy() {
    return value => !!value
  },
  falsy() {
    return value => !value
  },
  empty() {
    return (value) => {
      let result = false;
      if (typeof value === 'string' || Array.isArray(value)) {
        result = !value.length
      } else if (typeof value === 'object' && value !== null) {
        result = !Object.keys(value).length;
      } else if (typeof value === 'undefined' || value === null) {
        result = true
      }
      return result;
    }
  },
}
