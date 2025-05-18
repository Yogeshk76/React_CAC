import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

  const [data, setData] = useState({});

  useEffect((res) => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(res);
    console.log(data);
  
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
