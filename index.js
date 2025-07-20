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
//slider
var sliderleftbutton = document.getElementById("slider-leftactivate")
var sliderrightbutton = document.getElementById("slider-rightactivate")
var sliderimage = document.querySelector(".image-container")
var slidermargin = 0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click", function () {
    slidermargin = slidermargin + 100

    if (slidermargin > 200) {
        slidermargin = 0
        sliderimage.style.marginLeft = 0;
    }
    else {
        sliderimage.style.marginLeft = "-" + slidermargin + "vw";
    }



}
)

sliderleftbutton.addEventListener("click",function () {

        if (slidermargin == 0) {

            slidermargin = 200
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }
        else {

            slidermargin = slidermargin - 100
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }


    }
)






