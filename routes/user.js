const express = require('express');
const router= express.Router();

// GET router
router.get('/',(req, res)=>{
    res.send('hello user');
});

module.exports = router;