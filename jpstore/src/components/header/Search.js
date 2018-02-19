import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
        <div id="search" className="col-7">
        <input id="filter" type="text" placeholder="Search" />
            <i id="filtersubmit" className="fa fa-search"></i>
        </div>
    );
  }
}

export default Search;