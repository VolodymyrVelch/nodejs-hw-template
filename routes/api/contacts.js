const express = require('express');

const { validation } = require('../../middlewares');
const { joiSchema, favoriteStatusSchema } = require('../../models/contacts');
const { contacts: ctrl } = require('../../controllers');

const validateMiddleware = validation(joiSchema);
const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', validateMiddleware, ctrl.add);

router.put('/:id', validateMiddleware, ctrl.updateById);

router.patch('/:id/favorite', validation(favoriteStatusSchema), ctrl.updateFavoriteContact);

router.delete('/:id', ctrl.deleteById);

module.exports = router;
