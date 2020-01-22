import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
   return (
     <div className="recipe__box">
       <img className="recipe__box-img" src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} alt={`${recipe.title} recipe`} /><br />
        <h5 className="recipe__box-title">{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.slice(0, 25)}...`}</h5>
       <button className="recipe__button">
          <Link to={{ 
            pathname: `/recipe/${recipe.id}`,
            state: { recipe: recipe.title }
          }}>View Recipe</Link>
       </button>
     </div>
   );
};

export default Recipe;