import React, { useContext } from "react";
import { useCategories } from "../../utils/hooks/useCategories";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import { useProducts } from "../../utils/hooks/useProducts";

export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const numberFeauturedProducts = 16;
  const numberProducts = 32;
  const bannersResult = useFeaturedBanners();
  const categoriesResult = useCategories();
  const productsResult = useProducts(numberProducts);
  const feauturedResult = useProducts(numberFeauturedProducts);

  return (
    <GlobalContext.Provider
      value={{
        bannersResult,
        categoriesResult,
        productsResult,
        feauturedResult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider;
