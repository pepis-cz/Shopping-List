const abl = require("../abl/user")

const express = require('express');
const router = express.Router();

router.post('/create', abl.createAbl);
router.get('/get', abl.getAbl);
router.put('/name/update', abl.updateNameAbl);
router.put('/email/update', abl.updateEmailAbl);
router.put('/password/update', abl.updatePassAbl);

module.exports = router;