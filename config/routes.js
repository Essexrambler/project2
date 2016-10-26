const router = require('express').Router();
const jwt = require("jsonwebtoken");
const secret = require('./tokens').secret;

const usersControllers = require("../controllers/users");
const authControllers = require("../controllers/auth");

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized" });

  let token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, (err, payload) => {
    if(err) return res.status(401).json({message: "Unauthorized"});

    req.user = payload;

    next();

  });
}

// router.route('/api/users')
// .get(usersControllers.index)
// .post(usersControllers.create);

router.route("/register")
  .post(authControllers.register);
router.route("/login")
  .post(authControllers.login);

router.route('/api/users')
  .all(secureRoute)
  .get(usersControllers.index);
router.route('/users/:id')
  .all(secureRoute)
  .post(usersControllers.create)
  .get(usersControllers.show)
  .put(usersControllers.update)
  .delete(usersControllers.delete);

module.exports = router;
