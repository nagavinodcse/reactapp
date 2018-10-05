const JwtStrategy = require('passport-jwt').Strategy, ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose'), User = mongoose.model('users');
const keys = require('../config/keys');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (payload, done) => {
            User.findById(payload.id).then(user => {
                if(user){
                    return done(null,user);
                }
                return done(null,false)
            }).catch(err=> console.log(err));
    }));
}