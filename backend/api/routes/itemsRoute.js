const Router = require('express');
const ItemController = require('../controllers/ItemController');

const router = Router();

router.get('/items', ItemController.getItems);
router.get('/items/:id', ItemController.getItem);
router.post('/items', ItemController.createItem);
router.put('/items/:id', ItemController.updateItem);
router.delete('/items/:id', ItemController.deleteItem);

module.exports = router;