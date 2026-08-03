function login(){

var user=document.getElementById("username").value;

var pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234"){

document.getElementById("login").style.display="none";

document.getElementById("dashboard").style.display="block";

}

else{

alert("Invalid Login");

}

}