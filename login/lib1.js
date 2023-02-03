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
window.onload = function(){
console.log("ver 1.1.3.1");
if(location.search.substr(1) == "liff"){
    console.log("現在LIFFモードです。 \n 変更する場合はURLの?liffを消去してごアクセスください");
    document.getElementById("mberid").style.display="none";
    document.getElementById("loginboxid").style="border-radius:0px;width:100%;height:100%;margin:none;backgound:none;";
    document.body.style="background-repeat: no-repeat;background-image: url(https://cdn.glitch.com/e3342b72-93eb-4a4c-bdae-a0166de9f522%2F1075252.png);background-size: 100% auto;background-position:right 30% bottom 0;";
}else if(location.search.substr(1) == "pwa"){
    console.log("現在PWAモードです。 \n 変更する場合はURLの?pwaを消去してごアクセスください");
}else{
    console.log("現在Webサイトモードです。 \n 変更する場合は次のドキュメントのような書式で利用できます \n %ohttps://pythoonnoprog.github.io/haruharuortal/login/dev.html");
}
}