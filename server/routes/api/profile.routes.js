/**
 *  Copyright (c) 2018
 *
 * long description for the file
 *
 * @summary handle routes realtaed touser Profile
 * @author Nikesh Adhikari
 *
 * Created at     : 2018-09-10 00:00:57
 * Last modified  : 2018-10-03 16:16:11
 */

const express = require('express');

const router = express.Router();
// const mongoose = require('mongoose');
const passport = require('passport');
const Profile = require('../../models/Profile.model');
const User = require('../../models/User.model');
const validateProfileInput = require('../../lib/profile');

// const User = require('../../models/User.model');

router.get('/test', (req, res) => {
  res.json({
    msg: 'Profile work',
  });
});

/**
 * @route :GET api/profile
 * @description Get current users profile
 * @access Private
 */
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user.id })
    .populate('user', ['name', 'email'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'there is no profile setup yet';
        return res.status(400).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(400).json(err));
});

/**
 * @route :GET api/profile/:handle
 * @description Get users profile by handle
 * @access Public
 */
router.get('/:handle', (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'Sorry No profile realted to this handle was found ';
        return res.status(400).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(400).json(err));
});

/**
 * @route :GET api/profile/:user_id
 * @description Get users profile by userid
 * @access Public
 */
router.get('/:user_id', (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'Sorry No profile realted to this userid was found ';
        return res.status(400).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(400).json(err));
});
/**
 * @route :POST api/profile/all
 * @description CGet all the profiles
 * @access Public
 */
router.get('/all', (req, res) => {
  const errors = {};

  Profile.find()
    .populate('user', ['name', 'email'])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get('/handle/:handle', (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'email'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});
// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'email'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json({ profile: 'There is no profile for this user' }));
});

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOneAndRemove({ user: req.user.id }).then(() => {
    User.findOneAndRemove({ _id: req.user.id }).then(() => res.json({ success: true }));
  });
});

/**
 * @route :POST api/profile
 * @description Create users profile
 * @access Private
 */
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);
  // // check validation
  if (!isValid) {
    // console.log(errors);
    return res.status(400).json(errors);
  }
  const profileFields = {};
  // const errors = {};
  profileFields.user = req.user.id;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;

  profileFields.social = {};

  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.github) profileFields.social.github = req.body.github;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;

  Profile.findOne({ user: req.user.id }).then((profile) => {
    if (profile) {
      // update profile
      Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true }).then(
        profile => res.json(profile),
      );
    } else {
      // create
      // check if handle exist
      Profile.findOne({ handle: profileFields.handle }).then((profile) => {
        if (profile) {
          errors.handle = 'that handle already exists';
          res.status(400).json(errors);
        }
        // save profile
        new Profile(profileFields).save().then(profile => res.json(profile));
      });
    }
  });
});

module.exports = router;
