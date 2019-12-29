const fs = require('fs');

//read file
let read = (path) =>{
    fs.readFile(path, (err, data) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(data.toString());
        }
    });
};


//write file
let write = (contetn) =>{
    fs.appendFile('testFile.txt', contetn, (err) =>{
        if(err)
        {
            console.log(err);
        }
    });
};


module.exports ={
    write, read
};