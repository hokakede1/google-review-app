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

exports.comparePassword = async (userPassword, candidatePassword, callback) => {
		await bcrypt.compare(candidatePassword, userPassword, function(err, isMatch){
			if (err) { return callback(err)};
			return callback(null, isMatch);
		})
	
}