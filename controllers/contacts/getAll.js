const { Contact } = require('../../models/contacts');

const getAll = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  try {
    const contacts = await Contact.find({ owner: _id }, '', {
      skip,
      limit: Number(limit),
    }).populate('owner', '_id name email');
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        contacts: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
