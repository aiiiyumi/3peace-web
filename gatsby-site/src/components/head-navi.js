import * as React from "react"
import { Link } from "gatsby"
import "../style/header.css"

const samplePageLinks = [
  {
    text: "業務内容",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "実績",
    url: "page-3",
    badge: false,
    description:
      "Test page",
  },
  { text: "スポンサー", url: "using-typescript" },
  { text: "会社概要", url: "using-ssr" },
]


const Navigation = ({ open }) => {
  return (

    <nav aria-expanded={open} className="header-Spmenu">
        {" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> </>}
          </React.Fragment>
        ))}
      </nav>

  )
}

export default Navigation
