// Importowanie wszystkich potrzebnych funkcji
import { date } from "./date.js"
import { nextSlide } from "./slides.js"
import { betterToggleNavbar } from "./nav.js"


// otwieranie menu dla telefonów
betterToggleNavbar()


// Zmiana slajdu co wybrany czas
setInterval(() => {
    nextSlide()
}, 5000)


//Zmiana daty w stopce
date()