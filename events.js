const Event = require('events');
class myevent extends Event {}
let en = new myevent();

en.on('test', (arg) =>{
    console.log('this is '+ arg.pm);
});

en.emit('test', {pm:'saeed top'});