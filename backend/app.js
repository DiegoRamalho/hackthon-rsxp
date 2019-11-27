const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  errorhandler = require("errorhandler"),
  mongoose = require("mongoose");

const DEFAULT_PORT = 3000;
const isProduction = process.env.NODE_ENV === "production";
const mongoURL = isProduction ? process.env.MONGODB_URI : "mongodb://192.168.99.100:27017/vocation_1";

/** Create global app object */
const app = express();

/** Normal express config defaults */
app.use(cors());
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require("method-override")());

/** Connect the server with the mongo */
mongoose.connect(mongoURL);

/** Load the mongo"s models */
require("./models/User");
require("./models/Question");
require("./models/Company");
require("./models/CompanySchedule");
require("./models/Comment");
require("./models/Post");

/** Load the routes */
app.use(require("./routes"));

if (!isProduction) {
  app.use(errorhandler());
  mongoose.set("debug", true);
}

/** Catch 404 and forward to error handler */
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/** Development error handler -> will print stacktrace */
if (!isProduction) {
  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
               "errors": {
                 message: err.message,
                 error: err
               }
             }).catch(next);
  });
}

/** Production error handler -> no stacktraces leaked to user */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
             "errors": {
               message: err.message,
               error: {}
             }
           }).catch(next);
});

/** Start the server */
const server = app.listen(process.env.PORT || DEFAULT_PORT, () => {
  console.log("Listening on port " + server.address().port);
});
