const mongoose = require("mongoose");

/** Declares the User's schema */
const UserSchema = new mongoose.Schema({
                                         /** User's e-mail */
                                         email: String,
                                         /** User's image */
                                         image: String,
                                         /** User's login */
                                         username: String,
                                       }, {timestamps: true});

/** Declares the User's schema */
UserSchema.methods.toJSON = function toJson() {
  return {
    email: this.email,
    id: this._id,
    image: this.image,
    username: this.username
  };
};

/** Compiles the User's schema */
mongoose.model("User", UserSchema);

module.export = UserSchema;
