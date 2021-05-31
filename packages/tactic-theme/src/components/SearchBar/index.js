import React from "react";
import { connect } from "frontity";
import { InputSearch, Container } from "./styles";

const SearchBar = ({ state, actions }) => {
  return (
    <>
      <Container>
        <InputSearch
          className="text__italic"
          type="search"
          placeholder="Buscar Blogs..."
          id="searchBar"
          value={state.theme.searchBlogValue}
          onChange={(event) => {
            actions.theme.setSearchBlogValue(event.target.value);
          }}
        />
      </Container>
    </>
  );
};

export default connect(SearchBar);
