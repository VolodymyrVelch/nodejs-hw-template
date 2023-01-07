const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const { User } = require('../../models');

const register = async (req, res) => {
  const { name, password, email, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email: ${email} already exist`);
  }
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({ name, email, password: hashPassword, subscription, avatarURL });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        name,
        email,
        subscription,
        avatarURL,
      },
    },
  });
};

module.exports = register;
