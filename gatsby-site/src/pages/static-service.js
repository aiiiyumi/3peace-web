// src/pages/page2.js
import React from "react"
import { Link } from "gatsby"
import { IoArrowBackSharp } from "react-icons/io5";
import Layout from "../components/layout"
import CompanyCom from '../components/company'
import "../components/layout.scss"

export default function StaticService() {
    return (
      <Layout>
        <div
          className="view-wrap"
        >
          <div className="container-blog text-primary">
          <h1 className="text-6xl font-bold text-neutral-700">Business details</h1>
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
          <CompanyCom />
        </div>
      </Layout>
    )
}
