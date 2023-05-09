const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_controller');
const passport = require('passport');
router.get('/',homecontroller.signInPage);
router.post('/Sign-in',passport.authenticate('local',{failureRedirect: '/' }),homecontroller.SignIn);
router.get('/signUp',homecontroller.createSessionPage);
router.get('/destroy_session' ,homecontroller.SignOut);
router.post('/create_session', homecontroller.createSession);
router.use('/employee',require('./employeedashboard'));
router.use('/student', require('./interview'));
router.use('/result',require('./result'));
router.use('/job',require('./job'));

module.exports = router;