function next(){
    document.getElementById("user").style.display="none";
    document.getElementById("pass").style.display="block";
    var user = document.getElementById("username_input").value;
    if(user.substr(0,1) != "@"){
       var utemp = user;
       var user = "@"+utemp;
       document.getElementById("un1").innerText=user;
       document.getElementById("username_input").value=user;
    }else{
        document.getElementById("un1").innerText=user;
        document.getElementById("username_input").value=user;
    }
}
function logins(){
    location.href="signin.html?user="+document.getElementById("username_input").value+"&pass="+document.getElementById("pass").value;
}