require("./server")
const express=require("express");
const mongoose= require("mongoose");
const app=express();
app.use(express.json());
app.post('/customersignup',async(req,res)=>{
    try {
        const userdata= req.body.mail;
    } catch (error) {
        
    }
})