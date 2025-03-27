let express = require('express');
let route = express.Router();

route.get('/product' , (req, res)=>{
    res.send(`<h1>our product</h1>`)
});

route.get('/product/quantity', (req, res)=>{
    res.send(`<p>the quantity is 100 peace</p>`)
});
module.exports =  {route}