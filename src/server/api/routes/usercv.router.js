/* This is the router for cvs */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usercvController = require('../controllers/usercv.controller');

/**
 * @swagger
 * /modules:
 *  get:
 *    summary: Get 20 user-cvs.
 *    description:
 *      Will return 20 user-cvs.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  usercvController
    .getUserCvs()
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
