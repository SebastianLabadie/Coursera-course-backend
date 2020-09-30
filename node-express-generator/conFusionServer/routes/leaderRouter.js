const {Router} = require('express');
const bodyParser = require('body-parser');

const leaderRouter = Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});


leaderRouter.route('/:leaderID')
    .get( (req, res, next) => {
        res.end('WILL SEND YOU ALL DETAILS ABOUT: ' + req.params.leaderID)
    })
    .post((req, res, next) => {
        res.end('THIS IS NOT SUPPORTED IN /leaders/' + req.params.leaderID)
    })
    .put((req, res, next) => {
        res.end('WILL UPDATE leader: ' + req.params.leaderID + ' WITH DETAILS: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('DELETE leader: ' + req.params.leaderID + ' WITH DETAILS: ' + req.body.description)
    });
module.exports = leaderRouter;