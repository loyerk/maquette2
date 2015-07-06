if ( window.addEventListener ){
    var tabKeydown = [], konami = "38,38,40,40,37,39,37,39,66,65";

window.addEventListener("keydown", function(e){
    tabKeydown.push( e.keyCode );

if ( tabKeydown.toString().indexOf( konami ) >= 0 ){

    document.getElementById("konami").style.backgroundImage="url('misc/dance.gif')";
    document.getElementById("konami").style.height = "400px";
    document.getElementById("konami").style.width = "500px";
    document.getElementById("konami").style.margin = "0px 0px 0px 700px";

    document.getElementById("golfImg").style.backgroundImage="url('misc/batman.gif')";
    document.getElementById("golfImg").style.height = "150px";
    document.getElementById("golfImg").style.width = "150px";
    document.getElementById("golfImg").style.margin = "0px 0px 0px 50px";

    document.getElementById("h2golf").innerHTML = "Batman !";
    document.getElementById("golfTxt").innerHTML = "Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na Na !";
    }   
});
}