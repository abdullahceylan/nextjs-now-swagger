const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test API with autogenerated swagger doc',
    },
  },
  // List of files to be processed.
  apis: ['server.js'],
};

const specs = swaggerJsdoc(options);
module.exports = (server) => {
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
