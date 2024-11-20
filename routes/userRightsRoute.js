const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const rightsCtrl = require('../controllers/ipmz_membership/userRightsController');

router.post('/create-user-right', auth.authAdminRole, rightsCtrl.CreateNewUserRight);
router.get('/user-rights', auth.authAdminRole, rightsCtrl.GetAllRights);

module.exports = router;
