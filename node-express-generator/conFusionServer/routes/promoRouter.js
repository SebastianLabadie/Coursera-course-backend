const {Router} = require('express');
const bodyParser = require('body-parser');

const promoRouter = Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});



promoRouter.route('/:promotionID')
    .get( (req, res, next) => {
        res.end('WILL SEND YOU ALL DETAILS ABOUT: ' + req.params.promotionID)
    })
    .post((req, res, next) => {
        res.end('THIS IS NOT SUPPORTED IN /promotions/' + req.params.promotionID)
    })
    .put((req, res, next) => {
        res.end('WILL UPDATE promotion: ' + req.params.promotionID + ' WITH DETAILS: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('DELETE promotion: ' + req.params.promotionID + ' WITH DETAILS: ' + req.body.description)
    });
module.exports = promoRouter;