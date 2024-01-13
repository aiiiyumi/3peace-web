// src/pages/page2.js
import React from "react"
import { Link } from "gatsby"
import { IoArrowBackSharp } from "react-icons/io5";
import Layout from "../components/layout"

export default function StaticService() {
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
          <div className="container-blog text-primary">
          <h2 className="text-primary contentTitle">事業内容</h2>
            <div className="ContentInner">
              test
            </div>
            </div>
            <div className="Link-wrap linkStart">
            <Link
              to={"/"}
              className="Link-button"
            >
                <IoArrowBackSharp />戻る
            </Link>
          </div>
        </div>
      </Layout>
    )
}
