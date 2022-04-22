export {dateInFooter as date}

// Funkcja zmieniająca rok w stopce na obecny
function dateInFooter(){
    const currentYear = document.querySelector('#date')
    const date = new Date()
    if (date.getFullYear() != 2022) currentYear.textContent = "- " + date.getFullYear()
    
}