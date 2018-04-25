const User = require('./models/user');
const jwt = require('jwt-simple');
const config = require('./config');

function tokenForUser(user){
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}


exports.signup = function (req, res, next) {
  const { email, password } = req.body;
  // See if the user have an email exist
  if(!email || !password){
    return res.status(422).send({ error: 'You must provide email and password' });
  }
  User.findOne({ email }, (err, existingUser) => {
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({
      email,
      password,
    });

    user.save((err) => {
      if(err){return next(err);}

      res.json({ token: tokenForUser(user) });
    });
  });
  // If a user with email exits, return error

  // If it is a fresh email, create and save user record

  // Respond to request indicating the user was created
};


exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user)})
}

