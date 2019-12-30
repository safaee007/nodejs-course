// let one = ()=>
// {
//     setTimeout(() => {
//         console.log('1');        
//     }, 1000);
// }
// let two = ()=>
// {
//     console.log('2');
// }
// one();
// two();

let homework = (arg, callback)=>{
    console.log('start: ' + arg);        
    callback();
};

let finishHomework = ()=>{
    console.log('finish');
};
homework('func', finishHomework);