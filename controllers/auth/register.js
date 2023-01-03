const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');

const { User } = require('../../models');

const register = async (req, res) => {
  const { name, password, email, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email: ${email} already exist`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({ name, email, password: hashPassword, subscription });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        name,
        email,
        subscription,
      },
    },
  });
};

module.exports = register;
