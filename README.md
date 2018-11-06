# noV

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

#### Number
|           |            | 例子                  |
| --------- | ---------- | --------------------- |
| **exact** | 全等       | noV().exact().test(6) |
| **equal** | 等于       | noV().equal().test(1) |
| **gt**    | 大于       | noV().gt(6).test(7)   |
| **gte**   | 大于或等于 | noV().gte(6).test(6)  |
| **lt**    | 小于       | noV().lt(6).test(5)   |
| **te**    | 小于或等于 | noV().lte(6).test(6)  |


| Column A | Column B | Column C |
| -------- | -------- | -------- |
| A1       | B1       | C1       |
| A2       | B2       | C2       |
| A3       | B3       | C3       |