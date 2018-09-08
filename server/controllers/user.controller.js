// // const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');
// const Users = require('../models/User.model.js');

// exports.create = (req, res) => {
//   if (!req.body.email) {
//     return res.status(400).send({
//       message: 'email content can not be empty',
//     });
//   }
//   // Create a List
//   const user = new User({
//     email: req.body.title || 'Untitled email',
//     password: req.body.password,
//   });

//   // Save List in the database
//   user
//     .save()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occurred while creating the List.',
//       });
//     });
// };
