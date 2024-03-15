const express = require("express");
const bodyParser = require("body-parser");

function ServerFlightSearch() {
  const app = express();
  app.listen(3000, () => {
    console.log("Server started at 3000");
  });
}

ServerFlightSearch();
