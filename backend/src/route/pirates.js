const express = require('express');
const router = express.Router();

const {getPirates, getPirate, getPiratesByCrew, postPirate, putPirate, deletePirate}= require('../controller/pirates.js');

router.get('/pirates', getPirates);
router.get('/pirates/:id', getPirate);
router.get('/pirates/:crew', getPiratesByCrew);
router.post('/pirates', postPirate),
router.put('/pirates/:id', putPirate),
router.delete('/pirates/:id', deletePirate);

module.exports = router;