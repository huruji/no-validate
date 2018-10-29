import modifies from './modifies';
import rules from './rules';
import Context from './context';

const proxyContext = function (ctx) {
  return new Proxy(ctx, {
    get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }
      const newCtx = proxyContext(ctx.clone());
      let re;
      if (prop in modifies) {
        re = newCtx.addModify(modifies[prop]);
      }

      if (prop in rules) {
        re = newCtx.addRule(rules[prop]);
      }

      return re;
    }
  })
}

const validation = () => proxyContext(new Context())

export default validation
