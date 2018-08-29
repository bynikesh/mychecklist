const express = require('express');
const bodyParser = require('body-parser');

const port = 5000;
const mongoose = require('mongoose');
const logger = require('morgan');
const dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;

//  initialize the api
const api = express();

// initialize middleware
api.use(logger('dev'));
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.set('secretKey', 'nodeRestApi'); // jwt secret token

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

// root route for the api
api.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to mychecklist API.',
  });
});

// server start
api.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});
