 const express=require ("express")

 const app=new express()
 app.use(express.json())

 const array=[
    {ID:1000,name:"zara",age:19,dept:"BCOM"},
    {ID:1001,name:"Tiara",age:18,dept:"BCA"},
    {ID:1002,name:"lia",age:20,dept:"BBA"},

 ];

 app.get("/view",(req,res)=>{
    res.send(array)
 })

 app.put("/edit",(req,res)=>{
    array.splice(1,1,res.body);
    res.send("Update Successfully");
 });
 
 app.post("/add",(req,res)=>{
    console.log(req.body)
    array.push(req.body)
    res.send("data added");
 })
 app.listen(1374,()=>{
    console.log("port is running")
 })
   