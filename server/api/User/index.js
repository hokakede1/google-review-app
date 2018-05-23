const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const userController = require('./userController');

module.exports = function(app) {
    app.get('/v1/user/info', requireAuth, userController.getUserInfo);
    app.post('/v1/user/forgetPassword/email', userController.forgetPassword);
    app.post('/v1/user/forgetPassword/confirm/reset/:secretString', userController.resetPasswordWithEmail);
};