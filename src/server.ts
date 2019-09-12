import { Server, createServer, IncomingMessage, ServerResponse } from 'http'
import url from 'url'

type icallback = (pathName: string) => void

function start(callback: icallback): Server {
    const onRequest = (request: IncomingMessage, respnse: ServerResponse) => {
        let urlLib: string = request.url || ''
        let pathname: string = url.parse(urlLib).pathname || ''
        callback(pathname)
        respnse.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        respnse.write('hello ts-node')
        respnse.end()
    }
    const app = createServer(onRequest)
    app.listen(3000, () => {
        console.log('the serve Listern 3000')
    })
    return app
}

export default start