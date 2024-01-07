import React from "react"
import ArticleCard from "./article-card"

const ArticlesGrid = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  )
}

export default ArticlesGrid
