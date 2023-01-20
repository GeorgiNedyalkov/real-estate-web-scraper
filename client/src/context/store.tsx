import { useState, useEffect, createContext, useContext } from "react";

interface Apartment {
  title: string;
  parameters: {
    price: number;
    pricePerSqMeter: number;
    size: number;
    loor: number;
    constructionType: string;
    completionProgress: string;
    lastFloor: boolean;
  };
}

function useApartmentSource(): {
  apartment: Apartment[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
} {
  const [apartment, setApartment] = useState<Apartment[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/oneBedroomApartments")
      .then((res) => res.json())
      .then((data) => setApartment(data.result));
  }, []);

  return { apartment, search, setSearch };
}

const ApartmentContext = createContext({
  apartment: [] as Apartment[],
});

export function useApartment() {
  return useContext(ApartmentContext);
}

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ApartmentContext.Provider value={useApartmentSource()}>
      {children}
    </ApartmentContext.Provider>
  );
}
