"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("this is class.js file"); // for showing every recipe card in html taking the value from FORM

var createRecipe = function createRecipe(id, recipeName, descriptions, img, ingredients) {
  var html = "\n   <div class=\"card\">\n        <img class=\"image\" src=".concat(img, " alt=\"dish pic\">\n        <h4 class=\"name\">").concat(recipeName, "</h4>\n        <p class=\"descriptions\">").concat(descriptions, "</p>\n        <p class=\"ingredients\">").concat(ingredients, "</p>\n        <button class=\"button_card\">Delete Recipe</button>\n    </div>\n    ");
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
    value: function add(name, descriptions, img, ingredients) {
      var recipe = {
        id: this.currentId++,
        name: name,
        descriptions: descriptions,
        img: img,
        ingredients: ingredients
      };
      this.recipes.push(recipe);
      console.log(this.recipes);
    } // method for showing card in html

  }, {
    key: "render",
    value: function render() {
      var recipeHtmlList = [];

      for (var i = 0; i < this.recipes.length; i++) {
        var renderRecipe = this.recipes[i];

        var _recipeHtml = createRecipe(renderRecipe.id, renderRecipe.name, renderRecipe.descriptions, renderRecipe.img, renderRecipe.ingredients);

        recipeHtmlList.unshift(_recipeHtml);
        console.log(recipeHtmlList);
      }

      var recipeHtml = recipeHtmlList.join('\n');
      console.log(recipeHtmlList);
      var recipeList = document.getElementById('displayRecipes');
      recipeList.innerHTML = recipeHtml;
    } //  for getting the recipe by it's unique id in card

  }, {
    key: "getRecideByID",
    value: function getRecideByID(recipeId) {
      var foundRecipe;

      for (var i = 0; i < this.recipes.length; i++) {
        var getRecipe = this.recipes[i];

        if (getRecipe.id === recipeId) {
          foundRecipe = getRecipe;
        }
      }

      return foundRecipe;
    }
  }]);

  return Recipe;
}();