import { renderElements, renderList } from "./render.js";
import imgList from './img-list.json' assert {type:"json"} 



// Dwuwymiarowe tablice z zawartością podstron:
// tablica = [[typ, content], [typ, content]...]
const arrayOfTechnologyContent = [
    ["h1", "Technologia"],
    ["h3", "Panoramy sferyczne 360x180"],
    ["p", 'Wirtualne wycieczki oferowane przez nas są połączeniem panoram sferycznych o kącie widzenia 360 stopni horyzontalnie oraz 180 stopni w pionie. Oznacza to, iż możliwe jest rozglądanie się po panoramie w każdym kierunku. Uwiecznione są również "sufit" i "podłoga", dzięki czemu można przedstawić wszystkie walory architektoniczne otoczenia. Kładziemy najsilniejszy nacisk na poprawne sklejanie fotografii w gotową panoramę z uwzględnieniem kolorystyki i jasności poszczególnych fotografii, dzięki czemu scena wygląda jak jedno spójne zdjęcie.'],
    ["h3", "Flash i HTML5"],
    ["p", 'Do tej pory najbardziej uniwersalną i najbardziej rozpowszechnioną technologią osadzania grafiki interaktywnej była technologia Flash. Jednakże nie była ona poprawnie wyświetlana na wszystkich urządzeniach lub nie była w ogóle wspierana (np. wszystkie systemy iOS ) oraz zawierała wiele błędów i luk bezpieczeństwa, przez co ogólnoświatowe trendy nie planują dalszego rozwoju tej technologii. Za obecny standard uważa się technologię HTML5, która jest bardzo prężnie wdrażana w największych serwisach (np. Youtube, Facebook, Twitter). Dzięki zastosowaniu przez nas playera KRPano 1.18.2, który wykorzystuje obydwie wspomniane technologie, oferowane usługi będą bezproblemowo wyświetlane na wszystkich urządzeniach i przeglądarkach.'],
    ["h3", "Wysoka szczegółowość obrazu i HDR"],
    ["p", 'Wiele firm oferujących wykonanie wirtualnej wycieczki tworzy je za pomocą obiektywu ultraszerokokątnego (tzw. Fisheye), dzięki czemu wykonanie panoramy jest bardzo proste i szybkie, gdyż na pełną panoramę 360x180 (pełna sfera) wystarcza 6 zdjęć. Takie podejście jednak skutkuje niską jakością panoramy. Bardzo mała rozdzielczość nie umożliwia wystarczającego powiększana wybranego fragmentu panoramy, a wady optyczne obiektywu fisheye dodatkowo pogarszają jakość obrazu. Nasze panoramy wykonujemy z co najmniej 26 zdjęć, co po połączeniu daje obraz o rozdzielczości około 22 000 x 11 000 pixeli, co zapewnia bardzo wysoką jakość obrazu i wysoką swobodę przybliżania panoramy. Na specjalne życzenie możliwe jest wykonanie panoram o dużo większej rozdzielczości.'],
    ["p", 'W szczególnie trudnych przypadkach możliwe jest zastosowanie technologii HDR. Umożliwi to poprawne oddanie charakteru oświetlenia danej panoramy.']
]
const arrayOfOfferContent = [
    ["h1", "Oferta"],
    ["p", 'W odróżnieniu od większości firm oferujących wykonanie wirtualnej wycieczki, nasze usługi nie są ukierunkowane na jednorazowy, spory zysk lecz na stałą współpracę. Podstawową usługą oferowaną przez nas jest stała opieka nad Państwa wirtualną wycieczką i obejmuje jej wykonanie oraz coroczną aktualizację oraz osadzenie na naszym serwerze. Wycieczka składająca się z ok. 15 panoram, może zajmować nawet 1,5GB, a wykupienie hostingu tak dużej przestrzeni serwerowej może sporo kosztować. Dzięki osadzeniu wirtualnej wycieczki na naszym serwerze, nie muszą się Państwo o to martwić. Dostęp do niej odbywa się przez Państwa stronę (za pomocą przekierowania) oraz przez naszą stronę, co stanowi dla Państwa dodatkową reklamę. Kolejnym udogodnieniem jest abonamentowa forma opłaty za stałą opiekę i aktualizację wirtualnej wycieczki oraz przestrzeń serwerową. Gdyby taka forma opłaty Państwa nie satysfakcjonowała, jest możliwość tradycyjnej jednorazowej opłaty za wykonanie wirtualnej wycieczki. Dodatkowo oferujemy wykupienie samej przestrzeni serwerowej. Dobrą formą promocji firmy mogą być gadżety upominkowe w formie pendriva lub płyty DVD z wirtualną wycieczką, które mogli by Państwo ofiarować swoim klientom.'],
    ["p", 'Aby zaspokoić potrzeby wszystkich klientów, ceny są ustalane indywidualnie po wcześniejszym kontakcie drogą mailową.']
]
const arrayOfContactContent = [
    ["h1", 'Kontakt:'],
    ["p", 'Krystian Firla'],
    ["p", 'Email: kfirla@gmail.com'],
    ["p", 'nr kom: 698 490 438']
]

// Nasłuchiwanie kliknięcia i zmienianie zawartości strony 
const technology = document.querySelector("#technology")
technology.addEventListener('click', () => {
    renderElements(".main-content", arrayOfTechnologyContent)
})

const offer = document.querySelector("#offer")
offer.addEventListener('click', () => {
    renderElements(".main-content", arrayOfOfferContent)
})

const contact = document.querySelector("#contact")
contact.addEventListener('click', () => {
    renderElements(".main-content", arrayOfContactContent)
})


// Trzywymiarowa tablica z wszystkimi zdjeciami i opisami
// tablica = [ [ [img, src, alt], [typ, alternatywnyTyp, zawartośc] ], [ [img, src, alt], [typ, alternatywnyTyp, zawartośc] ]... ]
// const arrayWithImg = [
//     [
//         ["img", "assets/img/screenshot.png", "jakies zdjecie"],
//         ["h1", "p", "Przykładowe miejsce #1"]
//     ],
//     [
//         ["img", "assets/img/Beautiful-Full-HD-Images.jpg", "jakies zdjecie"],
//         ["h1", "p", "Przykładowe miejsce #2"]
//     ]
// ]


console.log(imgList)