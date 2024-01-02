import * as React from "react"
import "../style/hero.scss"

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my Web!<br />
        Enjoy lots of posts.<br />
      </h1>
      <div className="hero-author">
        <img src="https://m3-pharmacist-prod.s3.amazonaws.com/uploads/uploaded_image/pharmacist_news/8974/pc.png?1703488714" alt="" className="hero-author-image" />
      <p className="hero-author-text">
        Written by XXXX.<br />
        Front Engineer at Hoge.Inc. Love JavaScript.</p>
      </div>
    </div>
  )
}
