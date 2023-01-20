import React from "react";

const Pagination = ({
  rowsPerPage,
  activePage,
  count,
  totalPages,
  setActivePage,
}) => {
  const beggining = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = totalPages ? count : beginning + rowsPerPage - 1;

  return (
    <>
      <div className="pagination">
        <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
          ⏮ First
        </button>
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          ⬅ Previous
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          ➡ Next
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          ⏭ Last
        </button>
      </div>
      <p>
        Page {activePage} of {totalPages}
      </p>
      <p>
        Rows: {beggining == end ? end : `${beggining} - ${end}`} of {count}
      </p>
    </>
  );
};

export default Pagination;
