const mongoose = require("mongoose");
const UserSchema = require("./User");

/** Declares the Post's schema */
const PostSchema = new mongoose.Schema({
                                         /** Array of Comments */
                                         comments: Array,
                                         /** Array of users that like this Post */
                                         likes: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
                                         /** Post's message */
                                         mensage: String,
                                         /** User related with the Post */
                                         user: UserSchema
                                       }, {timestamps: true});

/** Converts the Post to JSON */
PostSchema.methods.toJSON = function toJson() {
  return {
    comments: this.comments,
    createdAt: this.createdAt,
    id: this._id,
    likes: this.likes,
    mensage: this.mensage,
    user: this.user
  };
};

/** Favorite the Post */
PostSchema.methods.favorite = function favorite(id) {
  if (this.likes.indexOf(id) === -1) {
    this.likes.push(id);
  }
  return this.save();
};

/** Unfavorite the Post */
PostSchema.methods.unfavorite = function unfavorite(id) {
  this.likes.remove(id);
  return this.save();
};

/** Compiles the Post's schema */
mongoose.model("Post", PostSchema);
