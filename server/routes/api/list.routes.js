const express = require('express');
const passport = require('passport');
const lists = require('../../controllers/list.controller.js');
const Profile = require('../../models/Profile.model');
const List = require('../../models/List.model');

const router = express.Router();

// Create a new List
router.post('/', passport.authenticate('jwt', { session: false }), lists.create);

// Retrieve all List
router.get('/', lists.findAll);

// Retrieve a single Note with listId
router.get('/:listId', lists.findOne);

// Update a List with listId
router.put('/:listId', lists.update);

// Delete a List with listId
router.delete('/:listId', lists.delete);
// route for liking the post by the user
router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  // const errors = {};
  Profile.findOne({ user: req.user.id }).then((profile) => {
    List.findById(req.params.id)
      .then((list) => {
        if (list.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
          return res.status(400).res.json({ alreadyliked: 'user already liked this post' });
        }
        list.likes.unshift({ user: req.user.id });
        list.save().then(list => res.json(list));
      })
      .catch(err => res.status(400).json({ postnotfound: 'No post found' }));
  });
});
// unlike the list
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  // const errors = {};
  Profile.findOne({ user: req.user.id }).then((profile) => {
    List.findById(req.params.id)
      .then((list) => {
        if (list.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
          return res.status(400).res.json({ alreadyliked: 'you havent liked the post' });
        }
        // get the remove index
        const removeIndex = list.likes.map(item => item.user.toString()).indexOf(req.user.id);
        list.likes.splice(removeIndex, 1);
        list.save().then(list => res.json(list));
      })
      .catch(err => res.status(400).json({ postnotfound: 'No post found' }));
  });
});

module.exports = router;
