function Pagination({ onPageChange, currentPage, totalPages }) {
  const paginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li className={pageNumber === currentPage ? 'mx-0 my-1 activePage' : 'mx-0 my-1'} key={pageNumber}>
        <a
          className="px-2 py-1 rounded-md border-solid border-gray-200 hover:bg-slate-100 hover:text-black"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPageChange(pageNumber);
          }}
        >
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <ul className="flex justify-center items-center list-none m-0 p-0 my-8 flex-wrap gap-4">
      <li>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
      </li>
      {paginationLinks()}
      <li>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
