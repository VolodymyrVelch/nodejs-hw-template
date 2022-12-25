const getAll = require('./getAll');
const getById = require('./getById');
const add = require('./add');
const updateById = require('./updateById');
const deleteById = require('./delete');
const updateFavoriteContact = require('./favoriteStatus');

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
  updateFavoriteContact,
};
