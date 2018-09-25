var express = require('express');
var router = express.Router();
var googleModel = require('../model/class')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fruit', (req,res) => {
  googleModel.find().then(data => {
    res.json({
      code:200,
      data
    })
  })
})
module.exports = router;
