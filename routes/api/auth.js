const express = require('express');
const registrationController = require('../../controller/registrationController/registrationController');
const emailVerificationController = require('../../controller/registrationController/emailVerificationController');
const router = express.Router();


router.post('/registration', registrationController);
router.post('/emailVerification', emailVerificationController);


module.exports = router;