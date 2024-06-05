function Pagination({ totalPages, curPage, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  console.log(curPage, "curpage", totalPages, "totalpage");
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li
          className={curPage === 0 ? "page-item disabled" : "page-item"}
          onClick={() => onPageChange((curPage - 1 + totalPages) % totalPages)}
        >
          <a className="page-link">Previous</a>
        </li>
        {pages.map((page, index) => {
          return (
            <li
              key={`${index} ${page}`}
              className="page-item"
              onClick={() => onPageChange(page)}
            >
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          );
        })}
        <li
          className={
            curPage === totalPages ? "page-item disabled" : "page-item"
          }
          onClick={() =>onPageChange((curPage + 1) % totalPages)}
        >
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
