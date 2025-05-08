const express = require('express');
const router = express.Router();
const controllerPosts = require('../controller/appController');

// rotta index
router.get('/', controllerPosts.index);

// rotta show
router.get('/:id', controllerPosts.show);

// //rotta modify
router.patch('/:id', controllerPosts.modify);

//rotta store
router.post('/', controllerPosts.store);

//rotta update
router.put('/:id', controllerPosts.update);

//rotta destroy
router.delete('/:id', controllerPosts.destroy);

module.exports = router;