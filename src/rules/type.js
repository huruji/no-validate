export default {
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
  type(ty) {
    return value => Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1].toLowerCase() === ty.toLowerCase()
  },
}
