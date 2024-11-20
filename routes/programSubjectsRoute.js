const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const ProgramSubsCtrl = require('../controllers/ipmz_membership/programSubjectsController');

router.get('/all-programs-subjects/:id', ProgramSubsCtrl.GetProgramSubjects);
// router.get('/member/:id', auth.authStudentRole, MembersCtrl.GetMemberByNumber);
// router.put('/update-member/:id', auth.authStudentRole, MembersCtrl.updateMemberDetails);
// router.put('/update-member-without-cv/:id', auth.authStudentRole, MembersCtrl.updateMemberWithoutCVFile);
// router.put('/update-member-profile-image/:id', auth.authStudentRole, MembersCtrl.updateMemberProfileImage);

module.exports = router;