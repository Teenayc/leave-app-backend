const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const EbraryCtrl = require('../controllers/ipmz_portal/ebraryController');

// router.get('/bought-material/:id', auth.authStudentRole, EbraryCtrl.GetBoughtMaterial);
router.get('/bought-material/:id', EbraryCtrl.GetBoughtMaterial);
router.get('/subjects-bought/:subjectname',auth.authStudentRole, EbraryCtrl.GetSubjectKeyByName);
router.get('/download-module/:module', auth.authStudentRole, EbraryCtrl.GetModule);

module.exports = router;