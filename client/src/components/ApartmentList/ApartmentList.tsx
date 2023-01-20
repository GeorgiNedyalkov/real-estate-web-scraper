import { useApartment } from "../../context/store";

export default function ApartmentList() {
  const { apartment } = useApartment();

  return (
    <ul>
      {apartment.map((a, i) => (
        <li key={i}>
          {a.parameters.price} is The price of {a.title}
        </li>
      ))}
    </ul>
  );
}
