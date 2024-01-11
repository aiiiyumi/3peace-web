import React from "react"
import { Link } from "gatsby"
import { IoArrowBackSharp } from "react-icons/io5";
import Layout from "../components/layout"
import "../components/service/service.scss"
import "../components/layout.scss"

export default function PrivacyPage() {
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
        <div className="text-primary">個人情報保護方針</div>
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
