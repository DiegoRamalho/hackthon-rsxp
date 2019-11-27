const router = require("express").Router();
const mongoose = require("mongoose");
const Question = mongoose.model("Question");
const QuestionOption = mongoose.model("QuestionOption");

/** GET: / => Returns the main Question */
router.get("/", (req, res, next) => {
  Question
    .findOne()
    .exec((err, question) => {
      return res.json(questionToJSON(question));
    });
});

/** POST: / => Creates a new Question */
router.post("/", (req, res, next) => {
  const question = parseQuestion(req.body.question);
  return question
    .save()
    .then(() => {
      return res.json({question: questionToJSON(question)});
    })
    .catch(next);
});

/**
 * Parse the json to model
 * @param it => API object
 * @returns {Model}
 */
const parseQuestion = it => {
  if (it) {
    let options;
    if (it.options) {
      options = it.options
        .map(option => {
          return new QuestionOption({
                                      area: option.area,
                                      code: option.code,
                                      description: option.description,
                                      image: option.image,
                                      next: parseQuestion(option.next)
                                    });
        });
    }
    return new Question({
                          code: it.code,
                          options: options,
                          text: it.text
                        });
  }
};

/**
 * Parses the Question to JSON
 * @param question
 * @returns {{code: *, text: *, options: *}}
 */
const questionToJSON = question => {
  if (question) {
    let options;
    if (question.options) {
      options = question.options
        .map(it => {
          if (it) {
            return questionOptionToJSON(it)
          }
        })
        .filter(it => it);
    }

    return {
      code: question.code,
      text: question.text,
      options: options
    };
  }
};

/**
 * Parses QuestionsOption to JSON
 * @param questionOption
 * @returns {{area: *, code: *, image: string | SVGImageElement, next: *}}
 */
const questionOptionToJSON = questionOption => {
  return {
    area: questionOption.area,
    code: questionOption.code,
    description: questionOption.description,
    image: questionOption.image,
    next: questionOption.next ? questionToJSON(questionOption.next) : undefined
  };
};

module.exports = router;
