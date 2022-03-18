export {dateInFooter as date}

function dateInFooter(){
    const currentYear = document.querySelector('#date')
    const date = new Date()
    currentYear.textContent = date.getFullYear()
}