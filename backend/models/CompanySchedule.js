var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var CompanyScheduleSchema = new mongoose.Schema({
  date: Date,
  area: String,
  company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"}
 }, {timestamps: true});

CompanyScheduleSchema.methods.toJSON = function(){
  return {
    date: this.date,
    area: this.area,
    company: this.company.toJSON()
  };
};
mongoose.model('CompanySchedule', CompanyScheduleSchema);
