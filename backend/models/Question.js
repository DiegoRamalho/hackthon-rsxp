const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

/** Declares the Question's schema */
const QuestionSchema = new mongoose.Schema({
                                             /** Question's code */
                                             code: {type: String, lowercase: true, unique: true},
                                             /** Array of QuestionOption */
                                             options: Array,
                                             /** Question's text */
                                             text: String
                                           });

/** Declares the QuestionOption's schema */
const QuestionOptionSchema = new mongoose.Schema({
                                                   /** Result area */
                                                   area: String,
                                                   /** QuestionOption's code */
                                                   code: {type: String, lowercase: true, unique: true},
                                                   /** QuestionOption's description */
                                                   description: String,
                                                   /** QuestionOption's image */
                                                   image: String,
                                                   /** Next Question */
                                                   next: QuestionSchema
                                                 });

/** Checks for unique keys */
QuestionSchema.plugin(uniqueValidator, {message: "This question is already taken"});
QuestionOptionSchema.plugin(uniqueValidator, {message: "This option is already taken"});

/** Compiles the Question and QuestionOption schema */
mongoose.model("Question", QuestionSchema);
mongoose.model("QuestionOption", QuestionOptionSchema);
