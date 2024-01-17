import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { IoArrowForwardSharp } from "react-icons/io5";
import "./service.css"
import "../layout.scss"
import * as styles from "../../style/index.module.scss"
import { motion } from "framer-motion"


export default function ServiceLink() {

  const variants = { // こんな形でVariantsを設定。名前はなんでもOK。
  visible: { // 状態を設定。名前はなんでもOK。visible（見える状態）は名前としてよく使う。
    opacity: 1, // 透過率。0〜1の間の値。0で完全に透明、1で完全に見える状態。
    transition: {
      duration: 5 // 2秒かけて変化。
    }
  },
  hidden: { // 状態を設定。名前はなんでもOK。hidden（隠れている状態）は名前としてよく使う。
    opacity: 0,
  },
  }

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 10 }}
    >
      <div className={`${styles.DeteailBack}`}>

        <div className={`contentWrapMain ${styles.DeteailBgcolor}`}>
          <div className="">
            <div
              style={{
                margin: `0 auto`,
                maxWidth: `var(--size-content)`,
                padding: `var(--size-gutter)`,
              }}
            >
              <h1 className="text-6xl font-bold text-primary">Business details</h1>
              <div className="service-wrap container-blo">
                <StaticImage
                  src="../../images/gatsby-icon.png"
                  loading="eager"
                  width={64}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="事業内容の画像"
                  style={{ marginBottom: `var(--space-3)` }}
                  className="Point"
                />
                <p className="text-primary">Canvas 要素は 2 つのプロパティを使用して構成できます。1 つはクラス名を設定し、もう 1 つはスタイルを設定します。さらに、アニメーションの開始、終了、リセットのためにコールバックを実装できます。「confetti」プロップを使用して必要な数の紙吹雪を起動する場合、さらにカスタマイズするために「canvas-confetti」インスタンスを取得することをお勧めします。この場合、`fire`、`reset`、`onFire`、`onDecay`、および `onReset` プロパティの使用は避けてください。</p>
              </div>
              <div className="Link-wrap linkEnd">
                <Link
                  to={"static-service"}
                  className="Link-button"
                >
                    業務内容を詳しくを見る<IoArrowForwardSharp />
                </Link>
              </div>
            </div>
          </div>


          </div>

      </div>
    </motion.section>

  )
}


