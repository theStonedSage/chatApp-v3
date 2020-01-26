var socket=io.connect("http://localhost:3000/");
var done=false;

var output=document.getElementById('output');
var message=document.getElementById('message');
var handle=document.getElementById('handle');
var btn=document.getElementById('send');

btn.addEventListener('click',function(){
    done=true;
    output.innerHTML+='<div class="right" ><p class="text">' +handle.value+ ' : '+message.value+ '</p><i class="fas fa-user-circle"></i></div>';
    socket.emit('chat',{
        name:handle.value,
        message:message.value
    })
    
});

//listen for emits

socket.on('chat',data=>{
    if(!done){
output.innerHTML+='<div class="left"><i class="fas fa-user-circle"></i><p class="text">' +data.name+ ' : '+data.message+ '</p></div>';
    }
    done=false;
});



