const express = require('express');
const routerPerson= require('./routers/comptes')
const app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
app.use(express.json());
app.use('/persons', routerPerson)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.listen(3000, () => {
console.log(`Running on 3000`);
});
