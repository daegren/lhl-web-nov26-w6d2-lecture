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
        <button onClick={this._handleClick}>🕵️‍</button>
      </header>
    );
  }

  _updateTerm(e) {
    this.setState({ term: e.target.value });
  }

  _handleClick = () => {
    this.props.onSearch(this.state.term);
  };
}
export default SearchBar;
