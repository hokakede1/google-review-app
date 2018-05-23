const Authentication = require('./authentication');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
	// AUTH ROUTES
	app.get('/', requireAuth, (req, res) => {
		res.send(req.user);
	});
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);
	// USER ROUTES
	require('./api/User/index')(app);
};
