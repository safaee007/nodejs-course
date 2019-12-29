let logData = (app, mess) =>{
    console.log(app + ":" + mess);
}

let logBug = (mess) =>{
    console.log("ex: " + mess);
}

//module.exports.log = logData; 
module.exports = {
    logData, logBug
};