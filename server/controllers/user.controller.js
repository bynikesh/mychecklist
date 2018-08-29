const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model.js');

module.exports = {
  create(req, res, next) {
    userModel.create(
      { name: req.body.name, email: req.body.email, password: req.body.password },
      (err, result) => {
        if (err) next(err);
        else res.json({ status: 'success', message: 'User added successfully!!!', data: null });
      },
    );
  },
  authenticate(req, res, next) {
    userModel.findOne({ email: req.body.email }, (err, userInfo) => {
      if (err) {
        next(err);
      } else if (bcrypt.compareSync(req.body.password, userInfo.password)) {
        const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), {
          expiresIn: '1h',
        });
        res.json({
          status: 'success',
          message: 'user found!!!',
          data: { user: userInfo, token },
        });
      } else {
        res.json({ status: 'error', message: 'Invalid email/password!!!', data: null });
      }
    });
  },
};
