const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const PortalModerCtrl = require('../controllers/ipmz_portal/portalModerSubjectsController');

router.get('/moder-subjects/:marker', auth.authFacilitatorRole, PortalModerCtrl.GetPortalModerSubjects);

module.exports = router;
