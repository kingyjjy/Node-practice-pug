const express = require('express');
const router= express.Router();

// GET router
// 정규표현식을 비롯한 특수 패턴 사용이 가능 - 주소를 파라미터로 넘기는 기능도 있음
router.get('/',(req, res)=>{
    res.render('index', {title:'Express'});
});

module.exports = router;

router.get('/abc:id',(req, res)=>{
    console.log(req.params, req.query);
    res.send(`GET /abc ${req.params['id']},${req.query['age']},${req.query.char}`);
});

router.get('/def',(req,res)=>{
    res.send('GET /def');
});