const nav = document.querySelector("#navigation");
const navTop = nav.offsetTop;
const logo = document.querySelector(".logo");


function stickyNavigation() {
    if (window.scrollY > navTop){
        console.log("moved")
        document.getElementById("navigation").classList.add("nav-inverse");
        document.getElementById("navigation").classList.remove("nav-color");
        // document.querySelector(".list-item").classList.add("list-item-inverse");
        logo.src = "img/revive-white-logo.jpg";
    }else{
        document.getElementById("navigation").classList.remove("nav-inverse");
        document.getElementById("navigation").classList.add("nav-color");
        // document.querySelector(".list-item").classList.remove("list-item-inverse");
        logo.src = "img/revive-black-logo.jpg";
    }
}

window.addEventListener("scroll", stickyNavigation);