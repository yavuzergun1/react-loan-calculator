import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const TaxDataProvider = ({ children }) => {
  const [bsmv, setBsmv] = useState();
  const [kkdf, setKkdf] = useState();
  const values = {
    bsmv,
    setBsmv,
    kkdf,
    setKkdf,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const UseTax = () => useContext(DataContext);
