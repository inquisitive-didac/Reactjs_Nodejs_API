var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.send('API is working properly v5');
});
module.exports = router;