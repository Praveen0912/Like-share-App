var express = require('express');
var router = express.Router();

//Get Homepage
router.get('*', function(req, res){
    res.sendfile('./public/angularPart/dist/angularPart/index.html');
}); 

module.exports = router;