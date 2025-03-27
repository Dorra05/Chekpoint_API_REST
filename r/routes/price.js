let express = require('express');
let route = express.Router();

const navbar= `<nav>
<a href='/'>home</a>
</nav>
`



route.get('/price', (req , res)=>{
    res.send(`${navbar}
        <h1> the product price </h1>
         <link rel='stylesheet' href='style.css'/>`)
});

route.get('/price/quantity', (req, res)=>{
    res.send(`<p>the quantity is 100 peace</p>`)
});

route.get('/price/:id', (req, res)=>{
    res.send(`<li>500</li>`)
});



module.exports= {route}