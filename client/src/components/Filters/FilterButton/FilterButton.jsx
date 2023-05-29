import { BsFillFilterCircleFill } from "react-icons/bs";

const FilterButton = ({ onFilter, hasFilters }) => {
  return (
    <button
      className={`${hasFilters ? "filter__button active" : "filter__button "}`}
      onClick={() => onFilter(!hasFilters)}
    >
      <BsFillFilterCircleFill />
      Filters
    </button>
  );
};

export default FilterButton;
