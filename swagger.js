const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger_output.json'
const endpointsFiles = ['./routers/comptes.js']
swaggerAutogen(outputFile, endpointsFiles)
