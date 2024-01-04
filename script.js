function findRecipe()
{
  
  let recipeItem = document.getElementById("recipeItem").value;
  console.log(recipeItem);  
  const apiKey = "f7e595b41a40ec9bd9b2f7ad5f6b00b0";
  const appId = "ca657ad6";
  const uri = `https://api.edamam.com/search?q=${recipeItem}&app_id=${appId}&app_key=${apiKey}`;
  
fetch(uri)
  .then(response => response.json())
  .then(data => 
        {
  const resultsContainer = document.getElementById("recipeResults");
      resultsContainer.innerHTML = ""; 

      if (data.hits && data.hits.length > 0 && recipeItem !="") {
  const hits = data.hits;
  for (let i = 0; i < hits.length; i++) {
    const recipeName = hits[i].recipe.label;
    const thumbnail = hits[i].recipe.image;
    const ingredients = hits[i].recipe.ingredientLines;

    console.log(recipeName, thumbnail, ingredients);

    // Create a div element for each recipe
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";
    recipeCard.innerHTML = `
      <img src="${thumbnail}" alt="${recipeName}">
      <h3>${recipeName}</h3>
      <p>Ingredients: ${ingredients.join(', ')}</p>
    `;

    resultsContainer.appendChild(recipeCard);
  } // Remove the extra closing parenthesis here
} else {
  resultsContainer.innerHTML = "No recipes found.";
}
  
})
}