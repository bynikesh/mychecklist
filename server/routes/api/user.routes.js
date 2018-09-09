const express = require('express');
const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const CONFIG = require('../../config/config');

const router = express.Router();
const User = require('../../models/User.model');
const validateRegisterInput = require('../../lib/register');
const validateloginInput = require('../../lib/login');

/**
 * @route GET api/users/test
 * @description test routes to test the user routes
 * @access public
 */
router.get('/test', (req, res) => {
  res.json({
    msg: 'users work',
  });
});

/**
 * @route GET api/users/register
 * @description user registration
 *@access public
 */

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // check validation
  if (!isValid) {
    console.log(errors);
    return res.status(401).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'email already exists' });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

/**
 * @route POST api/users/login
 * @description check For user Login / return JWT Tocken
 * @access Public
 */
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // const email = req.body.email;
  // const password = req.body.password;
  const { errors, isValid } = validateloginInput(req.body);
  if (!isValid) {
    res.status(401).json(errors);
  }
  // find user by email
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(401).json({ email: 'üser not found' });
    }
    // check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // user match
        // create jwt payload
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        // sign token
        jwt.sign(payload, CONFIG.jwt_secret, { expiresIn: '360000' }, (err, token) => {
          res.json({
            sucess: true,
            token: `Bearer ${token}`,
          });
        });
        // res.json({ msg: 'Sucess' });
      } else {
        return res.status(400).json({ passowrd: 'password incorrect' });
      }
    });
  });
});

/**
 * @route GET api/users/current
 * @description :get logged users info
 * @access private
 */

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(
    {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    },
    // req.user
  );
});

module.exports = router;
