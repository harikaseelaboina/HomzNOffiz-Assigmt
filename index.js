const express=require('express');
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const cors=require("cors");

const ProductSchema=require("./ProductSchema.js")
const middleware=require("./middleware.js")

const app=express();
app.use(express.json());
app.use(cors({origin:"*"}))     

// "*" can be used if we want to acess from any domain, if we want to access from particular domain we need to set domain name instaed of *

mongoose.connect("mongodb+srv://harika123:harika123@cluster0.qf8igxp.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch((e)=>{console.log(e)})

app.post("/inputdata",async(req,res)=>{
    try{
        const {name,description,image,price,category}=req.body;
    
    let checkProductRegistration=await ProductSchema.findOne({name})

    if(checkProductRegistration){
        return res.status(400).send("Product already registered");
    }

    

    let newProduct=new ProductSchema({name,description,image,price,category});
    await newProduct.save();
    res.status(200).send("Product Registered Successfully")

    }
    catch(err){
        console.log(err);
        return res.status(500).send("internal server error");
    }
})


app.get("/data",async(req,res)=>{
    try{
   const allData=await ProductSchema.find();
   res.json(allData)
    }
   catch(err){
        console.log(err);
        return res.status(500).send("internal server error");
    }
})

app.listen(5000,()=>console.log("server running"));
