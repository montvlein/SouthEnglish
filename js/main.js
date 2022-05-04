const navlinks = document.querySelectorAll(".navbar li a")
const sections = document.querySelectorAll("section")

window.addEventListener("load",function(e){
    for (const element of navlinks) {
        element.addEventListener('click', e=>{
            unSelectNavItem()
            element.classList.add("active")
        })
    }

    function unSelectNavItem(){
        for (const element of navlinks) {
            element.classList.remove("active")
        }
    }

})
