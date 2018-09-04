const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const userController = require('../controllers/user.controller');
const validateRegisterInput = require('../lib/register');
const validateLoginInput = require('../lib/login');

const User = require('../models/user.model');

router.get('/test');
/**
 * @route  {} 'api/profile'
 * @param  {} userController.create
 * @access public
 */
router.post('/profile', userController.create);

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists',
      });
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      if (err) console.error('There was an error', err);
      else {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) console.error('There was an error', err);
          else {
            newUser.password = hash;
            newUser.save().then((user) => {
              res.json(user);
            });
          }
        });
      }
    });
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
        };
        jwt.sign(
          payload,
          'secret',
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) console.error('There is some error in token', err);
            else {
              res.json({
                success: true,
                token: `Bearer ${token}`,
              });
            }
          },
        );
      } else {
        errors.password = 'Incorrect Password';
        return res.status(400).json(errors);
      }
    });
  });
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => res.json({
  id: req.user.id,
  name: req.user.name,
  email: req.user.email,
}));

module.exports = router;
