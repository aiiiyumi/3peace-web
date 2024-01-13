import React from "react"
import ArticleCard from "./article-card"


const ArticlesGrid = ({ articles }) => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-neutral-700">Achievements</h1>
      {articles.map((article) => (
        <ArticleCard key="article.id" article={article} />
      ))}

    </div>
  )
}

export default ArticlesGrid
