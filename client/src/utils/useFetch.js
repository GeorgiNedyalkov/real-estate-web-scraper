import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return { apartments, loading, setApartments, setLoading };
};
