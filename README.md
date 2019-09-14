# nodejs小测

## createServe,INcomingMessage,ServerResponse

```
import {createServer, IncomingMessage, ServerResponse} from 'http'

const port = 3000
const hostname = 'localhost'
const app = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('ts-node')
})

app.listen(port, hostname, () => {
    console.log(`the serve listen${port}`)
})
```