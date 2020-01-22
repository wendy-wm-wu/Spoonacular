import React from 'react';

const Recipe = ({ recipe }) => {
   return(
     <div className="recipe-card">
       <p>{recipe.title}</p><br />
       <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} alt={`${recipe.title} recipe`} />
     </div>
   );
};

export default Recipe;