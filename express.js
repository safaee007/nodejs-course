const express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send('home page');
});

app.get('/news', (req, res) =>{
    res.send('news list');
});

app.listen('3000', ()=>{
    console.log('server is runnig');
})