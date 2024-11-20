
const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const PastelInvoicesCtrl = require('../controllers/ipmz_membership/pastelinvoiceitemsController');

router.get('/pastel-invoice-items/:id',PastelInvoicesCtrl.GetPastelInvoices);
router.get('/pastel-usd-invoice-items/:id',PastelInvoicesCtrl.GetPastelUSDInvoices);

module.exports = router;