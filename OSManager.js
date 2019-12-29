const os = require('os');
const path = require('path');

let showInfo = () => {
    console.log(os.platform());
    console.log(os.cpus());
    console.log('--------------------');
    console.log('dir: ' + path.join(__dirname));

};

module.exports = {
    showInfo
};