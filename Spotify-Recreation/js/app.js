let menu = document.getElementById("menu");
let navList = document.getElementById("nav-list");
let menuTop = document.getElementById("menu-top");
let menuMiddle = document.getElementById("menu-middle");
let menuBottom = document.getElementById("menu-bottom");

function menuOpen(){
    if(menuMiddle.style.opacity != "0"){
        menuTop.style.animationName = "menu-animation-top";
        menuBottom.style.animationName = "menu-animation-bottom";
        menuMiddle.style.opacity = "0";

    }else{
        menuMiddle.style.opacity = "1";
        menuTop.style.animationName = "menu-animation-top-reverse";
        menuBottom.style.animationName = "menu-animation-bottom-reverse";
    }
}

menu.addEventListener("click", function(){menuOpen(); })
