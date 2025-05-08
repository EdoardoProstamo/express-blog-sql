const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/script');
//error 500
const errorsCatcher = require('./middlewares/errorsCatcher');
//error 404
const notFound = require('./middlewares/notFound');

// asset statici
app.use(express.static('public'));

// body-parser (application/json)
app.use(express.json());

// rotta router
app.use("/script", postsRouter);

//error 500
app.use(errorsCatcher);

//error 404
app.use(notFound);

// lancio server
app.listen (port, () => {
    console.log('Server attivato sulla porta ' + port);
});