const router = require("express").Router();
const mongoose = require("mongoose");
const CompanySchedule = mongoose.model("CompanySchedule");
const Company = mongoose.model("Company");

/** GET: / => Returns all CompanySchedules */
router.get("/", (req, res, next) => {
  CompanySchedule
    .find()
    .populate("company")
    .then(companySchedules => {
      return res.json({companySchedules: companySchedules});
    })
    .catch(next);
});

/** POST: / => Creates a new CompanySchedule */
router.post("/", (req, res, next) => {
  Company.findById(req.body.companySchedule.id_company).then(company => {
    if (!company) {
      return res.sendStatus(404);
    }
    const companySchedule = new CompanySchedule({...req.body.companySchedule, company: company});
    companySchedule
      .save()
      .then(() => {
        return res.json({companySchedule: companySchedule.toJSON()});
      })
      .catch(next);
  });
});

module.exports = router;
