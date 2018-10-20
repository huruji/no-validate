import modifies from './modifies';
import rules from './rules';

const proxyContext = function(ctx) {
  return new Proxy(ctx, {
      get(obj, prop) {
          if (prop in obj) {
              return obj[prop];
          }
          const newCtx = proxyContext(ctx.clone());

          if (prop in modifies) {
              let re = newCtx.addModify(modifies[prop]);
              return re;
          }

          if (prop in rules) {
              let re = newCtx.addRule(rules[prop]);
              return re;
          }
      }
  })
}

const validation = () => {
  return proxyContext(new Context());
}

export default validation
