const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('C:/FrontDeveloperStudy/Angular/testAngular1/Backend/db.json');
const middlewares = jsonServer.defaults();
router.db._.id = "id";
const port = process.env.PORT || 3020;
const fs = require('fs')
server.use(middlewares);
server.use(jsonServer.bodyParser)


server.get('/getClient', function (req, res,next) {
  res.redirect('/createClient')
})

router.render = (req, res) => {
  if (req.method == "POST" && req.url == "/createClient") {
    res.json({ "message": "Client Added Successfully" })
  }
  if (req.method == "GET" && req.url.includes('/createClient')) {
    res.json(res.locals.data)
  }
}
server.use(router);
server.listen(port);
