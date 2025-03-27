let express = require('express');
let product = require('./routes/produits')
let price = require('./routes/price');
let workHour = require('./middleWare/workTime')

let app = express();
let port = 5000;

app.use(product.route);
app.use(price.route)
app.use(express.static('public'));
app.use(workHour.work)

const navbar = `
<nav>
<a href='/product'>product</a>
<a href='/price'>price</a>
</nav>
`



app.get('/', (req, res)=>{
    res.send(`${navbar}<h1>home</h1>
        <link rel='stylesheet' href='style.css'/>
        `)
})




app.listen(port , console.log(`server is running on http://localhost:${port}`))