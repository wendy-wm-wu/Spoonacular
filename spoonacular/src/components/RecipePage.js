import React, { Component } from 'react';
import { API_KEY } from '../config'; 
import { Link } from 'react-router-dom';

class RecipePage extends Component {
  state = {
    activeRecipe: [],
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://api.spoonacular.com/recipes/search?query=${title}&apiKey=${API_KEY}`);
    const res = await req.json(); 
    this.setState({ activeRecipe: res.results[0] });
  };

  render() {
    const { activeRecipe } = this.state; 
    return (
      <div className="container">
        <div className="active-recipe">
        <img className="active-recipe__img" src={`https://spoonacular.com/recipeImages/${activeRecipe.id}-556x370.jpg`} alt={activeRecipe.title} />
        <h3 className="active-recipe__title">{activeRecipe.title}</h3>
        <h4 className="active-recipe__readyInMinutes">{`Ready in ${activeRecipe.readyInMinutes} minutes`}</h4>
        <h4 className="active-recipe__servings">{`${activeRecipe.servings} servings`}</h4>
        <button className="active-recipe__button">
          <Link to="/">Go Home</Link>
        </button>
      </div>
      </div>
    );
  }
}

export default RecipePage;