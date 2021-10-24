// 라우팅 설정

const express = require('express');
const router = express.Router();
const loginCtrl = require('./login.ctrl');

router.get('/signup', loginCtrl.signupView);
router.post('/signup', loginCtrl.signup);
router.get('/login', loginCtrl.loginView);
router.post('/login_process', loginCtrl.login_process);
router.get('/logout', loginCtrl.logout);

module.exports = router;