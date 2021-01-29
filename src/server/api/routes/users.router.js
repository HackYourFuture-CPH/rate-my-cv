/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */
const express = require('express');
const router = express.Router({ mergeParams: true });
// controllers
const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * /cvs/{ID}:
 *  patch:
 *    summary: edit users
 *    description:
 *      Will create a new user.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the user to patch.
 *      - in: body
 *        name: patch users
 *        description: The user to create.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *
 *    responses:
 *      200:
 *        description: user was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  usersController
    .editUser(req.params.id, req.body)
    .then((result) => {
      // If result is equal to 0, then that means the user id does not exist
      if (result === 0) {
        res.status(400).send(`User ID '${req.params.id}' does not exist.`);
      } else {
        res.json({ success: true });
        res.json({ success: true });  
      }
    })
    .catch((error) => console.log(error));
});


module.exports = router;