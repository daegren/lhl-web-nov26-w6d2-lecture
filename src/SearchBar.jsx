import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};
export default SearchBar;
