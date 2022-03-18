"use strict"

import { date } from "./date.js"
import { nextSlide } from "./slides.js"
import { toggleNavbar } from "./nav.js"


// otwieranie menu dla telefonów
toggleNavbar()


// Zmiana slajdu co wybrany czas
setInterval(() => {
    nextSlide()
}, 5000)


//Zmiana daty w stopce
date()