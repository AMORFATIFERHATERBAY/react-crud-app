import React, { useEffect, useState } from "react";

const Pagination = ({ pages, setCurrentPage }) => {
  const [currentPageBtn, setCurrentPageBtn] = useState(1);
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentPageBtn);
  }, [currentPageBtn, setCurrentPage]);

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>5</b> out of <b>25</b> entries
      </div>
      <ul className="pagination">
        <li
          className={`${
            currentPageBtn === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentPageBtn((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            Previous
          </a>
        </li>
        {numOfPages.map((page, i) => {
          return (
            <li
              key={i}
              className={`${
                currentPageBtn === page ? "page-item active" : "page-item"
              }`}
            >
              <a
                href="#!"
                className="page-link"
                onClick={() => setCurrentPageBtn(page)}
              >
                {page}
              </a>
            </li>
          );
        })}
        <li
          className={`${
            currentPageBtn === numOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentPageBtn((prev) =>
                prev === numOfPages.length ? prev : prev + 1
              )
            }
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
