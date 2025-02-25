import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import IconButton from "../iconButton/IconButton.component";
import { StyledContainer, StyledInput } from "./SearchInput.styles";

// eslint-disable-next-line react/prop-types
function SearchInput({ placeholder, type }) {
  const navigate = useNavigate();
  const [isInput, setIsInput] = useState(false);
  const [stylesInput, setStylesInput] = useState({
    display: "none",
    width: "30px",
    border: "none",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (event) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleOnClick = () => {
    setIsInput(!isInput);
    if (isInput === false) {
      setStylesInput({
        display: "block",
        width: "121px",
        border: "1px solid",
      });
      setSearchTerm("");
    } else {
      setStylesInput({
        display: "none",
        width: "30px",
        border: "none",
      });
      setSearchTerm("");
      navigate(`/search?q=${searchTerm}`);
      window.location.reload();
    }
  };

  return (
    <StyledContainer
      title="search"
      width={stylesInput.width}
      border={stylesInput.border}
    >
      <StyledInput
        title="input-search"
        placeholder={placeholder}
        type={type}
        onChange={(event) => handleOnChange(event)}
        value={searchTerm}
        display={stylesInput.display}
      />
      <IconButton title="search-icon" size="30px" onClick={handleOnClick}>
        <FiSearch color="#212529" size="20px" />
      </IconButton>
    </StyledContainer>
  );
}

SearchInput.defaultProps = {
  placeholder: "",
  title: "input",
  type: "text",
};

export default SearchInput;
