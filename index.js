const logManager = require('./logManager');
const fileManage = require('./fileManager');
const osManage = require('./OSManager');
//way 2 const {log} = require('./logManager')


//carot^ tilda~
//old function
function logger(mes){
    console.log(mes);
};

//new ES6
let sum = (x) =>{
    console.log(x);
};

//
let sum2 = (x) => console.log(x * 2);

logger("function for log any mesage");
sum(5);
sum2(6);
logManager.logData(2, "test");
logManager.logBug("null");

///////////filemanager//////////
//fileManage.write('this is content test for write in file')
fileManage.read('testFile.txt');

///os////
osManage.showInfo();