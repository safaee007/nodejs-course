const express = require('express');
var app = express();
var port = 3000;

app.get('/', (req, res) =>{
    res.send('home page');
});

app.get('/news', (req, res) =>{
    res.send('news list');
});

app.listen(port, ()=>{
    console.log('server is runnig');
})