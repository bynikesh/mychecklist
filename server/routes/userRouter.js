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

// Require the controllers WHICH WE DID NOT CREATE YET!!
const checklist_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;