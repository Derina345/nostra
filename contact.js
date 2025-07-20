//popup
var popup = document.querySelector(".popup")
document.getElementById("close").addEventListener("click", function () {
    popup.style.display = "none"
})
//sidenavbar
var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})