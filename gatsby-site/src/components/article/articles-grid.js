import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArticleCard from "./article-card"


const ArticlesGrid = ({ articles }) => {
  return (
    <section>
      <h1 className="text-6xl font-bold text-neutral-700">Achievements</h1>
      {articles.map((article) => (
        <ArticleCard key="article.id" article={article} />
      ))}

    </section>
  )
}

export default ArticlesGrid
