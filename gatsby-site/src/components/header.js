import React, { useState } from 'react'
import { Link } from "gatsby"
import HeaderMenuButton from '../components/header-menu-button'
import HeadNavi from '../components/head-navi'
import "../style/header.css"
import Logo from "../svg/logo.svg"

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

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuOpenFunction  = () => {
    setOpen((prevState) => !prevState);
  };


return (
  <header
    style={{
      margin: `0 auto`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
    className="head-wrap"
  >

    <div className='head-logoWrap'>
      <Link to="/">
        <Logo alt="株式会社スリーピース" />;
      </Link>
    </div>
    <div>
      <nav className="header-menu">
        {" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> </>}
          </React.Fragment>
        ))}
      </nav>
      <HeaderMenuButton
        open={open}
        onClick={menuOpenFunction}
      />
      <HeadNavi
        open={open}
      />
    </div>
  </header>
  )
}

export default Header
