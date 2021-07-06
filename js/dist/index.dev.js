"use strict";

// Instance of class
var RecipeCard = new Recipe(); // variables

var recipeName = document.querySelector('#recipe_name');
var descriptions = document.querySelector('#descriptions');
var recipeImg = document.querySelector('#img');
var recipeIngredients = document.querySelector('#ingredients');
var addButton = document.querySelector('.button');
var displayRecipes = document.getElementById('displayRecipes'); // clearing the form after adding the recipes

var clearForm = function clearForm() {
  recipeName.value = "";
  descriptions.value = "";
  recipeImg.value = "";
  recipeIngredients.value = "";
}; // function for adding recipe


var addRecipe = function addRecipe() {
  // checking the inout field
  if (recipeName.value == "" || descriptions.value == " " || recipeImg.value == " " || recipeIngredients.value == "") {
    alert("please fill all the details in form");
  } else {
    console.log("Hello");
    RecipeCard.add(recipeName.value, descriptions.value, recipeImg.value, recipeIngredients.value);
    RecipeCard.render();
    RecipeCard.saveRecipe();
    clearForm();
  }
}; // adding click event listner in add recipe button


addButton.addEventListener('click', addRecipe); // delete the recipes for using ID

displayRecipes.addEventListener('click', function (event) {
  // finding the main parenet element of button
  var parentCard = event.target.parentElement;
  console.log(parentCard); // conver the ID in to number 

  var recipeCardID = Number(parentCard.dataset.id);
  console.log(recipeCardID); // calling the delete method from class recipe

  RecipeCard.deleteCard(recipeCardID);
  RecipeCard.render();
});