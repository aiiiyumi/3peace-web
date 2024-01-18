import React from "react"
import ArticleCard from "./article-card"


const ArticlesGrid = ({ articles }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-primary-500 textH3">実績</h3>
      <h1 className="text-6xl font-bold text-neutral-700">Achievements</h1>
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}

    </div>
  )
}

export default ArticlesGrid
