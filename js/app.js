const menu = document.getElementById("menu");
const navSmall = document.getElementById("menu-small");
const menuTop = document.getElementById("menu-top");
const menuMiddle = document.getElementById("menu-middle");
const menuBottom = document.getElementById("menu-bottom");
const navBig = document.getElementById("nav-menu");
const middleSection = document.getElementById("middle-section");
const moreSection = document.getElementById("more-section");
const footer = document.querySelector("footer");



function menuOpen(){
    /*Open*/
    if(menuMiddle.style.opacity != "0"){ 
        menuTop.style.animationName = "menu-animation-top";
        menuMiddle.style.animationName = "menu-animation-middle";
        menuBottom.style.animationName = "menu-animation-bottom";
        navSmall.style.animationName = "menu-entering";
        menuMiddle.style.opacity = "0";
        navSmall.style.display = "block";
        middleSection.style.filter = "brightness(40%)";
        moreSection.style.filter = "brightness(40%)";
        footer.style.filter = "brightness(94%)";
        document.body.style.overflow = "hidden";
        
    /*Closed*/
    }else{
        menuMiddle.style.opacity = "1"; 
        menuTop.style.animationName = "menu-animation-top-reverse";
        menuMiddle.style.animationName = "menu-animation-middle-reverse";
        menuBottom.style.animationName = "menu-animation-bottom-reverse";
        navSmall.style.animationName = "menu-entering-reverse";
        middleSection.style.filter = "brightness(100%)";
        moreSection.style.filter = "brightness(100%)";
        footer.style.filter = "brightness(100%)";
        document.body.style.overflow = "scroll";
    }
}

function resize(){
    /*If the window is resized Menu-small will close */
    if(screen.width > 900){
        menuMiddle.style.opacity = "1"; 
        menuTop.style.animationName = "menu-animation-top-reverse";
        menuMiddle.style.animationName = "menu-animation-middle-reverse";
        menuBottom.style.animationName = "menu-animation-bottom-reverse";
        navSmall.style.display = "none";
        middleSection.style.filter = "brightness(100%)";
        moreSection.style.filter = "brightness(100%)";
        footer.style.filter = "brightness(100%)";
        document.body.style.overflow = "scroll";
    }
}




menu.addEventListener("click", function(){menuOpen(); })
window.addEventListener("resize", function(){resize();});

