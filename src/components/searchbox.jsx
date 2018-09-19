/* This component will help the users to find out the checklist which they wnat */

import React from 'react';

const SearchBox = () => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">Search your checklist</h1>
      <form className="form-inline my-9 my-lg-7" _lpchecked="1">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search

        </button>
      </form>
    </div>
  </div>
);

export default SearchBox;
