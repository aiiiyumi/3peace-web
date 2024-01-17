import * as React from "react"
import { Link } from "gatsby"
import "./header.scss"



const Navigation = ({ open }) => {
  return (

    <nav aria-expanded={open} className="header-Spmenu">
      <Link to="../../static-service">業務内容</Link>
      {/* <Link to="../../article-list">実績一覧</Link> */}
    </nav>

  )
}

export default Navigation
