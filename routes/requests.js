const express = require ('express');


const requestsController = require('../controllers/requests');

const router = express.Router();
// for get request 
router.get('/requests',requestsController.getPosts);

// for post request , may contain a json body 
  router.post('/post',requestsController.createPost);


module.exports = router;
 