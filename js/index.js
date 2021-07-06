// Instance of class
const RecipeCard = new Recipe();

// variables
const recipeName = document.querySelector('#recipe_name');
const descriptions = document.querySelector('#descriptions');
const recipeImg = document.querySelector('#img');
const recipeIngredients = document.querySelector('#ingredients');
const addButton = document.querySelector('.button')
const displayRecipes = document.getElementById('displayRecipes');
// getting all images


// function for adding recipe
const addRecipe = () => {
    console.log("Hello");
    RecipeCard.add(recipeName.value,
        descriptions.value,
        recipeImg.value,
        recipeIngredients.value
    );
    RecipeCard.render();
}

// adding click event listner in add recipe button
addButton.addEventListener('click', addRecipe);

// delete the recipes for using ID
displayRecipes.addEventListener('click', (event) => {
    console.log(event.target);
})