export { betterToggleNavbar }

// Funkcja odpowiada za rozwijanie i zwijanie menu
function betterToggleNavbar() {
    const toggleButton = document.querySelector('.toggle-nav')
    const navbarLinks = document.querySelector('.navbar-links')
    let active
    

    document.addEventListener("click", e => {
    
        if(e.target.matches(".toggle-nav")){
            active = navbarLinks.classList.toggle("active")
            if (active) {
                toggleButton.src = 'assets/img/close.svg'
                toggleButton.alt = 'Zamknij menu'
            }
            if (!active) {
                toggleButton.src = 'assets/img/menu.svg'
                toggleButton.alt = 'Otwórz menu'
            }
            
        }
        if( !e.target.matches(".toggle-nav") && active ){
            navbarLinks.classList.remove("active")
            toggleButton.src = 'assets/img/menu.svg'
                toggleButton.alt = 'Otwórz menu'
        }
    })
}