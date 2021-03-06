import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ImageList from './ImageList.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Reddit Search</h1>
        <SearchBar onSearch={this._performSearch} />
        <ImageList images={this.state.results} />
      </div>
    );
  }

  _performSearch = term => {
    const url = `https://www.reddit.com/r/aww/search.json?q=${term}&restrict_sr=true&type=link`;

    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        return json.data.children
          .filter(
            child =>
              child.data.thumbnail !== 'self' &&
              child.data.thumbnail !== 'default'
          )
          .map(child => child.data.thumbnail);
      })
      .then(images => {
        this.setState({ results: images });
      });
  };
}
export default App;
