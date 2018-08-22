import React from "react";

const SearchBox = () => (
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">Search your checklist</h1>
      <form class="form-inline my-9 my-lg-7" _lpchecked="1">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
);

export default SearchBox;
