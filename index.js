const express = require('express');
const cors= require('cors');

const app=express();
app.use(cors('*'));
app.get('/',(request,response)=>{
    response.send("this is my background application");
})
app.listen(2020,'0.0.0.0',()=>{
  console.log("listening at port 2020")  
})