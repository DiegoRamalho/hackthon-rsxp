/** Creates the routes */
const router = require("express").Router();
router.use("/questions", require("./questions"));
router.use("/companies", require("./company"));
router.use("/companySchedules", require("./companySchedule"));
router.use("/users", require("./users"));
router.use("/posts", require("./post"));

/** Customizes the errors */
router.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res
      .status(422)
      .json({
              errors: Object.keys(err.errors)
                .reduce((errors, key) => {
                  errors[key] = err.errors[key].message;
                  return errors;
                }, {})
            });
  }
  return next(err);
});

module.exports = router;
