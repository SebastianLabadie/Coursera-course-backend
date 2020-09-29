const {Router} = require('express');
const bodyParser = require('body-parser');

const dishRouter = Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

ddishRouter.route('/:dishID')
.get( (req, res, next) => {
    res.end('WILL SEND YOU ALL DETAILS ABOUT: ' + req.params.dishID)
})
.post((req, res, next) => {
    res.end('THIS IS NOT SUPPORTED IN /dishes/' + req.params.dishID)
})
.put((req, res, next) => {
    res.end('WILL UPDATE DISH: ' + req.params.dishID + ' WITH DETAILS: ' + req.body.description)
})
.delete((req, res, next) => {
    res.end('DELETE DISH: ' + req.params.dishID + ' WITH DETAILS: ' + req.body.description)
});

module.exports = dishRouter;