const express = require("express");
const router=express.Router();
const {uploadQuotes,getQuote}=require('../../controller/quote-controller.js')

// router.post('/signup',singup);
// router.post('/login',login);

router.post('/uploadquotes',uploadQuotes);
router.get('/quotefortheday',getQuote);

module.exports=router;