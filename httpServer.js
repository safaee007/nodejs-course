const http = require('http');



http.createServer((req, res) => {
    res.write('url is :' +req.url + "\r\n");
    
    switch(req.url)
    {
        case '/':
            res.write('welcome to home');
        break;

        case '/health':
            res.write('service is runnig');
        break;
    }

    res.end();
    
}).listen(3000);