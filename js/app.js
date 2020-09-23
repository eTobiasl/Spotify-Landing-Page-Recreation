const menu = document.getElementById("menu");
const navSmall = document.getElementById("menu-small");
const menuTop = document.getElementById("menu-top");
const menuMiddle = document.getElementById("menu-middle");
const menuBottom = document.getElementById("menu-bottom");
const decoration = document.getElementById("decoration");



function menuOpen(){
    /*Open*/
    if(menuMiddle.style.opacity != "0"){ 
        menuTop.style.animationName = "menu-animation-top";
        menuMiddle.style.animationName = "menu-animation-middle";
        menuBottom.style.animationName = "menu-animation-bottom";
        menuMiddle.style.opacity = "0";
        navSmall.style.display = "block";
        console.log("Open");
        menuBottom.style.backgroundColor = "red";
        
    /*Closed*/
    }else{
        menuMiddle.style.opacity = "1"; 
        menuTop.style.animationName = "menu-animation-top-reverse";
        menuMiddle.style.animationName = "menu-animation-middle-reverse";
        menuBottom.style.animationName = "menu-animation-bottom-reverse";
        navSmall.style.display = "none";
        console.log("Closed");
    }
}


menu.addEventListener("click", function(){menuOpen(); })

