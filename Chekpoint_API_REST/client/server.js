let express=require('express');
require('dotenv').config();
let {connect}=require('./Database/connect');
let newroute=require('./routers/router')

let app=express();


app.use(express.json());
app.use(newroute.route);
connect();

app.listen(process.env.PORT, (err)=>{
    console.log(`Server is run on http://localhost${process.env.PORT}`);
})