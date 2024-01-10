import * as React from "react"
import { Link } from "gatsby"
import "../style/service.css"
import "./layout.css"


export default function ServiceLink() {
  return (
    <div className="service-wrap container-blo">
      <p>Canvas 要素は 2 つのプロパティを使用して構成できます。1 つはクラス名を設定し、もう 1 つはスタイルを設定します。さらに、アニメーションの開始、終了、リセットのためにコールバックを実装できます。「confetti」プロップを使用して必要な数の紙吹雪を起動する場合、さらにカスタマイズするために「canvas-confetti」インスタンスを取得することをお勧めします。この場合、`fire`、`reset`、`onFire`、`onDecay`、および `onReset` プロパティの使用は避けてください。</p>
      <div className="Link-wrap">
        <Link
          to={"static-service"}
          className="Link-button"
        >
            業務内容を詳しくを見る
        </Link>
      </div>
    </div>
  )
}


