/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * /users:
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
  usersController
    .getUsers()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /users/{ID}:
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
 * /users:
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
 *            - fullName
 *            - firebaseToken
 *          properties:
 *            fullName:
 *              type: string
 *            position:
 *              type: string
 *            linkedin:
 *              type: string
 *            github:
 *              type: string
 *            website:
 *              type: string
 *            profileImageUrl:
 *              type: string
 *            firebaseToken:
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
/**
 * @swagger
 * /users/{ID}:
 *  patch:
 *    summary: Edit a user
 *    description:
 *      Will create a user.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the user to patch.
 *      - in: body
 *        name: users
 *        description: The user to update.
 *        schema:
 *          type: object
 *          required:
 *            - fullName
 *            - firebaseToken
 *          properties:
 *            fullName:
 *              type: string
 *            position:
 *              type: string
 *            linkedin:
 *              type: string
 *            github:
 *              type: string
 *            website:
 *              type: string
 *            profileImageUrl:
 *              type: string
 *            firebaseToken:
 *              type: string
 *    responses:
 *      200:
 *        description: user was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res) => {
  usersController
    .editUser(req.params.id, req.body)
    .then((result) => {
      // If result is equal to 0, then that means the user id does not exist
      if (result === 0) {
        res.status(400).send(`User ID '${req.params.id}' does not exist.`);
      } else {
        res.json({ success: true });
        }
    })
    .catch((error) => console.log(error));
});

/**
 * @swagger
 * /users/{ID}:
 *  delete:
 *    summary: Delete a user
 *    description:
 *      Will delete a user with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the User to delete.
 *    responses:
 *      200:
 *        description: User deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  usersController
    .deleteUser(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the module id does not exist
      if (result === 0) {
        res.status(404).send('The user ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
