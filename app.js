const express=require("express");
const bodyParser=require("body-parser");
const socket=require('socket.io');


const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile("index.html");
});


var server=app.listen(3000,function(){
    console.log("server is running at port 3000");
});

//link socket to server
var io=socket(server);

//check for connections to server from client side

io.on('connection',function(socket){   //when any client conncts connection is made and callback triggers
    console.log(socket.id);
    
    socket.on('chat',function(data){
        console.log("emmiting");
        io.sockets.emit('chat',data);
    });
})

//listen for s