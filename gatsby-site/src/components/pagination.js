import React from "react"
import { Link } from "gatsby"
import * as styles from "./pagenation.module.scss"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const style = {
  marginRight: '5px'
};

const Pagination = ({ pageContext }) => {
  // (1)
  const { numberOfPages, humanPageNumber, previousPagePath, nextPagePath } = pageContext;
  // (2)
  const pages = Array.from({ length: numberOfPages }, (v, i) => i + 1);

  return (
    <div className={styles.pagenationNumWrap}>
      {
        previousPagePath
          ? <Link className={styles.pagenationNumItem} to={previousPagePath} style={style}><IoIosArrowBack /></Link>
          : null
      }
      {
        pages.map(page => (
          humanPageNumber !== page
            ? <Link className={styles.pagenationNumItem} key={page} to={page === 1 ? "/page" : `/page/${page}`} style={style}>{page}</Link>
            : <span className={styles.pagenationNumNow} style={style}>{page}</span>
        ))
      }
      {
        nextPagePath
          ? <Link className={styles.pagenationNumItem} to={nextPagePath} style={style}><IoIosArrowForward /></Link>
          : null
      }
    </div>
  );
}

export default Pagination
