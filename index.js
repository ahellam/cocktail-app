const searchForm = document.getElementById('searchForm')
searchForm.addEventListener('submit', fetchCocktailApi)

const randomButton = document.getElementById('randomButton')
randomButton.addEventListener('click', fetchRandomApi)

const cocktailTitle = document.getElementById('cocktailTitle')
let cocktailImg = document.getElementById('cocktailImg')
cocktailImg.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='


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
    searchForm.reset()

    
}

function fetchRandomApi(event){
    console.log('Random bttn was clicked')
}


function renderCoctail(cocktailJson) {
    // console.log(cocktailJson.drinks[0].strDrink)
    cocktailTitle.textContent = cocktailJson.drinks[0].strDrink
    cocktailImg.src = cocktailJson.drinks[0].strDrinkThumb
    // console.log(cocktailJson.drinks.strDrink)
}