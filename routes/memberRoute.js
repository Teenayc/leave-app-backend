const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const MembersCtrl = require('../controllers/ipmz_membership/memberController');

router.get('/all-members', MembersCtrl.GetMembers);
router.get('/member/:id', auth.authStudentRole, MembersCtrl.GetMemberByNumber);
router.put('/update-member/:id', auth.authStudentRole, MembersCtrl.updateMemberDetails);
router.put('/update-member-without-cv/:id', auth.authStudentRole, MembersCtrl.updateMemberWithoutCVFile);
router.put('/update-member-profile-image/:id', auth.authStudentRole, MembersCtrl.updateMemberProfileImage);
router.get('/paid-members-new-intellectus-notification', MembersCtrl.ThisYearPaidMembers);

router.get('/portal-markers/:id', auth.authFacilitatorRole, MembersCtrl.GetMarkerByUsername);

module.exports = router;