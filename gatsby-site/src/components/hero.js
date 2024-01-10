import * as React from "react"
import "../style/hero.scss"

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h2>Corporate philosophy</h2>
        <h1>good ideas!</h1>
      </div>
      <p className="hero-text-p"><span class="buy">「バイヤー」</span><span class="sell">「売り手」</span><span class="part">「関係者」</span><br />
          私たちは、全ての要素に於いて<br />皆様と深く関わり合いながら<br />関わったみんなが幸せになれる会社を<br />目指しています。<br />よろしくお願いします！<br /><br />
          <span class="buy">"Buyer"</span> <span class="sell">"Seller"</span> <span class="part">"Participant"</span><br />We aim to become a company that can make everyone happy <br />while deeply involved with everyone in every element.nice to meet you.</p>
      <div className="hero-author">
        <img src="https://m3-pharmacist-prod.s3.amazonaws.com/uploads/uploaded_image/pharmacist_news/8974/pc.png?1703488714" alt="" className="hero-author-image" />
      <p className="hero-author-text">
        Written by XXXX.<br />
        Front Engineer at Hoge.Inc. Love JavaScript.</p>
      </div>
    </div>
  )
}
