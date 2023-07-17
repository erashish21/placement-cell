const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const Employee = require('../models/employee');

passport.use(new googleStrategy({
    clientID: "547939770652-lkaigei5ru81uqbdqa1edii6rq5vqrpi.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:9001/auth/google/callback",
},
     function(accessToken, refreshToken, profile, done){
        // find a user
        Employee.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in google strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                Employee.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function(err, user){
                    if (err){console.log('error in creating user google strategy-passport', err); return;}

                    return done(null, user);
                });
            }

        }); 
    }


));

module.exports = passport;