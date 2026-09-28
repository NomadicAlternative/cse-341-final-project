const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'CSE 341 Final Project API',
        description: 'CSE 341 Final Project API'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);