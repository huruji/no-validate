export default {
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
}
