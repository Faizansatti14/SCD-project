const express = require ("express");
const dotenv =require ("dotenv").config();
const app=express();

const port=process.env.PORT || 5000;

const portconnection=app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

module.exports=portconnection;