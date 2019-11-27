const mongoose = require("mongoose");

/** Declares the CompanySchedule's schema */
const CompanyScheduleSchema = new mongoose.Schema({
                                                    /** Area requested by the Company */
                                                    area: String,
                                                    /** Related Company */
                                                    company: {type: mongoose.Schema.Types.ObjectId, ref: "Company"},
                                                    /** Date to schedule */
                                                    date: Date
                                                  }, {timestamps: true});

/** Converts the Company Schedule to JSON */
CompanyScheduleSchema.methods.toJSON = function toJson() {
  return {
    area: this.area,
    company: this.company? this.company.toJSON() : undefined,
    date: this.date
  };
};

/** Compiles the CompanySchedule's schema */
mongoose.model("CompanySchedule", CompanyScheduleSchema);
