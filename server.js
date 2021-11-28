const express=require("express");
const app=express();
app.get("/",function(request,response){
response.send("<h1>Hello World!</h1>");
})
app.get("/contact",function(req,res){
res.send("contact me at: ayushwinner@gmail.com");
})
app.get("/about",function(req,res){
res.send("Myself Ayush Mishra Software Engineer at Gameskraft");
})
app.get("/hobbies",function(req,res){
res.send("<ul><li>Tea</li><li>Coffee</li></ul>");
})
app.listen(3000,function(){
console.log("listening on port 3000");
})
