/* This is the router for cvs */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const cvsController = require('../controllers/cvs.controller');

/**
 * @swagger
 * /modules:
 *  get:
 *    summary: Get all cvs
 *    description:
 *      Will return all cvs.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', (req, res, next) => {
  cvsController
    .getCvs(req.query.title, req.query.limit)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /cvs/{ID}:
 *  get:
 *    summary: Get cv by ID
 *    description:
 *      Will return single cv with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the cv to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', (req, res, next) => {
  cvsController
    .getCvById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /cvs:
 *  post:
 *    summary: Create a cv
 *    description:
 *      Will create a cv.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: module
 *        description: The module to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *
 *
 *          properties:
 *            title:
 *              type: string
 *
 *    responses:
 *      201:
 *        description: CV created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', (req, res) => {
  cvsController
    .createCvs(req.body)
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
 * /cvs/{ID}:
 *  patch:
 *    
 *    summary: Edit a cv
 *    description:
 *      Will edit a cv.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the cv to patch.
 *      - in: body
 *        name: cvs
 *        description: The cv to update.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - firebaseToken
 *        properties:
 *            title:
 *                type: string
 *            createdAt:
 *                format: date-time
 *            file_url:
 *                type: string
 *            fk_user_id: string
 *            updatedAt:
 *                format: date-time
 *            deletedAt:
 *                format: date-time
 *           
 *    responses:
 *      200:
 *       description: cv was patched
 *      5XX:
 *        description: Unexpected error.
 */
router.patch('/:id', (req, res) => {
  cvsController
    .editCv(req.params.id, req.body)
    .then((result) => {
      // If result is equal to 0, then that means the cvs id does not exist
      if (result === 0) {
        res.status(400).send(`CVS ID '${req.params.id}' does not exist.`);
      } else {
        res.json({ success: true });
       }
    })
    .catch((error) => console.log(error));
});

/**
 * @swagger
 * /cvs/{ID}:
 *  Delete:
 *    summary: Delete a certain CV.
 *    description:
 *      Will delete a cv with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the CV to be deleted.
 *    responses:
 *      200:
 *        description:  CV is finally deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  cvsController
    .deleteCvs(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the cv id does not exist
      if (result === 0) {
        res.status(404).send('The cv ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    .catch((error) => console.log(error));
});

module.exports = router;
