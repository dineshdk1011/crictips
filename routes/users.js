var express = require('express');
var router = express.Router();
const UserController = require('../controllers/User.controller')



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', UserController.create)
router.post('/update', UserController.update)
router.post('/view', UserController.view)
router.get('/viewall', UserController.viewall)
router.delete('/destroy', UserController.destroy)
router.post('/login', UserController.login)
router.post('/jwtvalidation', UserController.jwtvalidation)
router.post('/passwordchange', UserController.passwordchange)
router.post('/mail', UserController.mail)


module.exports = router;
