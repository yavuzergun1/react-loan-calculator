import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [creditAmount, setCreditAmount] = useState();
  const [installmentCount, setInstallmentCount] = useState();
  const [paymentType, setPaymentType] = useState();
  const [interest, setInterest] = useState();
  const [bsmv, setBsmv] = useState();
  const [kkdf, setKkdf] = useState();


  const values = {
      creditAmount,
      setCreditAmount,
      installmentCount,
      setInstallmentCount,
      paymentType,
      setPaymentType,
      interest,
      setInterest,
      bsmv,
      setBsmv,
      kkdf,
      setKkdf,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const UseCalculate = () => useContext(DataContext);
