const router = require("express").Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const User = mongoose.model("User");
const Comment = mongoose.model("Comment");

/** Preload post objects on routes with ':post' */
router.param("post", (req, res, next, id) => {
  Post
    .findOne({"_id": id})
    .populate("user")
    .then(post => {
      if (!post) {
        return res.sendStatus(404);
      }
      req.post = post;
      return next();
    })
    .catch(next);
});

/** Preload comment objects on routes with ':comment' */
router.param("comment", (req, res, next, id) => {
  Comment
    .findById(id)
    .then(comment => {
      if (!comment) {
        return res.sendStatus(404);
      }
      req.comment = comment;
      return next();
    })
    .catch(next);
});

/** GET: / => Returns all Posts */
router.get("/", (req, res, next) => {
  Post
    .find()
    .then(posts => {
      return res.json({posts: posts});
    })
    .catch(next);
});

/** POST: / => Creates a new Post */
router.post("/", (req, res, next) => {
  User
    .findById(req.body.post.id_user)
    .then(user => {
      if (!user) {
        return res.sendStatus(404);
      }
      const post = new Post({
                              ...req.body.post,
                              user: user
                            });
      post
        .save()
        .then(() => {
          return res.json({post: post.toJSON()});
        })
        .catch(next);
    });
});

/** Favorite an post */
router.post("/:post/favorite", (req, res, next) => {
  req.post
    .favorite(req.body.id_user)
    .then(post => {
      return res.json({post: post.toJSON()});
    })
    .catch(next);
});

/** Unfavorite an post */
router.delete("/:post/favorite", (req, res, next) => {
  req.post
    .unfavorite(req.body.id_user)
    .then(post => {
      return res.json({post: post.toJSON()});
    })
    .catch(next);
});

/** Creates a new comment */
router.post("/:post/comments", (req, res, next) => {
  User
    .findById(req.body.id_user)
    .then(user => {
      if (!user) {
        return res.sendStatus(401);
      }
      const comment = new Comment(req.body.comment);
      comment.author = user;
      return comment
        .save()
        .then(() => {
          req.post.comments.push(comment);

          return req.post
            .save()
            .then(() => {
              res.json({comment: comment.toJSON()});
            });
        });
    })
    .catch(next);
});

module.exports = router;
