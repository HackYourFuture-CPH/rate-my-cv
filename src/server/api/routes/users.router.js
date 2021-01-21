/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

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
  usersController
    .getUsers()
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
  usersController
    .getUsersById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /modules/{ID}:
 *  patch:
 *    summary: Create a users
 *    description:
 *      Will create a users.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the users to patch.
 *      - in: body
 *        name: module
 *        description: The users to create.
 *        schema:
 *          type: object
 *          properties:
 *            full_name:
 *              type: string
 *            position:
 *              type: string
 *              linkedin:
 *              type: string
 *             github:
 *              type: string
 *            website:
 *              type: string
 *            profile_image_url:
 *              type: string
 *    responses:
 *      200:
 *        description: Module was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  userController
    .editUser(req.params.id, req.body)
    .then((result) => res.json(result))
    .catch(next);
});


module.exports = router;
