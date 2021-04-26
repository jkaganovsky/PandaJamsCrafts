const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Static connectivity for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connecting with Express
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Sends all requests to React App
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Starts the API server
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});