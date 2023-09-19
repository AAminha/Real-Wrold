import React from 'react'

const Pagination = ({ totalPage, currentPage }: { totalPage: number; currentPage: number }) => {
  return (
    <ul className="pagination">
      {totalPage > 0 &&
        Array(totalPage)
          .fill(undefined)
          .map((_, idx) => (
            <li
              key={idx}
              className={`page-item ng-scope ${idx + 1 === currentPage && 'active'}`}
            >
              <div className="page-link ng-binding">1</div>
            </li>
          ))}
    </ul>
  )
}

export default Pagination
