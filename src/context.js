import React, { useState, useEffect, useContext } from "react";

export const API_ENDPOINT = `https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/${process.env.REACT_APP_CONTRACT_ADDRESS}/transactions/?key=${process.env.REACT_APP_COVALENTHQ_API_KEY}&format=JSON&page-size=5`;

const AppContext = React.createContext();

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchRecords = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(url);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecords(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("USD");
  const {
    isLoading,
    error,
    data: records,
  } = useFetch(`&quote-currency=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, records, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
