const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const reviewsController = require('../controllers/reviews.controller');


/**
 * @swagger
 * /users:
 *  get:
 *    summary: Get reviews for specific cv
 *    description:
 *      Will return reviews
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  reviewsController
    .getReviewsByCvId(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users:
 *  get:
 *    summary: sent reviews given by user
 *    description:
 *      Will return reviews
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:userid', (req, res, next) => {
  reviewsController
    .getReviewsByUserId(req.params.userid)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
