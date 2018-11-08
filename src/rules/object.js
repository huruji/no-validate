import utils from '../utils'
import deleteKey from '../utils/deleteKey';

export default {
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
}
