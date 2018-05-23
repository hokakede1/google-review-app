const jwt = require('jwt-simple');
const config = require('./config');
const { bcryptHarshing } = require('./AuthenticationUtils/authenticationHelpers');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode(
		{
			sub: user.user_id,
			iat: moment().unix(),
			exp: moment().add(5, 'hours').unix()
		},
		config.secret
	);
}

exports.signup = async (req, res, next) => {
	const { email, firstName, lastName, profilePic, location, password } = req.body;
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
			const hashedPassword = await bcryptHarshing(password);
			if (hashedPassword.err) {
				return res.status(500).send({ error: 'Something went wrong when creating passwords' });
			}
			const resultAfterCreateAnUser = await db.user_create_new_user([
				email,
				hashedPassword,
				firstName,
				lastName,
				profilePic,
				location
			]);
			return res.status(200).send({ token: tokenForUser(resultAfterCreateAnUser[0]) });
		}
	} catch (err) {
		console.log('[ERR]', err);
		return res.status(500).send(err);
	}
};

exports.signin = (req, res, next) => {
	res.status(200).send({ token: tokenForUser(req.user) });
};
