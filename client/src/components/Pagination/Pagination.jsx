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
          ⏮ First
        </button>
        <button
          className="pagination__btn"
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          ⬅ Previous
        </button>
        <button
          className="pagination__btn"
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          ➡ Next
        </button>
        <button
          className="pagination__btn"
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          ⏭ Last
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
