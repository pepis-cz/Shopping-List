const abl = require("../abl/shoppingList");

const express = require('express');
const router = express.Router();

router.post('/create', abl.createAbl);
router.get('/get', abl.getAbl);
router.put('/update', abl.updateAbl);
router.delete('/delete', abl.deleteAbl);
router.get('/list', abl.listAbl)

module.exports = router;