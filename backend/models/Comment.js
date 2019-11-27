const mongoose = require("mongoose");
const UserSchema = require("./User");

/** Declares the Comment's schema */
const CommentSchema = new mongoose.Schema({
                                            /** User that creates the Comment */
                                            author: UserSchema,
                                            /** Comment's message*/
                                            body: String,
                                          }, {timestamps: true});

/** Converts the Comment to JSON */
CommentSchema.methods.toJSON = function toJson() {
  return {
    author: this.author.toJSON(),
    body: this.body,
    createdAt: this.createdAt,
    id: this._id,
  };
};

/** Compiles the Comment's schema */
mongoose.model("Comment", CommentSchema);
