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
 *    summary: Get all users
 *    description:
 *      Will return all users.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  console.log(result);
  usersController
    .getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /modules/{ID}:
 *  get:
 *    summary: Get user by ID
 *    description:
 *      Will return single user with a matching ID.
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
 * /modules:
 *  post:
 *    summary: Create a user
 *    description:
 *      Will create a user.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: The module to create a user.
 *        schema:
 *          type: object
 *          required:
 *            - full_name
 *            - position
 *            - linkedin
 *            - github
 *            - website
 *            - profile_image_url
 *          properties:
 *            full_name:
 *              type: string
 *            position:
 *              type: string
 *            linkedin:
 *              type: string
 *            github:
 *              type: string
 *            website:
 *              type: string
 *            profile_image_url:
 *              type: string
 *    responses:
 *      201:
 *        description: user created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  usersController
    .createUser(req.body)
    .then((result) => res.json(result))
    .catch((error) => {
      console.log(error);

      res
        .status(400)
        .send('Bad request')
        .end();
    });
});

module.exports = router;
