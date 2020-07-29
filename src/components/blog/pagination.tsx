import * as React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/all';

export interface PaginationProps {
  blogSlug: string;
  isFirst: boolean;
  isLast: boolean;
  prevPage: string;
  nextPage: string;
  numPages: number;
  currentPage: number;
}

const Pagination: FunctionComponent<PaginationProps> = props => (
  <div className="pagination">
    <ul>
      {!props.isFirst && (
        <li>
          <Link to={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine/>
            </span>{' '}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${props.blogSlug}${i === 0 ? '' : i + 1}`}
            className={props.currentPage === i + 1 ? 'is-active num' : 'num'}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage} rel="next">
            Next{' '}
            <span className="icon -right">
              <RiArrowRightLine/>
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
);

export default Pagination;
