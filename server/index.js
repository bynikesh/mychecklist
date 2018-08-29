// import listRouter from './routes/listRouter';

const express = require('express');
const bodyParser = require('body-parser');

const port = 5000;
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');

mongoose.Promise = global.Promise;

//  initialize the api
const api = express();

// initialize middleware
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

require('./routes/list.routes.js')(api);

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

api.get('/', (req, res) => {
  res.json({
    message: 'Welcome to mychecklist.',
  });
});
// api.use('/api/list', listRouter);

api.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});
