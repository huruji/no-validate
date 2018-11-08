const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const phoneRegex = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/
const hexRegex = /^[0-9A-F]{3}$|^[0-9A-F]{6}$/i;
const ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/;

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
  hex() {
    return value => hexRegex.test(value)
  },
  ip() {
    return value => ipRegex.test(value)
  }
}
