import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

const Pagination = ({ props }) => {


  return (
    <div>
      <Link to={props.pageContext.previousPagePath}>Previous</Link>
      <Link to={props.pageContext.nextPagePath}>Next</Link>
    </div>
  )
}

export default Pagination
