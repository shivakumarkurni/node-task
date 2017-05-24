var EventEmitter=require("events");
 var fs=require("fs") ;
 var emitter=new EventEmitter(); 
var filePath=__dirname+"/customer.json";
emitter.on("startReading",function(filePath){
         fs.readFile(filePath,"UTF-8",function(err,data){
         	if(err){
         		console.log("Error message");
         	}
         	console.log(data);
         })
}) 
emitter.emit("startReading",filePath);
