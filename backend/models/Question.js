var mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
                                             code: String,
                                             text: String,
                                             options: Array,
                                           });
var QuestionOptionSchema = new mongoose.Schema({
                                                 code: {type: String, lowercase: true, unique: true},
                                                 image: String,
                                                 profession: String,
                                                 next: QuestionSchema,
                                               });
mongoose.model('Question', QuestionSchema);
mongoose.model('QuestionOption', QuestionOptionSchema);
