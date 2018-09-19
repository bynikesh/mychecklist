// const passport = require('passport');
const List = require('../models/List.model.js');
// const lists = require('../../controllers/list.controller.js');
const Profile = require('../models/Profile.model');
/**
 * @route :POST api/list/
 * @description :Create and Save a new List
 * @access Private
 */
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: 'List content can not be empty',
    });
  }

  // Create a List
  const list = new List({
    title: req.body.title || 'Untitled List',
    content: req.body.content,
    user: req.user.id,
  });

  // Save List in the database
  list
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the List.',
      });
    });
};
/**
 * @route :GET api/list/
 * @description Retrieve and return all lists from the database.
 * @access Private
 */
exports.findAll = (req, res) => {
  List.find()
    .then((lists) => {
      res.send(lists);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving lists.',
      });
    });
};
/**
 * @route :GET api/list/:listId
 * @description find a single list with the listid
 * @access Private
 */
exports.findOne = (req, res) => {
  List.findById(req.params.listId)
    .then((list) => {
      if (!list) {
        return res.status(404).send({
          message: `List not found with id ${req.params.listId}`,
        });
      }
      res.send(list);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `list not found with id ${req.params.listId}`,
        });
      }
      return res.status(500).send({
        message: `Error retrieving list with id ${req.params.listId}`,
      });
    });
};
/**
 * @route :GET api/list/:listId
 * @description update a list with the listid in the request
 * @access Private
 */

exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: 'List content can not be empty',
    });
  }

  // Find List and update it with the request body
  List.findByIdAndUpdate(
    req.params.listId,
    {
      title: req.body.title || 'Untitled List',
      content: req.body.content,
    },
    { new: true },
  )
    .then((list) => {
      if (!list) {
        return res.status(404).send({
          message: `list not found with id ${req.params.listId}`,
        });
      }
      res.send(list);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `list not found with id ${req.params.listId}`,
        });
      }
      return res.status(500).send({
        message: `Error updating list with id ${req.params.listId}`,
      });
    });
};

// Delete a List with the specified ListId in the request

exports.delete = (req, res) => {
  List.findByIdAndRemove(req.params.listId)
    .then((list) => {
      if (!list) {
        return res.status(404).send({
          message: `list not found with id ${req.params.listId}`,
        });
      }
      res.send({ message: 'list deleted successfully!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: `list not found with id ${req.params.listId}`,
        });
      }
      return res.status(500).send({
        message: `Could not delete list with id ${req.params.listId}`,
      });
    });
};
