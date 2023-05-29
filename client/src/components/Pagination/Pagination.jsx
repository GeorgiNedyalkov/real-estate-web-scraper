import { BiLastPage } from "react-icons/bi";
import { BiFirstPage } from "react-icons/bi";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const Pagination = ({
  rowsPerPage,
  activePage,
  setActivePage,
  count,
  totalPages,
}) => {
  const beggining = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beggining + rowsPerPage - 1;

  return (
    <>
      <div className="pagination">
        <button
          className="pagination__btn"
          disabled={activePage === 1}
          onClick={() => setActivePage(1)}
        >
          <BiFirstPage className="pagination__icons" /> First
        </button>
        <button
          className="pagination__btn"
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          <GrFormPreviousLink className="pagination__icons" /> Previous
        </button>
        <button
          className="pagination__btn"
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          <GrFormNextLink className="pagination__icons" /> Next
        </button>
        <button
          className="pagination__btn"
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          <BiLastPage className="pagination__icons" /> Last
        </button>
      </div>
      <p>Showing {beggining === end ? end : `${beggining} - ${end}`}</p>
      <p>
        Page {activePage} out of {totalPages}
      </p>
    </>
  );
};

export default Pagination;
