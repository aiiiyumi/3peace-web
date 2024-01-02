import * as React from "react"
import { useState, useEffect } from "react"
import "../style/scroll-top.scss"

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll' , handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <button onClick={handleClick} id="scrollBtn" aria-label="to top">
          Top
        </button>
      ) }
    </div>
  )
}

export default Scroll

