const nodemailer = require('nodemailer');
const config = require('../../config');
const nodemailerConfig = {
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: 'hqdang97@gmail.com',
		clientId: config.nodemailer.clientId,
		clientSecret: config.nodemailer.clientSecret,
		refreshToken: config.nodemailer.refreshToken,
		accessToken: config.nodemailer.accessToken
	}
};

const sendEmailToResetPassword = (req, res, userInfo) => {
    const transporter = nodemailer.createTransport(nodemailerConfig);
    //TODO: Generate Random String
	const { user_email } = userInfo;

	let HelperOptions = {
		from: `hqdang97@gmail.com`,
		to: `${req.user.email}`,
		subject: 'GOOGLE REVIEW SERVICE - Reset Password Link',
		text: `Please click this link to reset your password https://resetLink/forget/password/reset/${userId}`
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(HelperOptions, (error, info) => {
			if (error) {
				reject({ error });
			}
			resolve({ message: 'sent' });
		});
	});
};

module.exports = {
	sendEmailToResetPassword
};
