const express=require('express')
const bodyparser=require('body-parser')
require('dotenv').config()
const cors=require('cors');
const db=require('./DbConection/DbConfig')
const userRoute=require('./Routes/UserRouter')

const app=express();
app.use(bodyparser.json())
app.use(cors())
app.use('/user',userRoute)



app.listen(process.env.PORT,console.log(`server listing to the port ${process.env.PORT} `))