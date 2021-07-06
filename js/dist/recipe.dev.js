"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("this is class.js file"); // "${img == "" ? img.src = "../Images/background-image.jpg" : ''}"
// for showing every recipe card in html taking the value from FORM

var createRecipe = function createRecipe(id, recipeName, descriptions, ingredients) {
  var html = "\n   <div class=\"card\" data-id=\"".concat(id, "\">\n   \n        <img class=\"image\" src=\"../Images/background-image.jpg\" alt=\"dish pic\">\n        <h3 class=\"name\"><sapn>").concat(recipeName, "</sapn></h3>\n        <p class=\"ingredients\"> <sapn>Ingredients</sapn> <br>").concat(ingredients, "</p>\n        <p class=\"descriptions\"> <sapn>How to make</sapn> <br>").concat(descriptions, "</p>\n       <button class=\"button_card\">Delete Recipe</button>\n    </div>\n    ");
  return html;
};

var Recipe =
/*#__PURE__*/
function () {
  function Recipe() {
    var currentId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, Recipe);

    this.currentId = currentId;
    this.recipes = [];
  }

  _createClass(Recipe, [{
    key: "add",
    value: function add(name, descriptions, ingredients) {
      var recipe = {
        id: this.currentId++,
        name: name,
        descriptions: descriptions,
        ingredients: ingredients
      };
      this.recipes.push(recipe);
    } // method for showing card in html

  }, {
    key: "render",
    value: function render() {
      var recipeHtmlList = [];

      for (var i = 0; i < this.recipes.length; i++) {
        var renderRecipe = this.recipes[i];

        var _recipeHtml = createRecipe(renderRecipe.id, renderRecipe.name, renderRecipe.descriptions, renderRecipe.ingredients);

        recipeHtmlList.unshift(_recipeHtml);
      }

      var recipeHtml = recipeHtmlList.join('\n'); // grabing the dispaycard secion for displaying the cards

      var recipeList = document.getElementById('displayRecipes');
      recipeList.innerHTML = recipeHtml;
    } //  for getting the recipe by it's unique id in card

  }, {
    key: "deleteCard",
    value: function deleteCard(recipeId) {
      var newRecipe = [];

      for (var i = 0; i < this.recipes.length; i++) {
        var getRecipe = this.recipes[i];

        if (getRecipe.id !== recipeId) {
          newRecipe.push(getRecipe);
          console.log(newRecipe);
        }
      }

      this.recipes = newRecipe;
    } // for saving the recipes in local storage 

  }, {
    key: "saveRecipe",
    value: function saveRecipe() {
      // create json stringfy for saving in local storage
      var recipeJson = JSON.stringify(this.recipes); // using localstorage setitme method to save in local storage

      localStorage.setItem('recipes', recipeJson); // conver id itno string

      var id = String(this.currentId); // store id also in local storage so later we can usr this id to delete 

      localStorage.setItem('recipeCardId', id);
    } // for grabing the recipes from local storage

  }, {
    key: "loadRecipe",
    value: function loadRecipe() {
      if (localStorage.getItem('recipes')) {
        var recipeJson = localStorage.getItem('recipes');
        this.recipes = JSON.parse(recipeJson);
      }

      if (localStorage.getItem('recipeCardId')) {
        var currentId = localStorage.getItem('recipeCardId');
        this.currentId = Number(currentId);
      }
    }
  }]);

  return Recipe;
}();