const http = require('http')  
const port = 3000


const requestHandler = (req, res) => {  
    console.log(req.url)
    
    res.end('Server Running...')
}

//my coonst
const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  
    if (err) {
        return console.log('something bad happened', err)
    }

  console.log(`server is listening on ${port}`)
})