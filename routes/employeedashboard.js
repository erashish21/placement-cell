const express = require('express');
const router = express.Router();
const passport = require('passport');
const employeeController = require('../controllers/employee_controller');
const employeedashboard = require('../controllers/student_controller');
//router.get('/student',passport.checkAuthentication,employeeController.student);
router.get('/sign-up',employeeController.signUp);
router.get('/sign-in',employeeController.signIn);
router.post('/create',employeeController.create);
router.get('/dashboard',employeeController.dashboard);
router.get('/student',employeedashboard.addStudentPage);
router.post('/addstudent',employeedashboard.addStudent);
router.get('/download',employeedashboard.downloadData);
//router.post('/create-session',userControllers.createSession);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/employee/sign-in'},
),employeeController.createSession);

//router.get('/sign-out',employeeController.destroySession);
router.get('/auth/google',passport.authenticate('google',{scope: ['student','email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/employee/sign-in'}), employeeController.createSession);
module.exports = router;
