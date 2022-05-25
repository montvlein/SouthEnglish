const navbar = document.querySelector("nav")
const navIcon = document.querySelector("header input[type=checkbox]")
const navlinks = document.querySelectorAll(".navbar li a")
const sections = document.querySelectorAll("section")
const observador = new IntersectionObserver(active, {
    root: null,  // hace referencia al viewport
    rootMargin: "0px",
    threshold: 0.5 // va de 0.0 a 1.0 y define que porcentanje del elemento tiene que verse para ejecutar el cb
})

function obrservar(arr) {
    arr.forEach(e => {
        observador.observe(e)
    })
}

function active(elementos, observador) {
    elementos.forEach((section) => {
        index = Array.from(sections).indexOf(section.target)
        if (section.isIntersecting) {
            navlinks[index].classList.add("active")
        } else {
            navlinks[index].classList.remove("active")
        }
    })
}

function hiddenClass(e) {
    e.addEventListener('click', e=> { navbar.classList.toggle("hidden") })
}

window.addEventListener("load",function(e){

    obrservar(sections)

    let isResponsive = window.matchMedia("(max-width:780px)")
    if (isResponsive.matches) {
        navbar.classList.add("hidden")
        for (const element of navlinks) {
            hiddenClass(element)
        }
        hiddenClass(navIcon)
    }
})
