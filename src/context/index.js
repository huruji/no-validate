class Context {

  constructor(rules = [], modifies = {}) {
      this.rules = rules;
      this.modifies = modifies;
  }
  addRule(rule) {
      return (...args) => {
          this.rules.push(rule.apply(this, args));
          return this;
      }
  }
  addModify(modify) {
      var key = this.rules.length;
      if(this.modifies[key]) {
          this.modifies[key].push(modify);
      } else {
          this.modifies[key] = [modify];
      }
      return this;
  }
  test (value) {
      let result = true;
      console.log(this.rules.length);
      for(let i = 0; i < this.rules.length; i++) {
          let fn = this.rules[i];
          if (this.modifies[i]) {
              for(let j = 0; j < this.modifies[i].length; j++) {
                  fn = this.modifies[i][j].apply(this)(fn);
              }

          }
          console.log(fn.toString());
          result = fn(value);
          if(!result) return result;
      }
      return result;
  }
  clone() {
      return new Context(this.rules.slice(), Object.assign({}, this.modifies));
  }
}

export default Context
