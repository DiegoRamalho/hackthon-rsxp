var router = require('express').Router();
var mongoose = require('mongoose');
var Company = mongoose.model('Company');

// return a list of tags
router.get('/', function(req, res, next) {
  Company.find().then(function(companys){
    return res.json({companys: companys});
  }).catch(next);
});

router.post('/', function(req, res, next){
  var company = new Company(req.body.company);
  
  company.save().then(function(){
    return res.json({company: company.toJSON()});
  }).catch(next);
});
module.exports = router;
