import * as React from "react"
import "../style/hero.scss"

export default function Hero() {
  return (
    <section>
      <div className="hero">
      <div className="hero-text">
        <h2>Corporate philosophy</h2>
        <h1 className="text-6xl">good ideas!</h1>
      </div>
      <p className="hero-text-p"><span className="buy">「バイヤー」</span><span className="sell">「売り手」</span><span className="part">「関係者」</span><br />
          私たちは、全ての要素に於いて<br />皆様と深く関わり合いながら<br />関わったみんなが幸せになれる会社を<br />目指しています。<br />よろしくお願いします！<br /><br />
          <span className="buy">"Buyer"</span> <span className="sell">"Seller"</span> <span className="part">"Participant"</span><br />We aim to become a company that can make everyone happy <br />while deeply involved with everyone in every element.nice to meet you.</p>
    </div>
    </section>

  )
}
