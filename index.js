const express = require('express');
const app =  express();
const port = 9001;
const db = require('./config/mongoose');
const path = require('path');
const homeController = require('./controllers/home_controllers');

  //use express router
 app.use('/',require('./routes'));

 //setup view engine 
 app.set('view engine','ejs');
 app.set('views','./views');
 app.use(express.static('./assets'));


app.listen(port,function(err){
    if(err){
        console.log('Error in running the server:',port);
    }
    console.log('Server is running on port:',port);
});