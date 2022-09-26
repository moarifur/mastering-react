import React from 'react';
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    //Math.ceil will grant the value of the highest integer
    const pagesCount = Math.ceil(itemsCount / pageSize);
    // It will not render the pagination component
    if (pagesCount === 1) return null;

    /* --------------------------------------------------------------
    Target: Get an array of numbers [1, 2, 3]
    Reference:
        - https://www.tutorialspoint.com/lodash/lodash_range.htm
        - https://www.geeksforgeeks.org/lodash-_-range-method/
    -----------------------------------------------------------------*/
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li
                        key={page}
                        className={page === currentPage ? "page-item active" : "page-item"}
                    >
                        <button className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>

    );
};

// Reference: https://www.npmjs.com/package/prop-types
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;