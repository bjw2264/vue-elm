var express = require('express');
var config = require('./config/index');
var port = process.env.PORT || config.build.port;

var app = express();
var router = express.Router();
router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});
app.use(router);

var appData = require('./data.json');
var goods = appData.goods;
var seller = appData.seller;
var ratings = appData.ratings;
var apiRouter = express.Router();
apiRouter.get('/goods', (req, res) => {
  res.json({
    errno: 0,
    data: goods
  });
});
apiRouter.get('/seller', (req, res) => {
  res.json({
    errno: 0,
    data: seller
  });
});
apiRouter.get('/ratings', (req, res) => {
  res.json({
    errno: 0,
    data: ratings
  });
});
app.use('/api', apiRouter);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listen at http://localhost:' + port + '\n');
});