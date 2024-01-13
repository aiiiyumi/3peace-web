// src/pages/page2.js
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../components/service/service.scss"
import "../components/layout.scss"
import "../style/post.scss"


export default function Page3() {
    return (
      <Layout>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
          className="view-wrap"
        >
          <div className="container-blog">
            <div className="text-primary">業務内容</div>
            <Link to="/">ホームに戻る</Link>
          </div>
          </div>
        </Layout>
    )
}
