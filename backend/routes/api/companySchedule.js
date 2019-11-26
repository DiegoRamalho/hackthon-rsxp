var router = require('express').Router();
var mongoose = require('mongoose');
var CompanySchedule = mongoose.model('CompanySchedule');
var Company = mongoose.model('Company');

// return a list of tags
router.get('/', function(req, res, next) {
  CompanySchedule.find().then(function(companySchedules){
    return res.json({companySchedules: companySchedules});
  }).catch(next);
});

router.post('/', function(req, res, next){
  Company.findById(req.body.companySchedule.id_company).then (company => {
    var companySchedule = new CompanySchedule({... req.body.companySchedule, company : company});
  
    companySchedule.save().then(function(){
      return res.json({CompanySchedule: companySchedule.toJSON()});
    }).catch(next);
  });
 
});
module.exports = router;
