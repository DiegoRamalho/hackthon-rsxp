const router = require("express").Router();
const mongoose = require("mongoose");
const Company = mongoose.model("Company");
const CompanySchedule = mongoose.model("CompanySchedule");

/** Preload company objects on routes with ':company' */
router.param("company", (req, res, next, id) => {
  req.company = id;
  return next();
});

/** GET: / => Returns all Companies */
router.get("/", (req, res, next) => {
  Company
    .find()
    .then(companies => {
      return res.json({companies: companies});
    })
    .catch(next);
});

/** GET: /:company/schedule => Returns all Company's schedules */
router.get("/:company/schedule", (req, res, next) => {
  CompanySchedule
    .find({"company": req.company})
    .then(companySchedules => {
      return res.json({companySchedules: companySchedules});
    })
    .catch(next);
});

/** POST: / => Creates a new Company */
router.post("/", (req, res, next) => {
  const company = new Company(req.body.company);
  company
    .save()
    .then(() => {
      return res.json({company: company.toJSON()});
    })
    .catch(next);
});

module.exports = router;
