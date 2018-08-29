module.exports = (app) => {
  const lists = require('../controllers/list.controller.js');

  // Create a new List
  app.post('/lists', lists.create);

  // Retrieve all List
  app.get('/lists', lists.findAll);

  // Retrieve a single Note with listId
  app.get('/lists/:listId', lists.findOne);

  // Update a List with listId
  app.put('/lists/:listId', lists.update);

  // Delete a List with listId
  app.delete('/lists/:listId', lists.delete);
};
