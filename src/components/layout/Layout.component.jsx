import React from "react";
import Footer from "../footer/Footer.component";
import Header from "../header/Header.component";
import { StyledLayout } from "./Layout.styles";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledLayout>{children}</StyledLayout>
      <Footer />
    </>
  );
}

export default Layout;
