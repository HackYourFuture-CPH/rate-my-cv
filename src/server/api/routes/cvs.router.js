/* This is the router for cvs */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const cvsController = require('../controllers/cvs.controller');

/**
 * @swagger
 * /cvs/{ID}:
 *  patch:
 *    summary: Create a cv
 *    description:
 *      Will create a cv.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the cvs to patch.
 *      - in: body
 *        name: cvs
 *        description: The cvs to create.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *
 *    responses:
 *      200:
 *        description: CV was patched
 *      400:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res, next) => {
  cvsController
    .editCv(req.params.id, req.body)
    .then((result) => {
      // If result is equal to 0, then that means the cvs id does not exist
      if (result === 0) {
        res.status(400).send(`the cv with the id number :'${req.params.id}' doesn't exist in our database. Please check again!`);
      } else {
        res.json({ success: true });
       }
    })
    .catch((error) => console.log(error));
});

module.exports = router;