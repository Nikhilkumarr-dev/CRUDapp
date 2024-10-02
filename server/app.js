const express = require('express');
const app = express();
const cors=require('cors');
const dotenv= require('dotenv');
dotenv.config();

const db = require('./db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extendd:false}));

//create
app.post('/insert',(req,res)=>{

});

//read
app.get('/getAll',(req,res)=>
{
  const db = db.get();
  const result = db.getAllData();
  response.json({
    success: true,
    message:"happy days"
  })
});

//update


//delete


app.listen(process.env.PORT,()=>console.log('app is running'));

