import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './article.module.scss';


export default function PostLink() {
  return (
    <div className={styles.article}>
      <div>
        <StaticImage className={styles.articleImage}
          src="https://m3-pharmacist-prod.s3.amazonaws.com/uploads/uploaded_image/pharmacist_news/8994/column01%20(3).png?1703496469"
          loading="eager"
          width={200}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="テスト"
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>
      <div className={styles.articleText}>
        <h2>Gatsbyでブログを作成してみた!</h2>
        <p className={styles.articleBody}>先日、爆速なサイトを作れると噂のReact製フレームワークのGatsbyを学んでみました。</p>
        <p className={styles.articleDate}>2020年5月30日</p>
      </div>
    </div>
  )
}
