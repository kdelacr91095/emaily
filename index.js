const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy 
const keys = require('./config/keys');
// calling an express function, using one single app 
const app = express();
//new instance of the google passport strategy
passport.use(new GoogleStrategy(
    { clientID: keys.googleClientID,
     clientSecret: keys.googleClientSecret,
     callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);
    })
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
); 

app.get('/auth/google/callback', passport.authenticate('google'));

//in production
const PORT = process.env.PORT || 5000;
//instructs express to tell node that it wants to listen to the port 5000
app.listen(PORT);
