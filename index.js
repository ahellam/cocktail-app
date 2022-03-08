const searchForm = document.getElementById('searchForm')
searchForm.addEventListener('submit', fetchCocktailApi)

function fetchCocktailApi(event) {
    event.preventDefault()
    console.log('submit button works!')
}