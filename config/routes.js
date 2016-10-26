const router = require('express').Router();
const usersControllers = require("../controllers/users");


router.route('/api/users')
.get(usersControllers.index)
.post(usersControllers.create);

module.exports = router;
