function getPlus(obj, path = []) {
  return new Proxy(() => {}, {
    get(target, property) {
      return getPlus(obj, path.concat(property))
    },
    apply(target, self, args) {
      let val = obj;
      for (let i = 0; i < path.length; i++) {
        if (val === null || val === undefined) break;
        val = val[path[i]];
      }
      if (val === null || val === undefined) {
        val = args[0]
      }
      return val;
    }
  })
}

export default getPlus;
