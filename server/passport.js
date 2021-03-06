const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const opts = {};

import serverConfig from './config';

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = serverConfig.secretOrKey;

module.exports = passport => {
  passport.use(new JWTStrategy(opts, (jwtPayload, done) => {
    User.findById(jwtPayload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.error(err)); // eslint-disable-line no-console
  }));
};
