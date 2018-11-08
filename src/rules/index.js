import arrayRules from './array'
import baseRules from './base'
import dateRules from './date'
import numberRules from './number'
import objectRules from './object'
import stringRules from './string'
import typeRules from './type'

const rules = {
  ...arrayRules,
  ...baseRules,
  ...dateRules,
  ...numberRules,
  ...objectRules,
  ...stringRules,
  ...typeRules
}

export default rules;
