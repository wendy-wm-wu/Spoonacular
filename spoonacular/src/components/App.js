import React, { Component } from 'react';
import '../style.css';
import Form from './Form';
import Recipes from './Recipes'; 
import { API_KEY } from '../config'; 

class App extends Component {
  state = {
    recipes: [],
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.spoonacular.com/recipes/search?query=${recipeName}&number=12&apiKey=${API_KEY}`);

    const data = await api_call.json(); 
    this.setState({
      recipes: data.results,
    });
  };
  
  render() {
    const { recipes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={recipes} />
      </div>
    );
  }
}

export default App;
