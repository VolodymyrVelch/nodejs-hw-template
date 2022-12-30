const express = require('express');

const { auth, validation, ctrlWrapper } = require('../../middlewares');
const { joiSchema, favoriteStatusSchema } = require('../../models/contacts');
const { contacts: ctrl } = require('../../controllers');

const validateMiddleware = validation(joiSchema);
const router = express.Router();

router.get('/', auth, ctrlWrapper(ctrl.getAll));

router.get('/:id', ctrlWrapper(ctrl.getById));

router.post('/', auth, validateMiddleware, ctrlWrapper(ctrl.add));

router.put('/:id', validateMiddleware, ctrlWrapper(ctrl.updateById));

router.patch(
  '/:id/favorite',
  validation(favoriteStatusSchema),
  ctrlWrapper(ctrl.updateFavoriteContact)
);

router.delete('/:id', ctrlWrapper(ctrl.deleteById));

module.exports = router;
