const bcrypt = require('bcrypt-nodejs');

exports.bcryptHarshing = password => {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(10, function(err, salt) {
			if (err) {
				reject({ err });
			}
			bcrypt.hash(password, salt, null, function(err, hash) {
				if (err) {
					reject({ err });
				}
				resolve(hash);
			});
		});
	});
};
