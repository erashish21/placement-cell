const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/employee');


// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
        clientID: '357231334854-6b7cdiohlhteo0n700qdkbfv2dqnh0gh.apps.googleusercontent.com', // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
        clientSecret: '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', // e.g. _ASDFA%KFJWIASDFASD#FAD-
        callbackURL: "http://localhost:9001/users/auth/google/callback",
    },

    function(accessToken, refreshToken, profile, done){
        // find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in google strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                User.create({
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
