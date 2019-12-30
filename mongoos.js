const mongoosse = require('mangoose');


mongoose.Promise = global.Promise();
mongoose.connect('http://localhost:11254');

module.exports = mongoos;