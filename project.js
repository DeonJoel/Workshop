let players = document.getElementById("player");

let buns=document.getElementsByClassName("clikBtn");
var inc,winCondition;
prompter();




function check(b)
{
   
    // if(winCondition=== b)
for(var i=0;i<buns.length;i++)
buns[i].value="O";
}


function prompter()
{
     var a=prompt("Enter your name");
     
     players.textContent+=a;
     console.log(a);
}
