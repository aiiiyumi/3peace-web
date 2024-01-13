import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

const Pagination = ({ pageContext }) => {
  const { numberOfPages, humanPageNumber } = pageContext

  const handleChange = (_event, value) => {
    value === 1 ? navigate(`/`) : navigate(`/article/${value}`)
  }

  return (
    <div>
      <Pagination
        defaultPage={humanPageNumber}
        count={numberOfPages}
        onChange={handleChange}
      />
    </div>
  )
}

export default Pagination
