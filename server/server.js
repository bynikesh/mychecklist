// import of dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;

//  initialize the api
const api = express();
const port = process.env.PORT || 5000;

// log HTTP requests
api.use(logger('combined'));

// initialize middleware
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.set('secretKey', 'nodeRestApi'); // jwt secret token

// enable all CORS requests
api.use(cors());

require('./routes/list.routes.js')(api);

// database connection
mongoose
  .connect(
    dbConfig.url,
    {
      useNewUrlParser: true,
    },
  )
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
  });

//  Routing
api.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to mychecklist API.',
  });
});

// server start
api.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});
