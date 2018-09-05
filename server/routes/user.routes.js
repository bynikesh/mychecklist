// import User from '../controllers/user';

// module.exports = api => ({
// 	api.route('/users').get(User.list);
// 	api.route('/users/:userId').get(User.get);
// 	api.route('/users').post(User.post);
// 	api.route('/users/:userId').put(User.put);
// 	api.route('/users/:userId').delete(User.delete);
// });

const express = require('express');

const router = express.Router();
const userController = require('../app/api/controllers/users');

router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
module.exports = router;
