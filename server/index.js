const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const config = require('./config');
const app = express();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const { comparePassword } = require('./helpers/authenticationHelpers');

// DB Setup
massive(config.connectionString)
	.then(db => {
		app.set('db', db);
		console.log('connected to the DB');
	})
	.catch(err => console.log(`[DB ERROR]`, err));

app.use(bodyParser.json({ type: '*/*' }));
app.use(cors());
const router = require('./router')(app);

//Authentication Setup
//Create Local Strat
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
	const db = app.get('db');
	try {
		const userData = await db.user_find_available_user_email([ email ]);
		if (userData.length === 0) {
			return done(null, false);
		}
		comparePassword(userData[0].user_password, password, (err, isMatch) => {
			if (err) {
				return done(err);
			}
			if (!isMatch) {
				return done(null, false);
			}
			return done(null, userData);
		});
	} catch (err) {
		return done(err);
	}
});
// Setup options for JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	app
		.get('db')
		.user_find_user_by_id([ payload.sub ])
		.then(user => {
			if (user.length === 0) {
				done(null, false);
			} else {
				done(null, user[0]);
			}
		})
		.catch(err => done(err, false));
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);

// Server Setup
const port = 8080;

app.listen(port, () => {
	console.log('server is running on port ' + port);
});
