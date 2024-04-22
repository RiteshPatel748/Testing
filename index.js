import express from "express";
import dotenv from "dotenv";
dotenv.config();

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
app.get("/contract",(req,res)=>{
    res.send("<h1>About</h1>");
});

app.listen(PORT,()=>{
    console.log("Your port is %s",PORT);
});