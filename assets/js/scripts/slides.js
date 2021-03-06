export {nextSlide}

// Funkcja po wywołaniu zmienia slajd na następny
function nextSlide(){
    const slides = document.querySelector('[data-slides]')
    const activeSlide = slides.querySelector('[data-active]')
    
    let newIndex = [...slides.children].indexOf(activeSlide) + 1
    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    
    if(slides.childElementCount > 1) delete activeSlide.dataset.active
}