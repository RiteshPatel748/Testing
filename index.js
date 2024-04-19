const express = require("express");
require('dotenv').config()
const app=express();
const PORT=process.env.PORT;

app.get("/",(req,res)=>{
    res.send("<h1>hello world </h1>");
});
app.get("/home",(req,res)=>{
    res.send("<h1>Home</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>About</h1>");
});
app.get("/yes",(req,res)=>{
    res.send("<h1>About</h1>");
});

app.listen(PORT,()=>{
    console.log("Your port is %s",PORT);
});