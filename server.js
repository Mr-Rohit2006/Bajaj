const express = require('express');
const app = express();
const route = require('./routes/route.js');
const port = 3000;

app.use(express.json());

app.use('/', route);

app.listen(port,(err)=>{
    if(err)  console.log(err);      
    else console.log(`Server is running on port ${port}`);    
})