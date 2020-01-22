import React from 'react';

const Form = ({ getRecipe }) => {
  return(
    <form onSubmit={getRecipe}>
      <input className="form__input" type="text" name="recipeName" />
      <button className="form__button">Search</button>
    </form>
  );
};

export default Form; 