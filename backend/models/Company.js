const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

/** Declares the Company's schema */
const CompanySchema = new mongoose.Schema({
                                            /** Company's biography */
                                            bio: String,
                                            /** Company's e-mail */
                                            email: String,
                                            /** Company's logo */
                                            image: String,
                                            /** Company's name */
                                            name: {type: String, lowercase: true, unique: true},
                                            /** Company's video */
                                            video: String
                                          }, {timestamps: true});

/** Checks for unique keys */
CompanySchema.plugin(uniqueValidator, {message: 'This company is already taken'});

/** Converts the Company to JSON */
CompanySchema.methods.toJSON = function toJson() {
  return {
    bio: this.bio,
    id: this._id,
    image: this.image,
    email: this.email,
    name: this.name,
    video: this.video
  };
};

/** Compiles the Company's schema */
mongoose.model('Company', CompanySchema);
