
const toggleButton = document.querySelector('.toggle-nav')
const navbarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () => {
    let active = navbarLinks.classList.toggle('active')
    if (active) {
        toggleButton.src = 'src/img/close.svg'
        toggleButton.alt = 'Zamknij menu'
    }
    if (!active) {
        toggleButton.src = 'src/img/menu.svg'
        toggleButton.alt = 'Otwórz menu'
    }
})


function nextSlide(){
    const slides = document.querySelector('[data-slides]')
    const activeSlide = slides.querySelector('[data-active]')

    let newIndex = [...slides.children].indexOf(activeSlide) + 1
    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}
setInterval(() => {
    nextSlide()
}, 5000)


const currentYear = document.querySelector('#date')
const date = new Date()
currentYear.textContent = date.getFullYear()