const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const NotificationsCtrl = require('../controllers/ipmz_portal/notificationController');

router.get('/all-notifications', auth.authStaffStudentFacilitatorRole, NotificationsCtrl.GetNotifications);
router.get('/all-notification-views', auth.authStaffStudentFacilitatorRole, NotificationsCtrl.GetNotificationViews);

module.exports = router;