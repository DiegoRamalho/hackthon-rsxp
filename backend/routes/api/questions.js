var router = require('express').Router();
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var QuestionOption = mongoose.model('QuestionOption');

// return a list of tags
router.get('/', function (req, res, next) {
  Question.findOne()
    .exec((err, question) => {
      return res.json(questionToJSON(question));
    });
});

router.get('/clear', function (req, res, next) {
  Question.remove({}).then(() => {
    return res.json({"ok": true});
  });

});

function parseQuestion(it) {
  if (it) {
    let options;
    if (it.options) {
      options = it.options.map(option => {
        return new QuestionOption({
                                    code: option.code,
                                    image: option.image,
                                    profession: option.profession,
                                    next: parseQuestion(option.next)
                                  });
      });
    }
    return new Question({
                          code: it.code,
                          text: it.text,
                          options: options
                        });
  }
}

router.post('/', function (req, res, next) {
  const question = parseQuestion(req.body.question);
  return question.save().then(function () {
    return res.json({question: questionToJSON(question)});
  }).catch(next);
});

function questionToJSON(question) {
  if (question) {
    let options;
    if (question.options) {
      options = question.options.map(it => {
        if (it) {
          return questionOptionToJSON(it)
        }
      }).filter(it => it);
    }

    const result = {
      code: question.code,
      text: question.text,
      options: options
    };
    return result;
  }
}

function questionOptionToJSON(questionOption) {
  return {
    code: questionOption.code,
    image: questionOption.image,
    profession: questionOption.profession,
    next: questionOption.next ? questionToJSON(questionOption.next) : undefined
  };
}

module.exports = router;
