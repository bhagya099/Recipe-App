console.log("this is class.js file");
// for showing every recipe card in html taking the value from FORM
const createRecipe = (id, recipeName, descriptions, img, ingredients) => {
    const html = `
   <div class="card" data-id="${id}">
   
        <img class="image"
        src="
        ${img == "" ? img.src = "../Images/background-image.jpg" : ''}
        " alt="dish pic">
        <h4 class="name">${recipeName}</h4>
        <p class="descriptions">${descriptions}</p>
        <p class="ingredients">${ingredients}</p>
        <button class="button_card">Delete Recipe</button>
    </div>
    `;
    return html;
}

class Recipe {
    constructor(currentId = 0) {
        this.currentId = currentId;
        this.recipes = []
    }
    add(name, descriptions, img, ingredients) {
        const recipe = {
            id: this.currentId++,
            name: name,
            descriptions: descriptions,
            img: img,
            ingredients: ingredients
        };
        this.recipes.push(recipe);
    }

    // method for showing card in html
    render() {
        const recipeHtmlList = [];
        for (let i = 0; i < this.recipes.length; i++) {
            const renderRecipe = this.recipes[i];
            const recipeHtml = createRecipe(
                renderRecipe.id,
                renderRecipe.name,
                renderRecipe.descriptions,
                renderRecipe.img,
                renderRecipe.ingredients
            );
            recipeHtmlList.unshift(recipeHtml);

        }

        const recipeHtml = recipeHtmlList.join('\n');
        // grabing the dispaycard secion for displaying the cards
        const recipeList = document.getElementById('displayRecipes');
        recipeList.innerHTML = recipeHtml;
    }

    //  for getting the recipe by it's unique id in card
    deleteCard(recipeId) {
        let newRecipe = [];
        for (let i = 0; i < this.recipes.length; i++) {
            let getRecipe = this.recipes[i];
            if (getRecipe.id !== recipeId) {
                newRecipe.push(getRecipe);
                console.log(newRecipe);
            }
        }
        this.recipes = newRecipe;
    }
}