fetch("https://dummyjson.com/recipes")

.then((res) => {
    return res.json();
})

.then((data) => {
    console.log(data);
    const recipes = data.recipes;
   
    let rows = "";
    recipes.forEach((recipe) => {
      
        rows += ` 
        <div class="card">

        <div class="photo">
        <img style="height : 200px; width : 200px; object-fit : contain;" src="${recipe.image}">
          </div>

        <div class="box">
        
        <div class="name"><h5> <u>${recipe.name}</u></h5></div>
        <br>
         <p><strong>Ingredients:</strong> ${recipe.ingredients.join(' , ')}</p>
         <p><strong>Instructions:</strong> ${recipe.instructions.join(' , ')}</p>
         <p><strong>PrepTimeMinutes:</strong> ${recipe.prepTimeMinutes} miunutes</p>
         <p><strong>CookTimeMinutes:</strong> ${recipe.cookTimeMinutes} minutes</p>
         <p><strong>Servings:</strong> ${recipe.servings} servings</p>
         <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
         <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
         <p><strong>CaloriesPerServings:</strong> ${recipe.caloriesPerServing} calories</p>
         <p><strong>Tags:</strong> ${recipe.tags.join(' , ')}</p>
         <p><strong>UserID:</strong> ${recipe.userId}</p>
         <p><strong>Rating:</strong> ${recipe.rating} out of 5</p>
         <p><strong>ReviewCount:</strong> ${recipe.reviewCount}</p>
         <p><strong>MealType:</strong> ${recipe.mealType}</p>
          
        
        </div>
        </div> `

    });

    document.getElementById("container").innerHTML = rows;

})