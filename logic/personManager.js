const {mongoose} = require('./db/mongoose');
const {person} = require('./models/persons');

let addPerson = (name, family, age) =>{
    let newPerson = new person(
    {
        firstname:'saeed',
        lastname:'safaee',
        age: 29
    });

    newPerson.save().then((person) =>{
        console.log('ok new person');
    }, (err)=>{
        console.log('wrong new person' + err);
    });
};


module.exports = {
    addPerson
}