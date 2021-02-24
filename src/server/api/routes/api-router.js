const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');

const cvsRouter = require('./cvs.router');

const usersRouter = require('./users.router');

const usercvRouter = require('./usercv.router');

const reviewsRouter = require('./reviews.router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./src/server/api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/modules', modulesRouter);

router.use('/cvs', cvsRouter);

router.use('/users', usersRouter);

router.use('/usercv', usercvRouter); 

router.use('/reviews', reviewsRouter);

module.exports = router;
