const modifies = {
  not() {
    return fn => value => !fn(value)
  },
  some() {
    return fn => value => value.some(fn)
  },
  every() {
    return fn => value => value.every(fn)
  },
};

export default modifies;
