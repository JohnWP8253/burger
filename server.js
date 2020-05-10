var express = require("express");
var exhbs = require("express-handlebars");
var routes = require("./controllers/burgers_controllers.js");


var PORT = process.env.PORT || 8383;

var app = express();

// Serve static content for app from public directory
app.use(express.static("./public"));

// Parse application body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// handlebars run using main for content
app.engine(
  "handlebars",
  exhbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

// calls api routes
app.use(routes);

// Listener
app.listen(PORT, function () {
  console.log(`App listening on localhost: ${PORT}`);
});
