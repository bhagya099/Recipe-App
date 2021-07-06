// Instance of class
const RecipeCard = new Recipe();

// variables
const recipeName = document.querySelector('#recipe_name');
const descriptions = document.querySelector('#descriptions');
const recipeImg = document.querySelector('#img');
const recipeIngredients = document.querySelector('#ingredients');
const addButton = document.querySelector('.button')
const displayRecipes = document.getElementById('displayRecipes');

// clearing the form after adding the recipes
const clearForm = () => {
    recipeName.value = "";
    descriptions.value = "";
    recipeImg.value = "";
    recipeIngredients.value = "";
}


// function for adding recipe
const addRecipe = () => {
    // checking the inout field
    if (recipeName.value == "" || descriptions.value == " " || recipeImg.value == " " || recipeIngredients.value == "") {
        alert("please fill all the details in form")
    } else {
        console.log("Hello");
        RecipeCard.add(recipeName.value,
            descriptions.value,
            recipeImg.value,
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

    // finding the main parenet element of button
    let parentCard = event.target.parentElement;
    console.log(parentCard);
    // conver the ID in to number 
    let recipeCardID = Number(parentCard.dataset.id);
    console.log(recipeCardID);
    // calling the delete method from class recipe
    RecipeCard.deleteCard(recipeCardID);
    RecipeCard.render();

});