# noV

使用**Proxy**实现的优雅的、流畅的校验系统，目前已应用在**百万DAU**的线上产品中。

## 安装

```bash
npm install --dev-save nov
```

## 使用

```js
import noV from 'nov';

noV().maxLength().test(myValue);
```

验证表单最常见的邮箱、手机号码：

```js
noV().email().test(myEmail);

noV().phoneNumber().test(myPhone);
```

或许你还想要验证用户设置的密码是否符合你的规则，假设我们规定密码的规则是长度为至少为6位，并且至少包含数字和字母
那么我们可以使用类似链式一样的操作（但是实际上，只有我们调用了test方法后，校验阶段才会开始）
```js
noV().minLength(6).pattern(/[a-z]?[0-9]+[a-z]+/i).test(password)
```


或许有时候你还想取反其中的某个验证规则，这个时候你可以使用 `not` 这个修饰符：

```js
noV().not.range(5,7).test(myStr)
```

这个时候意味着 `myStr` 的长度小于5或者大于7才会返回 `true`。

**这当然还不够**

如果你想要知道校验失败时具体是哪条规则没有通过，你可以使用 `testPlus` 方法，这个方法将会返回一个对象，包含result与step字段的对象

假如我们规定标题长度需要大于4个字符，并且最后必须要以问号结尾，我们可以使用 `testPlus` 方法来精确了解到我们的校验规则具体的执行结果：

```
const result = noV().minLength(5).pattern(/(\?|？)$/).testPlus(myTitle)
```

如果 `myTitle` 在第二个校验规则失败了，那么这个 `result` 对象将会是：

```js
{
  result: false,
  step: 2
}
```

有了这个信息我们可以很方便地针对每一个校验失败进行特定的处理，最常见的就是告诉用户需要怎样修改：
```js
const errors = [
  '请最少输入5个字符',
  '标题须以问号结尾'
]

modal.show(errors[result.step -1]);
```

为了更加方便一点，noV允许将这些额外的信息作为第二个参数传递给 `testPlus` 方法，如：
```js
const result = noV().minLength(6).pattern(/[a-z]?[0-9]+[a-z]+/i).test(password, errors)
```
这样，result对象将会把这些额外的信息作为 `info` 字段的值：

```js
{
  result: false,
  step: 2,
  info: '标题须以问号结尾'
}
```

我们需要知道的是，传递给 `testPlus` 方法的额外信息不仅仅可以数组，还可以是一个以 **规则名** 为key的对象，上面的等价于：

```js
const errors = {
  minLength: '请最少输入5个字符',
  pattern: '标题须以问号结尾'
};

const result = noV().minLength(6).pattern(/[a-z]?[0-9]+[a-z]+/i).test(password, errors)
```

这样，如果你的校验规则需要经常修改，那么你也不会那么被动。


### 使用修饰符

```js
noV.every.email().some.last('qq.com').test([email1, email2, email3])
```

## API

### 规则（Rule）

#### Type
|               |                                                   | 例子                                  |
| ------------- | ------------------------------------------------- | ------------------------------------- |
| **number()**  | 类型为数字                                        | `noV().number().test(6)`              |
| **array()**   | 类型为数组                                        | `noV().array().test(['n', 'o', 'V'])` |
| **string()**  | 类型为字符串                                      | `noV().string().test('nov')`          |
| **boolean()** | 类型为布尔值                                      | `noV().boolean().test(true)`          |
| **float()**   | 类型为小数                                        | `noV().float().test(1.2)`             |
| **nan()**     | 值是NaN                                           | `noV().nan().test(NaN)`               |
| **null()**    | 值是null                                          | `noV().null().test(null)`             |
| **object()**  | 类型是对象object                                  | `noV().object().test(new Date())`     |
| **type(ty)**  | 精确校验类型（内部使用Object.prototype.toString） | `noV().type('RegExp').test(/^\d+$/)`  |

#### Number
|                     |            | 例子                         |
| ------------------- | ---------- | ---------------------------- |
| **exact(value)**    | 全等       | `noV().exact(6).test(6)`     |
| **equal(value)**    | 等于       | `noV().equal(1).test(1)`     |
| **gt(value)**       | 大于       | `noV().gt(6).test(7)`        |
| **gte(value)**      | 大于或等于 | `noV().gte(6).test(6)`       |
| **lt(value)**       | 小于       | `noV().lt(6).test(5)`        |
| **te(value)**       | 小于或等于 | `noV().lte(6).test(6)`       |
| **ne(value)**       | 不等于     | `noV().ne(6).test(6)`        |
| **range(min, max)** | 规定范围内 | `noV().range(2, 10).test(6)` |
| **even()**          | 偶数       | `noV().even().test(4)`       |
| **odd()**           | 奇数       | `noV().odd().test(3)`        |
| **negative()**      | 负数       | `noV().negative().test(-3)`  |
| **positive()**      | 正数       | `noV().positive().test(3)`   |

#### String
|                      |                                                | 例子                                          |
| -------------------- | ---------------------------------------------- | --------------------------------------------- |
| **exact(value)**     | 全等                                           | `noV().exact('nov').test('nov')`              |
| **equal(value)**     | 等于                                           | `noV().equal('nov').test('nov')`              |
| **length(min, max)** | 字符串长度范围                                 | `noV().length(1, 5).test('noV')`              |
| **minLength(value)** | 字符串长度最小值                               | `noV().minLength(2).test('noV')`              |
| **maxLength(value)** | 字符串长度最大值                               | `noV().maxLength(6).test('noV')`              |
| **first(value)**     | 字符串第一个字符                               | `noV().first('n').test('noV')`                |
| **end(value)**       | 字符串最后一个字符                             | `noV().end('V').test('noV')`                  |
| **startWith(value)** | 字符串开头                                     | `noV().startWith('n').test('noV test')`       |
| **endWith(value)**   | 字符串结尾                                     | `noV().endWith('t').test('noV test')`         |
| **pattern(value)**   | 正则模式匹配                                   | `noV().pattern(/^\d+$/).test('123123321')`    |
| **lower()**          | 字符串全为小写                                 | `noV().lower().test(‘nov’)`                 |
| **upper()**          | 字符串全为大写                                 | `noV().upper().test('NOV')`                   |
| **email()**          | 字符串为email地址                              | `noV().email().test('huruji3@foxmail.com')`   |
| **phoneNumber()**    | 字符串为手机号码                               | `noV().phoneNumber().test(phoneNumber)`       |
| **url()**            | 字符串为url地址                                | `noV().url().test('http://google.com')`       |
| **base64()**         | 字符串为base64字符串                           | `noV().base().test(base64Str)`                |
| **uaIOS()**          | 浏览器ua为IOS系统(需要传递UA字符串)            | `noV().uaIOS().test(navigator.userAgent)`     |
| **uaAndroid()**      | 浏览器ua为IOS系统(需要传递UA字符串)            | `noV().uaAndroid().test(navigator.userAgent)` |
| **uaWX()**           | 浏览器ua在微信环境(需要传递UA字符串)           | `noV().uaWX().test(navigator.userAgent)`      |
| **uaQQ()**           | 浏览器ua在QQ环境(需要传递UA字符串)             | `noV().uaQQ().test(navigator.userAgent)`      |
| **json()**           | 字符串是json字符串（可用JSON.parse()方法解析） | `noV().json().test('{}')`                     |
| **empty()**          | 字符串为空字符串                               | `noV().empty().test('noV')`                   |

#### Array

|                      |                      | 例子                                         |
| -------------------- | -------------------- | -------------------------------------------- |
| **length(min, max)** | 数组长度范围         | `noV().length(1, 5).test([1, 2, 3])`         |
| **minLength(value)** | 数组长度最小值       | `noV().minLength(2).test([1, 2, 3])`         |
| **maxLength(value)** | 数组长度最大值       | `noV().maxLength(6).test([1, 2, 3])`         |
| **first(value)**     | 数组第一个元素       | `noV().first('n').test(['n', 'o', 'V'])`     |
| **end(value)**       | 数组最后一个元素     | `noV().end('V').teest(['n', 'o', 'V'])`      |
| **startWith(value)** | 数组第一个元素       | `noV().startWith('n').test(['n', 'o', 'V'])` |
| **endWith(value)**   | 数组最后一个元素     | `noV().endWith('t').test(['n', 'o', 'V'])`   |
| **unique()**         | 数组元素是否唯一     | `noV().unique().test([1, 2, 3, 1])`          |
| **contains(search)** | 数组中是否包含某元素 | `noV().contains(2).test([1, 2, 3])`          |
| **empty()**          | 数组为空数组         | `noV().empty().test([])`                     |


#### 

#### Object
|                                    |                                                                                                                    | 例子                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| **empty()**                        | 对象为空对象                                                                                                       | `noV().empty().test([1, 2, 3])`                          |
| **falsyObj(value)**                | 对象的键值是否全为falsy的值，其中value可指定为对象中的某些值为默认值，**这在校验你的对象是否被修改的时候非常有用** | `oV().falsyObj({'a.b': 2}).test({a: {b: 2,c: null}})`    |
| **required([value], [value],...)** | 指定某些键是必须的                                                                                                 | `oV().required('name', 'age').test({a: {b: 2,c: null}})` |
### 修饰符
|            |                                                       | 例子                                              |
| ---------- | ----------------------------------------------------- | ------------------------------------------------- |
| **.not**   | 对接下来的规则取反                                    | `noV().not.email().test(‘huruji#gmail.com’)`    |
| **.some**  | 对接下来的规则使用some（有符合规则的数据则返回true）  | `noV().some.minLength(2).test(['nov', 'v', 'v'])` |
| **.every** | 对接下来的规则使用every（所有数据符合规则则返回true） | `noV().every.gt(6).test([1, 2, 3, 8])`            |

### 校验
|                    |                                                                        | 例子                                           |
| ------------------ | ---------------------------------------------------------------------- | ---------------------------------------------- |
| **test(value)**    | 对value按照rules顺序进行校验，遇到校验不通过将终止校验，返回一个布尔值 | `noV().gt(6).test(7)`                          |
| **testAll(value)** | 按rules顺序校验，遇到不通过不终止，返回一个由布尔值组成的数组          | `noV().minLength(2).startWith('n')test('noV')` |
| **testPlus(value [,infoOptions])** | 校验rules的结果并返回一个由 `step` 和 `result` 字段组成的对象，同时可通过 `infoOptions` 设置额外的信息，         | `noV().minLength(1).maxLength(3).firs('n').testPlus('noVs', {minLength: 'mingLength',maxLength: 'maxLength',first: 'first'})` |