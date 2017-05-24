var express=require("express");
var app=express();
var router=express.Router();

router.get("/",function(request,response){

	response.json({message:"HelloWorld"})
})
router.get("/array",function(request,response){
	var customer=[
          {name:"shiva",age:23,city:"kurnool",State:"Andhrapradesh"},
          {name:"Aravind",age:23,city:"Tirupathi",State:"Andhrapradesh"},
          {name:"Naveen",age:23,city:"Bangalore",State:"Karnataka"},
          {name:"usha",age:23,city:"Hyderabad",State:"Telangana"}
	]
	response.json({message:customer})
})

app.use("/api",router)
var PORT=process.env.PORT||1337;

app.listen(PORT,function(){
	console.log("server is listening at port no:"+PORT)
})



// app.get("/",function(request,response){

// 	response.json({message:"HelloWorld"})
// })
// app.get("/array",function(request,response){
// 	var customer=[
//           {name:"shiva",age:23,city:"kurnool",State:"Andhrapradesh"},
//           {name:"Aravind",age:23,city:"Tirupathi",State:"Andhrapradesh"},
//           {name:"Naveen",age:23,city:"Bangalore",State:"Karnataka"},
//           {name:"usha",age:23,city:"Hyderabad",State:"Telangana"}
// 	]
// 	response.json({message:customer})
// })
// var PORT=process.env.PORT||1337;

// app.listen(PORT,function(){
// 	console.log("server is listening at port no:"+PORT)
// })