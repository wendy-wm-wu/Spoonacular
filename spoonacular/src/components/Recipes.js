import React from 'react';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => {
    return(
      <div className="container">
        <div className="row">
          {recipes.map((recipe, index) => {
            return (
              <div className="col-md-4">
               <Recipe key={index} recipe={recipe} />
              </div>
            )
          })}
        </div>
      </div>
    );
};

export default Recipes;