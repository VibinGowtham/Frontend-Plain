let login=document.getElementById("form1");
let register=document.getElementById("form2");

function reset(){
    login.style.display="none";
    register.style.display="none";
}

function displayLogin(){
    reset()
login.style.display="grid";
login.style.alignItems="center";
login.style.justifyContent="center";
}

function displayRegister(){
    reset()
register.style.display="grid";
register.style.alignItems="center";
register.style.justifyContent="center";
register.style.height="85%";
}