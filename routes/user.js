// 라우팅 설정

const express = require('express');
const router = express.Router();
const userCtrl = require('./user.ctrl');

router.get('/', userCtrl.all);
router.get('/:id', userCtrl.read);
router.delete('/:id', userCtrl.del);
router.post('/', userCtrl.create);
router.put('/:id', userCtrl.update);

module.exports = router;
