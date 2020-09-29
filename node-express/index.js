const express = require('express'),
http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');


//CONFIG
const hostname = 'localhost';
const port = 3000;
const app = express();

//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

//ROUTES
app.use('/dishes', dishRouter);


//create and listen server
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});