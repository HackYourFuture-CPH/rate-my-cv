/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const cvController = require('../controllers/cv.controller');

/**
 * @swagger
 * /modules:
 *  get:
 *    summary: Get all modules
 *    description:
 *      Will return all modules.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  cvController
    .getCV()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /modules/{ID}:
 *  get:
 *    summary: Get module by ID
 *    description:
 *      Will return single module with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the module to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  cvController
    .getCVById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
