const { Contact } = require('../../models/contacts');
const createError = require('http-errors');

const favoriteStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;

    const result = await Contact.findByIdAndUpdate(id, { favorite }, { new: true });
    if (!result) {
      throw createError(404, `Product with ID: ${id} not found`);
    }
    res.json({
      status: 'succes',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = favoriteStatus;
