let nav2 = document.getElementById("nav2");
let difh1 = document.getElementById("difh1");

let stickPosition = nav2.offsetTop;

function stickyNav2() {
    if (window.pageYOffset >= stickPosition) {
        nav2.classList.add("sticky");
        difh1.classList.add("stickyh1");
    } else {
        nav2.classList.remove("sticky");
        difh1.classList.remove("stickyh1");

    }
}


window.onscroll = () => {
    stickyNav2();
};

window.onresize = () => {
    let stickPosition = nav2.offsetTop;
}
