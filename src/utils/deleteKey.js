function deleteKey(obj, keyStr) {
  const keyArr = keyStr.split('.');
  keyArr.reduce((pre, e, i) => {
    if (i == keyArr.length - 1 && pre[e]) {
      delete pre[e]
    }
    return pre[e] ? pre[e] : {}
  }, obj)
}

export default deleteKey
