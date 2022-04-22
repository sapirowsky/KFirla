export { renderElements, renderList }

// Funkcja służy do renderowania elementów z wcześniej stworzonej dwuwymiarowej tablicy
function renderElements(where, arrayOfContent) {
    const content = document.querySelector(where)
    content.innerHTML = ""

    arrayOfContent.forEach(myArray => {
        const element = document.createElement(myArray[0])
        if(myArray[0] === "ul") element.setAttribute("id", "library")
        element.textContent = myArray[1]
        content.appendChild(element)
    })
}


// Funkcja służy do renderewania elementów listy 
function renderList(items, marker, location){
    if(items){
        location.innerHTML = ""

        items.forEach((item, i) => {
            const liElement = document.createElement("li")
            if(i === 0) liElement.dataset.active = true
            if(marker === "h1") liElement.classList.add("slide")

            const aElement = document.createElement("a")
            aElement.setAttribute("href", item[0][0])
            aElement.setAttribute("id", "single-img")
            aElement.addEventListener("click", () => {
                imgShowCase(item)
            })
            
            const imgElement = document.createElement("img")
            imgElement.setAttribute("src", item[1][0])
            imgElement.setAttribute("alt", item[1][1])


            const textElement = document.createElement(marker)
            textElement.textContent = item[2][0]


            aElement.appendChild(imgElement)
            aElement.appendChild(textElement)

            liElement.appendChild(aElement)
            location.appendChild(liElement)
        })
    }
}

function imgShowCase(item){

    const location = document.querySelector("#left-img-list")

    const liElement = document.createElement("li")
    liElement.dataset.active = true
    liElement.classList.add("slide")
    liElement.setAttribute("id", "showcase")

    const aElement = document.createElement("a")
    aElement.setAttribute("id", "single-img")

    const closeShowCase = document.createElement("a")
    closeShowCase.classList.add("showcase-close")
    closeShowCase.setAttribute("href", "#")
    closeShowCase.addEventListener("click", () => {
        liElement.classList.remove("slide-showcase")
        liElement.classList.add("slide")
        imgElement.style.width = "50%"
        closeImg.style.display = "none"
    })

    const closeImg = document.createElement("img")
    closeImg.setAttribute("src", "assets/img/close.svg")
    closeImg.setAttribute("alt", "Zamknij zdjecie")

    closeShowCase.appendChild(closeImg)
    
    const imgElement = document.createElement("img")
    imgElement.setAttribute("src", item[1][0])
    imgElement.setAttribute("alt", item[1][1])
    const windowWidth = window.innerWidth
    if( windowWidth > 800 ) {setTimeout(()=>{imgElement.style.width = "100vw"},1)}
    
    const textElement = document.createElement("h1")
    textElement.textContent = item[2][0]

    aElement.appendChild(closeShowCase)
    aElement.appendChild(imgElement)
    aElement.appendChild(textElement)
    
    liElement.appendChild(aElement)
    location.innerHTML = ""
    location.appendChild(liElement)
    
}
// .right display none
//.left > ul > li > a > img width 100%


