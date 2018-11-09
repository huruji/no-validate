const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const phoneRegex = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
const hexRegex = /^[0-9A-F]{3}$|^[0-9A-F]{6}$/i;
const ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/;
const uaIOSRegex = /((iPad)|(iPod)|iPhone).*OS\s([\d_]+)/
const uaAndroidRegex = /(Android);?[\s/]+([\d.]+)?/
const uaWXRegex = /micromessenger/i
const uaQQRegex = /m?qq(browser)?/i
const urlRegex = /^((?:(?:https?|ftps?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
const notBase64Regex = /[^A-Z0-9+/=]/i

export default {
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
    return value => urlRegex.test(value)
  },
  base64() {
    return value => !notBase64Regex.test(value)
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
  hex() {
    return value => hexRegex.test(value)
  },
  ip() {
    return value => ipRegex.test(value)
  },
  uaIOS() {
    return value => uaIOSRegex.test(value)
  },
  uaAndroid() {
    return value => uaAndroidRegex.test(value)
  },
  uaWX() {
    return value => uaWXRegex.test(value)
  },
  uaQQ() {
    return value => uaQQRegex.test(value)
  },
}
