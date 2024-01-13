import * as React from "react"
import { Link } from "gatsby"
import "./layout.scss"
import "../style/style.css"
import * as styles from "../style/company.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebook } from "react-icons/fa";

export default function CompanyCom() {

  const moreLinks = [
  {
    text: "個人情報保護方針",
    url: "privacypolicy",
    badge: false,
    description:
      "プライバシーポリシー",
  },
  {
    text: "個人情報の取り扱いについて",
    url: "privacypolicy_about",
    badge: false,
    description:
      "プライバシーポリシー",
  },

]
const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

  return (

    <section>
      <div id="Company" className="contentWrapMain">
        <h1 className="text-6xl font-bold text-neutral-700">Company plofile</h1>
        <div className="flex md:flex-row flex-col justify-start items-start gap-16px">
          <ul className={`basis-1/3 ${ styles.flex } ${styles.companyText}`}>
            <li className="font-bold">会社名</li>
            <li>株式会社スリーピース</li>
            <li className="font-bold">代表取締役</li>
            <li>堤 信弘</li>
            <li className="font-bold">設立</li>
            <li>2011年9月1日</li>
            <li className="font-bold">資本金</li>
            <li>900万1円</li>
            <li className="font-bold">所在地</li>
            <li>東京都渋谷区2-21-1 渋谷ヒカリエ33F</li>
          </ul>
          <ul className={`basis-1/3 ${styles.flex} ${styles.companyText}`}>
            <li className="font-bold">事業内容</li>
            <li>レンタル業</li>
            <li>広告代理業又は広告業</li>
            <li>電気通信業に基づく通信回線利用加入者の募集及び利用権の販売促進に関する業務</li>
            <li>LED照明の販売</li>
            <li>飲食店の経営、企画及び経営コンサルティング</li>
            <li>インターネット等のNetworkシステムを利用した通信販売業</li>
            <li>インターネット上のショッピングモールの企画、開設、運用及びそれらのノウハウの提供</li>
            <li>インターネットメディア事業</li>
            <li>上記各号に付帯する一切の事業</li>
            <li>自治体営業支援</li>
            <li>DXコンサルティング</li>
          </ul>
          <ul className={`basis-1/3 ${ styles.flexRow} ${styles.companyText}`}>
          <li>
            <Link to="https://www.facebook.com/3peace.japan/?fref=ts">
              <FaFacebook
                className={styles.icon}
              />
            </Link>
          </li>
          <li>
            <div className={styles.ppImgWrap}>
              <Link to="https://privacymark.jp/">
                <StaticImage
                  src="../images/17004172_200_EN.png"
                  loading="lazy"
                  width={60}
                  height={60}
                  formats={["auto", "webp", "avif"]}
                  alt="プライバシーポリシー"
                  className={styles.ppImg}
                />
              </Link>
            </div>
          </li>
          </ul>
        </div>
      </div>


      <div className={`text-sm ${styles.companyText}`}>
        {moreLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <a href={`${link.url}${utmParameters}`}>{link.text}</a>
            {i !== moreLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </div>
    </section>



  )
}
