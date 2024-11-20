const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const DiplomaProgCtrl = require('../controllers/ipmz_membership/diplomaProgressController');

// router.get('/all-members', MembersCtrl.GetMembers);
router.get('/sitting-subjects',auth.authStudentRole, DiplomaProgCtrl.GetStudentSittingPassedSubjects);
router.get('/student-subjects/:id',auth.authStudentRole, DiplomaProgCtrl.GetStudentSubjects);
router.get('/all-programs',auth.authStudentRole, DiplomaProgCtrl.GetAllPrograms);
router.get('/member-programs/:id',auth.authStudentRole, DiplomaProgCtrl.GetAllProgramsByMember);

module.exports = router;

