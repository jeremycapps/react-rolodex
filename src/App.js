import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json())
      .then(users => this.setState({ monsters: users }))

  }

  searchFieldChange = e => {
    this.setState({ searchField : e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    return (
      <div className="App">
        <h1>Rolodex</h1>
        <SearchBar 
          placeholder="search monsters"
          onChange={this.searchFieldChange}
        />
        <CardList monsters={monsters.filter(
          m => m.name.toLowerCase().includes(searchField.toLowerCase())
        )} />
      </div>
    ); 
  }
}

export default App;
