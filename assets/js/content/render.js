export { renderElements, renderList }

// Funkcja służy do renderowania elementów z wcześniej stworzonej dwuwymiarowej tablicy
function renderElements(where, arrayOfContent) {
    const content = document.querySelector(where)
    content.innerHTML = ""

    arrayOfContent.forEach(myArray => {
        const element = document.createElement(myArray[0])
        element.textContent = myArray[1]
        content.appendChild(element)
    })
}

function renderList(){

}