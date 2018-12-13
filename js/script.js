const nav = document.querySelector("#navigation");
const navTop = nav.offsetTop;

function stickNavigation (){
    if (window.scrollY > navTop){
        document.querySelector("#navigation").classList.add("nav-inverse");
        document.querySelector("#navigation").classList.remove("nav-color");
    }else {
        document.querySelector("#navigation").classList.remove("nav-inverse");
        document.querySelector("#navigation").classList.add("nav-color");
    }
}

window.addEventListener("click", stickNavigation);