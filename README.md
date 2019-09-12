# nodejs-booklet

> nodejs小册

## 入门

1. 创建src/index.ts

```
import http from 'http'

const app = http.createServer((require,response) => {
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.write('hello')
    response.end()
})

app.listen(3000,() => {
    console.log('the server listen 3000')
})
```
2. 将回调函数抽离

```
import { createServer, IncomingMessage, ServerResponse } from 'http'

const onRequest = (require:IncomingMessage,respnse: ServerResponse) => {
   respnse.writeHead(200,{
       'Content-Type': 'text/plain'
   })
   respnse.write('hello ts-node')
   respnse.end()
}

const app = createServer(onRequest)

app.listen(3000, () => {
    console.log('the serve Listern 3000')
})
```



## express使用

## mongodb安装与使用

## require

## 环境变量

## semver版本管理

## npm换源

## 项目启动方式
https://www.nodebeginner.org/index-zh-cn.html
