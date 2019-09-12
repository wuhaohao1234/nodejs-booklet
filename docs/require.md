# nodejs中文件的导入与导出

> 在nodejs中是采用commonjs规范

## require


require目录机制

1. 如果package.json中含有main字段，则用

2. 如果不存在main字段，则加载目录下index.js或者index.node

3. require过的文件会加入缓存，多次require不会重复加载

## module

module.exports

> 本次代码采用es6模块，分别为

1. import xxx from 'xxx'

2. export , export default

### export defalut

导出一个变量

test.ts

```
const add = function(a: number,b: number) {
    return a + b
}

export default add
```

index.ts

```
import add from './test'

console.log(add(1,2))

```

### export

index.ts

```
import {add} from './test'

console.log(add(1,3))
```

test.ts

```
const add = function(a: number,b: number) {
    return a + b
}

export {
    add
}
```