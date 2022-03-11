const searchForm = document.getElementById('searchForm')
searchForm.addEventListener('submit', fetchCocktailApi)

const randomButton = document.getElementById('randomButton')
randomButton.addEventListener('click', fetchRandomApi)

const favoriteButton = document.getElementById('favoriteButton')
const favoritesList = document.getElementById('savedCocktails')


const cocktailTitle = document.getElementById('cocktailTitle')
let cocktailImg = document.getElementById('cocktailImg')
cocktailImg.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

let instructions = document.getElementById('instructions')
instructions.textContent= ''
let ingredients = document.getElementById('ingredients')
ingredients.textContent = ''




function fetchCocktailApi(event) {
    event.preventDefault()
    // console.log(userInput.value)
    const userInput = document.getElementById('userInput').value
    const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
    // console.log(searchURL)
    fetch(searchURL)
    .then(resp => resp.json())
    // .then(console.log)
    .then(json => {
        if (json.drinks === null ) {
          alert('THATS NOT A COCKTAIL');
        }
        return json;
      })
    
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

favoriteButton.addEventListener('click', saveToFavorites)
function saveToFavorites(){
    // console.log(cocktailTitle.textContent)
    const li = document.createElement('li')
    li.className = 'li'
    li.textContent = ` ♥ ${cocktailTitle.textContent}  `
    
    favoritesList.append(li) 
}

function renderCoctail(cocktailJson) {
    // console.log('cocktail json index [0]:', cocktailJson.drinks[0])
    // console.log(cocktailJson.drinks[0].strIngredient1)



    cocktailTitle.textContent = cocktailJson.drinks[0].strDrink
    cocktailImg.src = cocktailJson.drinks[0].strDrinkThumb
    cocktailImg.style.border = '1ch double black '
    instructions.textContent = `Instructions: ${cocktailJson.drinks[0].strInstructions}`


    

    // console.log(stringredients)
    ingredients.textContent = 'Ingredients:'
    ingredients.style.fontStyle = 'italic'
    ingredients.style.border = '1ch double black'

    //--------------------NEW REFACTORED WAY OF GRABBING INGREDIENTS-----------------------
    let filteredIngredientsList = []
    console.log('before for in loop', cocktailJson.drinks[0])
    for (const key in cocktailJson.drinks[0]) {
        
        if (key.startsWith('strIngredient') && cocktailJson.drinks[0][key]) {
            filteredIngredientsList.push(cocktailJson.drinks[0][key])
        }
    }
    console.log('after for in loop', filteredIngredientsList)            
    //--------------------------------------------------------------------------------------


    //-------------------THE OLD UGLY WAY WITH LITERALLY TYPING OUT THE ARRAY AND FILTERING 2X--------------------------
    // let stringredients = [cocktailJson.drinks[0].strIngredient1, cocktailJson.drinks[0].strIngredient2, cocktailJson.drinks[0].strIngredient3, cocktailJson.drinks[0].strIngredient4, cocktailJson.drinks[0].strIngredient5, cocktailJson.drinks[0].strIngredient6, cocktailJson.drinks[0].strIngredient7, cocktailJson.drinks[0].strIngredient8, cocktailJson.drinks[0].strIngredient9, cocktailJson.drinks[0].strIngredient10, cocktailJson.drinks[0].strIngredient11, cocktailJson.drinks[0].strIngredient12, cocktailJson.drinks[0].strIngredient13, cocktailJson.drinks[0].strIngredient14, cocktailJson.drinks[0].strIngredient15]
    // const ingredientsList = stringredients.filter(ingredient => ingredient !== null)
    // console.log(ingredientsList)
    // const filteredIngredientsList = ingredientsList.filter(ingredient => ingredient.length > 1)
    //------------------------------------------------------------------------------------------------------------------

    filteredIngredientsList.forEach(item => {
        const ingredient = document.createElement('li')
        ingredient.className = 'ingLi'
        ingredient.textContent = ` ⇒  ${item}`
        ingredients.append(ingredient)
    })





}






// const correctIngredients = []

// const testObj = {
//     name: 'aaron', 
//     favDrink: 'manhattan', 
//     ingredient1: '12',
//     ingredient2: '22',
//     ingredient3: '32',
//     ingredient4: "",
//     ingredient5: null, 

// }
// for (const property in testObj) {
//     // if (property.startsWith('ingredient') && testObj[property] !== null && testObj[property].length > 1)
//     if (property.startsWith('ingredient') && testObj[property])   // <==========look at this tho....
    
//     {
//     console.log(`${testObj[property]}`);
//     correctIngredients.push(testObj[property])
//     console.log (correctIngredients)
//     }
//   }

  