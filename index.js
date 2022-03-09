const searchForm = document.getElementById('searchForm')
searchForm.addEventListener('submit', fetchCocktailApi)

const randomButton = document.getElementById('randomButton')
randomButton.addEventListener('click', fetchRandomApi)

const cocktailTitle = document.getElementById('cocktailTitle')
let cocktailImg = document.getElementById('cocktailImg')
cocktailImg.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

const instructions = document.getElementById('instructions')
const ingredients = document.getElementById('ingredients')


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

function fetchRandomApi(){
    console.log('Random bttn was clicked')
    const randomURL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

    fetch(randomURL)
    .then(resp => resp.json())
    // .then(json => console.log(json))
    .then(renderCoctail)
}


function renderCoctail(cocktailJson) {
    console.log(cocktailJson.drinks[0])
    // console.log(cocktailJson.drinks[0].strIngredient1)

    cocktailTitle.textContent = cocktailJson.drinks[0].strDrink
    cocktailImg.src = cocktailJson.drinks[0].strDrinkThumb
    instructions.textContent = cocktailJson.drinks[0].strInstructions


    let stringredients = [cocktailJson.drinks[0].strIngredient1, cocktailJson.drinks[0].strIngredient2, cocktailJson.drinks[0].strIngredient3, cocktailJson.drinks[0].strIngredient4, cocktailJson.drinks[0].strIngredient5, cocktailJson.drinks[0].strIngredient6, cocktailJson.drinks[0].strIngredient7, cocktailJson.drinks[0].strIngredient8, cocktailJson.drinks[0].strIngredient9, cocktailJson.drinks[0].strIngredient10, cocktailJson.drinks[0].strIngredient11, cocktailJson.drinks[0].strIngredient12, cocktailJson.drinks[0].strIngredient13, cocktailJson.drinks[0].strIngredient14, cocktailJson.drinks[0].strIngredient15]

    console.log(stringredients)
    const ingredientsList = stringredients.filter(ingredient => ingredient !== null)
    ingredientsList.forEach(item => {
        const ingredient = document.createElement('li')
        ingredient.textContent = item
        ingredients.append(ingredient)
    })
}