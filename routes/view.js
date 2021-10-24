// 라우팅 설정

const express = require('express');
const router = express.Router();
const viewCtrl = require('./view.ctrl');

router.get('/', viewCtrl.mainView);
router.post('/create', viewCtrl.postCreate);
router.post('/delete', viewCtrl.postDelete);
router.post('/update', viewCtrl.postUpdate);

module.exports = router;