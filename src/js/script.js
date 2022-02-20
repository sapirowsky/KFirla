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