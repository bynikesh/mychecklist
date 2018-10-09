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

const users = require('./routes/api/user.routes');
const lists = require('./routes/api/list.routes.js');
const posts = require('./routes/api/post.routes.js');
const profile = require('./routes/api/profile.routes.js');

//  initialize the api
const api = express();
const port = process.env.PORT || CONFIG.PORT;

// initialize middleware
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// log HTTP requests
api.use(logger('combined'));

// passport midelware
// api.set('secretKey', 'nodeRestApi'); // jwt secret token
api.use(passport.initialize());
// passport configs
require('./config/passport')(passport);

// enable all CORS requests
api.use(cors());

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
api.use('/api/users', users);
api.use('/api/list', lists);
api.use('/api/post', posts);
api.use('/api/profile', profile);

api.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to mychecklist API.',
  });
});

// server start
api.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});
