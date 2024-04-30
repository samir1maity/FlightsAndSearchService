const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoute = require('./routes/index')


const setUpServerFlightSearch = async () => {

  // create the express server
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/Api', ApiRoute)

  const db = require('./models/index')


  // db.sequelize.sync({ alter: true })   -> db sync

  app.listen(PORT, async () => {

    console.log(`Server started at ${PORT}`);
    console.log(db.Airplane)
  });
};

setUpServerFlightSearch();
