export {dateInFooter as date}

// Funkcja zmieniająca rok w stopce na obecny
function dateInFooter(){
    const currentYear = document.querySelector('#date')
    const date = new Date()
    currentYear.textContent = date.getFullYear()
}