// Instance of class
const RecipeCard = new Recipe();

// loading the data from local storage
RecipeCard.loadRecipe();
RecipeCard.render();

// variables
const recipeName = document.querySelector('#recipe_name');
const descriptions = document.querySelector('#descriptions');
const recipeIngredients = document.querySelector('#ingredients');
const addButton = document.querySelector('.button')
const displayRecipes = document.getElementById('displayRecipes');


// clearing the form after adding the recipes
const clearForm = () => {
    recipeName.value = "";
    descriptions.value = "";
    recipeIngredients.value = "";
}


// function for adding recipe
const addRecipe = () => {
    // checking the inout field
    if (recipeName.value == "" || descriptions.value == " " || recipeIngredients.value == "") {
        alert("please fill all the details in form")
    } else {
        console.log("Hello");
        RecipeCard.add(recipeName.value,
            descriptions.value,
            recipeIngredients.value
        );
        RecipeCard.render();
        RecipeCard.saveRecipe();
        clearForm();
    }
}




// adding click event listner in add recipe button
addButton.addEventListener('click', addRecipe);

// delete the recipes for using ID
displayRecipes.addEventListener('click', (event) => {
    if (event.target.classList.contains("button_card")) {
        // finding the main parenet element of button
        let parentCard = event.target.parentElement;
        // conver the ID in to number 
        let recipeCardID = Number(parentCard.dataset.id);
        // calling the delete method from class recipe
        RecipeCard.deleteCard(recipeCardID);
        RecipeCard.saveRecipe();
        RecipeCard.render();
    }
});