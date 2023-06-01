import { useState, useEffect } from "react";

const apiURL = "http://localhost:3001/api/v1/neighborhoods/izgrev";

export const useFetch = (initialURL = apiURL) => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(initialURL);

  const getApartments = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      const apartments = data.neighborhood[0].apartments;
      setApartments(apartments);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApartments(url);
  }, [url]);

  return { apartments, loading, setUrl };
};
