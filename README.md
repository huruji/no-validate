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
|                     |                                                                                                                    | 例子                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| **empty()**         | 对象为空对象                                                                                                       | `noV().length(1, 5).test([1, 2, 3])`                  |
| **falsyObj(value)** | 对象的键值是否全为falsy的值，其中value可指定为对象中的某些值为默认值，**这在校验你的对象是否被修改的时候非常有用** | `oV().falsyObj({'a.b': 2}).test({a: {b: 2,c: null}})` |
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
