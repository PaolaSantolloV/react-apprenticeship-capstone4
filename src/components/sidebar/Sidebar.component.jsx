/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import {
  Divider,
  StyledLabelCategory,
  StyledLabelClear,
  StyledLabelFilter,
  StyledWrapperCategories,
  StyledWrapperCategory,
  StyledWrapperFilter,
} from "./Sidebar.styles";
import Checkbox from "../checkbox/Checkbox.component";
import Loading from "../loading/Loading.component";
import { useGlobalContext } from "../../context/global/Global.provider";

// eslint-disable-next-line react/prop-types
function Sidebar({ handleCheck, checked, handleClearFilters }) {
  const { categoriesResult } = useGlobalContext();

  const categories =
    categoriesResult.isLoading === false ? categoriesResult.data.results : [];

  const [isShowCategories, setIsShowCategories] = useState(
    checked.length > 0 ? true : false
  );

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
          {categoriesResult.isLoading === true ? (
            <Loading />
          ) : (
            categories.map((category) => (
              <StyledWrapperCategory key={category.data.name}>
                <Checkbox
                  value={category.id}
                  onChange={handleCheck}
                  onCheck={checked.indexOf(category.id) === -1 ? false : true}
                />
                <StyledLabelCategory>{category.data.name}</StyledLabelCategory>
              </StyledWrapperCategory>
            ))
          )}
        </StyledWrapperCategories>
      )}
      {checked.length > 0 && (
        <div onClick={() => handleClearFilters()}>
          <StyledLabelClear>Clear filters</StyledLabelClear>
        </div>
      )}
      <Divider />
    </div>
  );
}

export default Sidebar;
