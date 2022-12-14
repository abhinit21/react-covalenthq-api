import React, { useState, useEffect, useContext } from "react";

import sample from "./assets/sample.json";

// export const API_ENDPOINT = `https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/${process.env.REACT_APP_CONTRACT_ADDRESS}/transactions/?key=${process.env.REACT_APP_COVALENTHQ_API_KEY}`;
export const API_ENDPOINT = `https://api.covalenthq.com/v1/1/address/0xa79E63e78Eec28741e711f89A672A4C40876Ebf3/transactions_v2/?&format=JSON&block-signed-at-asc=false&no-logs=true&page-number=3&key=ckey_74256b2121af4d1eb4edf9f5643`;

const AppContext = React.createContext();

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [recordsList, setrecordsList] = useState(null);

  const fetchRecords = async (url) => {
    setIsLoading(true);
    setrecordsList(null);
    console.log(url);
    try {
      const response = await fetch(url);
      const { data, error, error_message } = await response.json();

      if (!error) {
        setrecordsList(data.items);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: error_message });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecords(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, recordsList };
};

const useSample = () => {
  const isLoading = false;
  const error = { show: false, msg: "" };
  const recordsList = sample.items;

  return { isLoading, error, recordsList };
};

const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [itemSize, setItemSize] = useState(5);

  const { isLoading, error, recordsList } = useFetch(
    `&quote-currency=${currency}&page-size=${itemSize}`
  );

  // const { isLoading, error, recordsList } = useSample();

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        recordsList,
        currency,
        itemSize,
        setCurrency,
        setItemSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
