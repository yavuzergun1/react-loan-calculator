import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [principalAmount, setPrincipalAmount] = useState();
  const [installmentCount, setInstallmentCount] = useState();


  const values = {
      principalAmount,
      setPrincipalAmount,
      installmentCount,
      setInstallmentCount,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const UseCalculate = () => useContext(DataContext);
