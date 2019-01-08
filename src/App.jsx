import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Reddit Search</h1>
        <SearchBar />
        <main>
          <img src="http://fillmurray.com/200/200" />
          <img src="http://fillmurray.com/200/200" />
          <img src="http://fillmurray.com/200/200" />
          <img src="http://fillmurray.com/200/200" />
          <img src="http://fillmurray.com/200/200" />
          <img src="http://fillmurray.com/200/200" />
        </main>
      </div>
    );
  }
}
export default App;
