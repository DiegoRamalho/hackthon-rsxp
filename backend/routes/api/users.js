const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

/** GET: / => Returns all Users */
router.get("/", (req, res, next) => {
  User
    .find()
    .then(users => {
      return res.json({
                        users: users.map(it => {
                          return it.toJSON()
                        })
                      });
    })
    .catch(next);
});

/** POST: / => Creates a new User */
router.post("/", (req, res, next) => {
  const user = new User(req.body.user);
  user.save()
    .then(() => {
      return res.json({user: user.toJSON()});
    })
    .catch(next);
});

module.exports = router;
