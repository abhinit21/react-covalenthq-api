import React, { useState, useEffect, useContext } from "react";

import sample from "./assets/sample.json";

export const API_ENDPOINT = `https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/${process.env.REACT_APP_CONTRACT_ADDRESS}/transactions/?key=${process.env.REACT_APP_COVALENTHQ_API_KEY}&format=JSON&page-size=5`;

const AppContext = React.createContext();

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [recordsList, setrecordsList] = useState(null);

  const fetchRecords = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data.error && !data) {
        const { newData } = data;
        setrecordsList(newData.items || newData);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.error_message });
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
  const [query, setQuery] = useState("USD");
  // const { isLoading, error, recordsList } = useFetch(
  //   `&quote-currency=${query}`
  // );
  const { isLoading, error, recordsList } = useSample();

  if (!isLoading) {
    console.log(recordsList);
  }

  return (
    <AppContext.Provider
      value={{ isLoading, error, recordsList, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
