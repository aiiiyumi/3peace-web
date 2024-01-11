import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { IoArrowBackSharp } from "react-icons/io5";
import "../components/service/service.scss"
import "../components/layout.scss"

export default function PrivacyAbout() {
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
        <div className="text-primary">個人情報の取り扱いについて</div>
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
