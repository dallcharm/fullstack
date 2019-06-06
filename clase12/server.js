const http = require('http')
const port = 9000
const url = require('url')

function responseHandler (request,response) {
	response.writeHead(200,{'Content-Type':'text/plain'})
	const myURL = url.parse(request.url,true)
	response.write(myURL.pathname)
	response.end()
}

const server = http.createServer(responseHandler)

server.listen(port)
