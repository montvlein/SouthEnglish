const navlinks = document.querySelectorAll(".navbar li a")
const sections = document.querySelectorAll("section")
const inicio = document.querySelector("#inicio")
const somos = document.querySelector("#somos")
const servicios = document.querySelector("#servicios")
const niveles = document.querySelector("#niveles")
const contacto = document.querySelector("#contacto")
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

obrservar([inicio, somos, servicios, niveles, contacto])

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

function active(elementos, observador) {
    // for (let index = 0; index < navlinks.length; index++) {
    //     const anchor = navlinks[index]
    //     const section = elementos[index]
    //     console.log(section.target, anchor);
    // }
    elementos.forEach((section, index) => {
        if (section.isIntersecting) {
            // console.log(index, section, navlinks[index]);
            navlinks[index].classList.add("active")
            console.log(navlinks[index].attributes.href.value)
            console.log("--- espacio ---")
            console.log(section.target.id)
        } else {
            navlinks[index].classList.remove("active")
        }
    })
}
