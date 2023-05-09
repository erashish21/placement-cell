const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on('error',console.error.bind(console,'error coneecting to db'));

db.once('open',function(){
    console.log('Successfully connected to the database');
});