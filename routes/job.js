const express = require('express');
const router = express.Router();
const jobList = require('../controllers/job_controller');
router.get('/list' , jobList.jobPage);
module.exports = router;