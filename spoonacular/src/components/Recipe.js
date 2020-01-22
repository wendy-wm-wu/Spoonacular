import React from 'react';

const Recipe = ({ recipe }) => {
   return(
     <div className="recipe__box">
       <h5>{recipe.title}</h5><br />
       <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} alt={`${recipe.title} recipe`} />
     </div>
   );
};

export default Recipe;