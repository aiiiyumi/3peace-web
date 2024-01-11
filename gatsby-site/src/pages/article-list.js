import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ArticlesGrid from "../components/article/articles-grid"
import { IoArrowBackSharp } from "react-icons/io5";
import "../style/post.scss"

const ArticleList = () => {
  const { allStrapiBlog } = useStaticQuery(graphql`
    query {
      allStrapiBlog {
        nodes {
          ...ArticleCard

        }
      }
    }
  `)


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
          <ArticlesGrid articles={allStrapiBlog.nodes} />
          <div className="Link-wrap linkStart">
            <Link
              to={"/"}
              className="Link-button"
            >
                <IoArrowBackSharp />戻る
            </Link>
          </div>
        </div>
      </div>

      </Layout>
    )
}

export default ArticleList
