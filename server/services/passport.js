const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
//Create Local Strat
const localOptions = { usernameField: "email"};
const localLogin = new LocalStrategy({}, function(email, password, done){
    // verify this username and password, call done with the user
    User.findOne({email: email}, (err, user) => {
        if(err){ return done(err); }
        if( !user ) { return done(null, false); }

        user.comparePassword(password, function(err, isMatch){
            if(err){ return done(err); }
            if(!isMatch){ return done(null, false)}

            return done(null, user)
        })
    })
})
// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    //See if the user ID in the payload exists in the database
    User.findById(payload.sub, (err, user) => {
        if(err) { return done(err, false); }

        if(user){
            //if it does call done
            done(null, user)
        } else {
            //otherwise, call done with out a user object
            done(null, false)
        }
    })
    


})

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);