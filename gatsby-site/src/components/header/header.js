import React, { useState } from 'react'
import { Link } from "gatsby"
import HeaderMenuButton from './header-menu-button'
import HeadNavi from './head-navi'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./header.scss"
import Logo from "../../svg/logo.svg"


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
    <nav className="header-menu">
      <Link to="../../static-service">業務内容</Link>
      <AnchorLink to="/#Achievements" title="実績" />
      <AnchorLink to="/#Sponsor" title="スポンサー" />
      <AnchorLink to="/#Company" title="会社概要" />
    </nav>
    <HeaderMenuButton
      open={open}
      onClick={menuOpenFunction}
    />
    <HeadNavi
      open={open}
    />
  </header>
  )
}

export default Header
