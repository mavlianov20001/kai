import React from 'react';
import classes from "./pagination.module.css";

function Pagination({totalItems, itemsPerPage, paginate}) {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <ul className={classes.pagination}>
            {
                pageNumber.map(number => (
                    <li className={classes.page_item} key={number}>
                        <a href="src/components/UI/pagination/Pagination#/"
                           onClick={() => paginate(number)}
                           className={classes.page_link}
                        >
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}

export default Pagination;