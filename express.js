const express = require('express');
const hbs = require('hbs');
var app = express();
var port = 3000;

app.set('view engine', 'hbs');

//middelwear
app.use((req, res, next) =>{
    let now = new Date().toString();
    console.log(`time is ${now} and method ${req.path}`);
    
    next();
});

//site lock
app.use((req, res, next) =>{
    res.render('lockPage');
});


app.get('/', (req, res) =>{
    res.send('home page');
    //res.render('lockPage');
});
app.get('/news', (req, res) =>{
    res.send('news list');
});

app.listen(port, ()=>{
    console.log('server is runnig');
})