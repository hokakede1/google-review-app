const User = require('./models/user');
const jwt = require('jwt-simple');
const config = require('./config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.user_id, iat: timestamp }, config.secret);
}

exports.signup = async (req, res, next) => {
	const { email, password, firstName, lastName, profile_pic } = req.body;
	const db = req.app.get('db');

	// See if the user have an email exist
	if (!email || !password || !firstName || !lastName) {
		return res.status(422).send({ error: 'You must provide email and password' });
	}
	try {
		const responseFromUserEmailQuery = await db.user_find_available_user_email([ email ]);
		if (responseFromUserEmailQuery.length !== 0) {
			return res.status(422).send({ error: 'Email is in use' });
		} else {
			db.create_new_user([ email, password ]);
		}
	} catch (err) {
		console.log('[ERR]', err);
		return res.status(500).send(err);
	}

	// User.findOne({ email }, (err, existingUser) => {
	//   if (err) { return next(err); }

	//   if (existingUser) {
	//     return res.status(422).send({ error: 'Email is in use' });
	//   }

	//   const user = new User({
	//     email,
	//     password,
	//   });

	//   user.save((err) => {
	//     if(err){return next(err);}

	//     res.json({ token: tokenForUser(user) });
	//   });
	// });
};

exports.signin = (req, res, next) => {
	res.send({ token: tokenForUser(req.user) });
};
