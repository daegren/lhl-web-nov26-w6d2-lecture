import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Reddit Search</h1>
        <header>
          <input type="text" placeholder="Type something to search for" />
          <button>🕵️‍</button>
        </header>
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
