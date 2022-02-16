import React, { useState } from "react";
import feauturedCategories from "../../utils/mocks/product-categories.json";
import { FiFilter } from "react-icons/fi";
import {
  Divider,
  StyledLabelCategory,
  StyledLabelFilter,
  StyledWrapperCategories,
  StyledWrapperCategory,
  StyledWrapperFilter,
} from "./Sidebar.styles";
import Checkbox from "../checkbox/Checkbox.component";

// eslint-disable-next-line react/prop-types
function Sidebar({ handleCheck }) {
  const [isShowCategories, setIsShowCategories] = useState(false);

  const categories = feauturedCategories.results;

  const handleShowCategories = () => {
    setIsShowCategories(!isShowCategories);
  };

  return (
    <div title="sidebar">
      <StyledWrapperFilter onClick={handleShowCategories}>
        <FiFilter color="#212529" size="20px" />
        <StyledLabelFilter>Filter</StyledLabelFilter>
      </StyledWrapperFilter>
      {isShowCategories === true && (
        <StyledWrapperCategories>
          {categories.map((category) => (
            <StyledWrapperCategory key={category.data.name}>
              <Checkbox value={category.id} onChange={handleCheck} />
              <StyledLabelCategory>{category.data.name}</StyledLabelCategory>
            </StyledWrapperCategory>
          ))}
        </StyledWrapperCategories>
      )}
      <Divider />
    </div>
  );
}

export default Sidebar;
