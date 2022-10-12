var express = require("express");
var app = express();
var fs = require("fs");
var body = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var cors = require("cors");
const corsConfig = {
  origin: function(origin, callback) {
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials: true
};
app.use(cors(corsConfig));
app.use(body());

const { getRouter } = require("./router");
getRouter(app);
var server = app.listen(4000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Application Run At http://%s:%s;", host, port);
});
