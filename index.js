require('dotenv').config();
const express = require('express');
const app =  express();
//const port = 9001;
const env = require('./config/environment');
const port = process.env.PORT|| 9001;
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const db = require(env.db_path);
const path = require('path');
const passport = require('passport');
const passportLocal = require(env.passport_path);
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');
const flash = require('connect-flash');
const customMware = require(env.customMware_path);
//cookies session
const MongoStore = require('connect-mongo');
const session = require('express-session');
//use express router

const { Mongoose } = require('mongoose');
app.use(cookieParser());
app.use(express.urlencoded());
//setup view engine 
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static(env.assets_path));
app.use(expressLayout);
// extract style and scripts from subpages into the layout 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//mongo store is used to store the session cookie in db
app.use(session({
    name: 'placementCell',
    //TODO change the secret before deployment in production mode
    secret: env.secret_key,
    saveUninitialized: false,
    resave : false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl: env.mongoose_path,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongodb strup ok');
        }
    )
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMware.setFlash);
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log('Error in running the server:',port);
    }
    console.log('Server is running on port:',port);
});