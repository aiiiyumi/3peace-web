import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ArticlesGrid from "./articles-grid"
import "../../style/post.scss"

const PostInner = () => {
  const { allStrapiBlog } = useStaticQuery(graphql`
    query {
      allStrapiBlog(sort: {updatedAt: DESC}, limit: 3) {
        nodes {
          ...ArticleCard

        }
      pageInfo {
          hasNextPage
          hasPreviousPage
          totalCount
          perPage
          pageCount
          currentPage
        }
      }
    }
  `)


  return (
    <section>
      <div
          className="content"
      >
        <div className="container-blog">
          <ArticlesGrid articles={allStrapiBlog.nodes} />
        </div>
      </div>

      </section>
    )
}

export default PostInner
