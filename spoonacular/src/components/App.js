import React, { Component } from 'react';
import '../style.css';
import Form from './Form';
import Recipe from './Recipe';
import { API_KEY } from '../config'; 

class App extends Component {
  state = {
    recipes: [],
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.spoonacular.com/recipes/search?query=${recipeName}&number=10&apiKey=${API_KEY}`);

    const data = await api_call.json(); 
    this.setState({
      recipes: data.results,
    });
  };
  render() {
    const { recipes } = this.state;
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} />)}
      </div>
    );
  }
}

export default App;
