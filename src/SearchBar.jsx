import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      term: ''
    };

    this._updateTerm = this._updateTerm.bind(this);
  }

  render() {
    return (
      <header>
        <input
          type="text"
          placeholder="Type something to search for"
          value={this.state.term}
          onChange={this._updateTerm}
        />
        <button>🕵️‍</button>
      </header>
    );
  }

  _updateTerm(e) {
    this.setState({ term: e.target.value });
  }
}
export default SearchBar;
