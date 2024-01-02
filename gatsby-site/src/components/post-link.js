import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../style/post-link.css"


export default function PostLink() {
  return (
    <div className="post-link">
      <div>
        <StaticImage className="post-link-image"
          src="https://m3-pharmacist-prod.s3.amazonaws.com/uploads/uploaded_image/pharmacist_news/8994/column01%20(3).png?1703496469"
          loading="eager"
          width={200}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>
      <div className="post-liunk-text">
        <h2>Gatsbyでブログを作成してみた!</h2>
        <p className="post-link-body">先日、爆速なサイトを作れると噂のReact製フレームワークのGatsbyを学んでみました。</p>
        <p className="post-link-date">2020年5月30日</p>
      </div>
    </div>
  )
}
