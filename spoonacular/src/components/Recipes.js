import React from 'react';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => {
    return (
      <div className="container">
        <div className="row">
          {recipes.map((recipe) => {
            return (
              <div className="col-md-4" key={recipe.title}>
               <Recipe key={recipe.title} recipe={recipe} />
              </div>
            )
          })}
        </div>
      </div>
    );
};

export default Recipes;