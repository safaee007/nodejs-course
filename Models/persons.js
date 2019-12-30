const mongoose = require('mongoose');

let person = mongoose.model('person', {
    firstname:{
        type:String,
        required:true,
        Minlength:3,
        trim: true
    },
    lastname:{
        type:String,
        required:true,
        Minlength:3,
        trim: true
    },
    age:{
        type:Number,
        Minlength:1,
        required:true 
    }
});