const bcrypt = require('bcrypt-nodejs');

exports.bcryptHarshing = password => {
	bcrypt.genSalt(10, function(err, salt) {
		if (err) {
			return { err };
		}

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) {
				return { err };
			}
			return hash;
		});
	});
};
