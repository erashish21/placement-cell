const express = require('express');
const router = express.Router();
const interviewPage = require('../controllers/interview_controllers');
router.get('/interview_list' ,interviewPage.interviewPage);
router.get('/:id' , interviewPage.interviewForm);
router.post('/interview_allocation' , interviewPage.interviewAllocation);
module.exports = router;