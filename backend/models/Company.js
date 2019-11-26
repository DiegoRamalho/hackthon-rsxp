var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var CompanySchema = new mongoose.Schema({
  name: {type: String, lowercase: true, unique: true},
  email: String,
  image: String,
  bio: String, 
  video: String
 }, {timestamps: true});

CompanySchema.plugin(uniqueValidator, {message: 'is already taken'});

CompanySchema.methods.toJSON = function(){
  return {
    name: this.name,
    image: this.image,
    email: this.email,
    bio: this.bio,
    video: this.video,
    id: this._id
  };
};
mongoose.model('Company', CompanySchema);
