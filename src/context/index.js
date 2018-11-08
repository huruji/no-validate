class Context {
  constructor(rules = [], modifies = {}) {
    this.rules = rules;
    this.modifies = modifies;
  }

  addRule(rule) {
    return (...args) => {
      this.rules.push({
        fn: rule.apply(this, args),
        name: rule.name
      });
      return this;
    }
  }

  addModify(modify) {
    const key = this.rules.length;
    if (this.modifies[key]) {
      this.modifies[key].push(modify);
    } else {
      this.modifies[key] = [modify];
    }
    return this;
  }

  test(value) {
    let result = true;
    for (let i = 0; i < this.rules.length; i++) {
      let fn = this.rules[i].fn;
      if (this.modifies[i]) {
        for (let j = 0; j < this.modifies[i].length; j++) {
          fn = this.modifies[i][j].apply(this)(fn);
        }
      }
      result = fn(value);
      if (!result) return result;
    }
    return result;
  }

  testAll(value) {
    const result = [];
    for (let i = 0; i < this.rules.length; i++) {
      let fn = this.rules[i].fn;
      if (this.modifies[i]) {
        for (let j = 0; j < this.modifies[i].length; j++) {
          fn = this.modifies[i][j].apply(this)(fn);
        }
      }
      result.push(fn(value));
    }
    return result;
  }

  testPlus(value, errs) {
    let result = true;
    let info = null;
    let step = 1;
    for (let i = 0; i < this.rules.length; i++) {
      let fn = this.rules[i].fn;
      if (this.modifies[i]) {
        for (let j = 0; j < this.modifies[i].length; j++) {
          fn = this.modifies[i][j].apply(this)(fn);
        }
      }
      result = fn(value);
      step = i + 1;
      if (!result) return result;
    }
    if (Array.isArray(errs)) {
      info = errs[step - 1] ? errs[step - 1] : null;
    } else if (typeof errs === 'object') {
      const key = this.rules[step - 1].name;
      info = errs[key];
    }
    return {
      result,
      info
    };
  }


  clone() {
    return new Context(this.rules.slice(), Object.assign({}, this.modifies));
  }
}

export default Context
