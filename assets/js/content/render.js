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


// .right display none
//.left > ul > li > a > img width 100%