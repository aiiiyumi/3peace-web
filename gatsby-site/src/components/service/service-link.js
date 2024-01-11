import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { IoArrowForwardSharp } from "react-icons/io5";
import "./service.css"
import "../layout.scss"


export default function ServiceLink() {
  return (
    <section>
      <h1 className="text-6xl font-bold text-neutral-700">Business details</h1>
      <div className="service-wrap container-blo">
        <StaticImage
          src="../../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="事業内容の画像"
          style={{ marginBottom: `var(--space-3)` }}
          className="Point"
        />
        <p>Canvas 要素は 2 つのプロパティを使用して構成できます。1 つはクラス名を設定し、もう 1 つはスタイルを設定します。さらに、アニメーションの開始、終了、リセットのためにコールバックを実装できます。「confetti」プロップを使用して必要な数の紙吹雪を起動する場合、さらにカスタマイズするために「canvas-confetti」インスタンスを取得することをお勧めします。この場合、`fire`、`reset`、`onFire`、`onDecay`、および `onReset` プロパティの使用は避けてください。</p>

        <div className="Link-wrap linkEnd">
          <Link
            to={"static-service"}
            className="Link-button"
          >
              業務内容を詳しくを見る<IoArrowForwardSharp />
          </Link>
        </div>
      </div>
    </section>

  )
}


