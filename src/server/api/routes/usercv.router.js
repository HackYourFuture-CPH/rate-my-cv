/* This is the router for cvs */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usercvController = require('../controllers/usercv.controller');

/**
 * @swagger
 * /usercv:
 *  get:
 *    summary: Get up to 20 users' Cvs.
 *    description:
 *      Will return 20 users' Cvs.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  usercvController
    .getUserCvs(req.query.limit)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
