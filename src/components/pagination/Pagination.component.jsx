/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { StyledContainer } from "./Pagination.styles";

function Pagination({ products, setCurrentItems }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  const items = products;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <StyledContainer>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        nextLinkClassName="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        pageClassName="page-item"
        previousLabel="< previous"
        previousLinkClassName="previous"
        renderOnZeroPageCount={null}
        activeClassName="active"
        containerClassName="ul"
      />
    </StyledContainer>
  );
}

export default Pagination;
