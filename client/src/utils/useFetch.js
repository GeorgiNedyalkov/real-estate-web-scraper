import { useState, useEffect } from "react";

const twoBedsUrl = "http://localhost:3001/api/v1/twoBedroomApartments";

export const useFetch = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApartments = async () => {
    const res = await fetch(twoBedsUrl);
    const data = await res.json();
    setApartments(data.result);
    setLoading(false);
  };

  useEffect(() => {
    getApartments();
  }, []);

  return { apartments, loading };
};
