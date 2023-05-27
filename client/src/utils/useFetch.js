import { useState, useEffect } from "react";

const oneBedsUrl = "http://localhost:3001/api/v1/oneBedroomApartments";
const twoBedUrl = "http://localhost:3001/api/v1/twoBedroomApartments";

export const useFetch = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApartments = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setApartments(data.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApartments(twoBedUrl);
  }, []);

  return { apartments, loading, setApartments, setLoading };
};
