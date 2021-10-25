// 라우팅 설정

const express = require('express');
const router = express.Router();
const userCtrl = require('./user.ctrl');

router.get('/', userCtrl.all);
router.post('/', userCtrl.create);
router.get('/:id', userCtrl.read);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.del);

module.exports = router;
