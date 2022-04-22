// Importowanie wszystkich potrzebnych plików
import { renderElements, renderList } from "./render.js";
import imgList from './data/img-list.json' assert {type:"json"} 
import arrayOfTechnologyContent from './data/technology-content.json' assert {type:"json"} 
import arrayOfRealizationContent from './data/realization-content.json' assert {type:"json"} 
import arrayOfOfferContent from './data/offer-content.json' assert {type:"json"} 
import arrayOfContactContent from './data/contact-content.json' assert {type:"json"} 


// Sprawdzanie czy istnieje już miejsce w pamięci z ostatnio otwartą stroną jeżeli nie to tworzy 
if(localStorage.getItem('site') == null) localStorage.setItem('site', 'technology')


// Renderowanie lewego pokazu slajdów 
const imgListLocation = document.querySelector("#left-img-list")
renderList(imgList, "h1", imgListLocation)


// Nasłuchiwanie kliknięcia w logo i zmienianie zawartości strony na technologie
document.querySelector("#logo-link").addEventListener("click", () => {
    renderElements(".main-content", arrayOfTechnologyContent)
})

// Nasłuchiwanie kliknięcia i zmienianie zawartości strony na technologie
const technology = document.querySelector("#technology")
technology.addEventListener('click', () => {
    renderElements(".main-content", arrayOfTechnologyContent)

    localStorage.site = "technology"
})

// Nasłuchiwanie kliknięcia i zmienianie zawartości strony na realizacje
const realization = document.querySelector("#realization")
realization.addEventListener('click', () => {
    renderElements(".main-content", arrayOfRealizationContent)

    const imgListLocationLibrary = document.querySelector("#library")
    renderList(imgList, "p", imgListLocationLibrary)

    localStorage.site = "realization"
})

// Nasłuchiwanie kliknięcia i zmienianie zawartości strony na oferte
const offer = document.querySelector("#offer")
offer.addEventListener('click', () => {
    renderElements(".main-content", arrayOfOfferContent)

    localStorage.site = "offer"
})

// Nasłuchiwanie kliknięcia i zmienianie zawartości strony na kontakt
const contact = document.querySelector("#contact")
contact.addEventListener('click', () => {
    renderElements(".main-content", arrayOfContactContent)

    localStorage.site = "contact"
})


// sprawdza na jakiej stronie ostatnio był użytkownik i ją ładuje
let latestPage = localStorage.getItem("site")
if(latestPage === "technology") renderElements(".main-content", arrayOfTechnologyContent)
if(latestPage === "realization"){
    renderElements(".main-content", arrayOfRealizationContent)

    const imgListLocationLibrary = document.querySelector("#library")
    renderList(imgList, "p", imgListLocationLibrary)
}
if(latestPage === "offer") renderElements(".main-content", arrayOfOfferContent)
if(latestPage === "contact") renderElements(".main-content", arrayOfContactContent)


window.addEventListener("resize", () => {
    location.reload()
})