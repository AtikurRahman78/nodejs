const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect(process.env.MONGOBD_URL).then(()=>{
        console.log('Alhamdulliah db connected!');
    });
}


module.exports = dbConnection;