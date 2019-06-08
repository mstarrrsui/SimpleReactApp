import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput: React.SFC = () => {
  return (
    <div className="input-container">
      <FontAwesomeIcon className="icon" icon={faSearch} />
      <input
        className="input-field"
        type="text"
        placeholder="Search"
        name="email"
      />
    </div>
  );
};

export default SearchInput;
