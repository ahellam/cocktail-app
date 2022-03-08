const searchForm = document.getElementById('searchForm')
searchForm.addEventListener('submit', fetchCocktailApi)

const cocktailTitle = document.getElementById('cocktailTitle')
const cocktailImg = document.getElementById('cocktailImg')


function fetchCocktailApi(event) {
    event.preventDefault()
    // console.log(userInput.value)
    const userInput = document.getElementById('userInput').value
    const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
    // console.log(searchURL)
    fetch(searchURL)
    .then(resp => resp.json())
    // .then(json => console.log(json))
    .then(renderCoctail)

    
}

function renderCoctail(cocktailJson) {
    console.log(cocktailJson.drinks[0].strDrink)
    cocktailTitle.textContent = cocktailJson.drinks[0].strDrink
    cocktailImg.src = cocktailJson.drinks[0].strDrinkThumb
    // console.log(cocktailJson.drinks.strDrink)
}