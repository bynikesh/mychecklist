// import of dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const CONFIG = require('./config/config');
require('./config/passport');

mongoose.Promise = global.Promise;

const user = require('./routes/user.routes.js');
const list = require('./routes/list.routes.js');
const auth = require('./routes/auth.routes.js');

//  initialize the api
const api = express();
const port = process.env.PORT || CONFIG.PORT;

// log HTTP requests
api.use(logger('combined'));

// initialize middleware
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.set('secretKey', 'nodeRestApi'); // jwt secret token
api.use(passport.initialize());
require('./config/passport')(passport);
// enable all CORS requests
api.use(cors());

require('./routes/list.routes.js')(api);

// database connection
mongoose
  .connect(
    CONFIG.MONGO_DB,
    {
      useNewUrlParser: true,
    },
  )
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log(`Could not connect to the database. Exiting now...${err}`);
    process.exit();
  });

//  Routing
api.use('/api/user', user);
api.use('/api/list', list);
api.use('/api/auth', auth);

api.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to mychecklist API.',
  });
});

// server start
api.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});
