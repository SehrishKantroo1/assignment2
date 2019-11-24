var position = [0,0];
var snake1 = 15;
var falltoposition1 = 5;
var snake2 = 23;
var falltoposition2 = 13;
var ladder1 = 2;
var climbtoposition1 = 12;
var ladder2 = 10;
var climbtoposition2 = 20;

function Roll(user){
out = document.getElementById("output");
rolldie = Math.floor(Math.random() * 6) + 1;
position[user-1] += rolldie;
var stumble = "";
switch(position[user-1]){
case snake1:
position[user-1] = falltoposition1;
stumble = ", You stumble on a snake, go back to position ";
break;
case snake2:
position[user-1] = falltoposition2;
stumble = ", You stumble on a snake, go back to position ";
break;
case ladder1:
position[user-1] = climbtoposition1;
stumble = ", You stumble on a ladder, advance to postion ";
break;
case ladder2:
position[user-1] = climbtoposition2;
stumble = ", You stumble on a ladder, advance to postion ";
break;
default :
stumble = ", move to position ";
break;
}
if(position[user-1] > 25){
out.textContent += "Player "+user+" WON!!!\n...Game Over...";
inps = document.getElementById("btn1");
inps.disabled = true;
inps = document.getElementById("btn2");
inps.disabled = true;
}
else
out.textContent += "Player "+ user + " rolls...Die: " + rolldie + stumble + position[user-1] + "\n";
}
