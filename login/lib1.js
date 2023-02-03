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
    location.href="sigin.html?user="+document.getElementById("username_input").value+"&pass="+document.getElementById("ppaas").value;
}
if(location.search.substr(1) == "liff"){
    console.log("現在LIFFモードです。 \n 変更する場合はURLの?liffを消去してごアクセスください");
}else if(location.search.substr(1) == "pwa"){
    console.log("現在PWAモードです。 \n 変更する場合はURLの?pwaを消去してごアクセスください");
}else{
    console.log("現在Webサイトモードです。 \n 変更する場合は次のドキュメントのような書式で利用できます /n %o https://pythoonnoprog.github.io/haruharuortal/login/dev.html");
}