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
        menuBottom.style.animationName = "menu-animation-bottom";
        menuMiddle.style.opacity = "0";
        document.body.style.overflow ="hidden";
        navSmall.style.display = "block";
        console.log("Open");
        
    /*Closed*/
    }else{
        menuMiddle.style.opacity = "1"; 
        menuTop.style.animationName = "menu-animation-top-reverse";
        menuBottom.style.animationName = "menu-animation-bottom-reverse";
        document.body.style.overflow ="scroll";
        navSmall.style.display = "none";
        console.log("Closed");
    }
}


menu.addEventListener("click", function(){menuOpen(); })

