import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
// import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"

const ArticlePage = ({ data }) => {
  <pre>{JSON.stringify(data, null, 2)}</pre>
  const article = data.strapiBlog


  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
  }



  return (
    <Layout as="article">
      <Seo seo={seo} />
      <header className="container max-w-4xl py-8">
        <h1 className="text-6xl font-bold text-neutral-700">{article.title}</h1>
        <p className="mt-4 text-2xl text-neutral-500">{article.description}</p>
        <GatsbyImage
          image={getImage(article?.cover?.localFile)}
          alt={article?.cover}
          className="mt-6"
        />
      </header>
      <main className="mt-8">
        {/* <BlocksRenderer blocks={article.blocks || []} /> */}
        {article?.children?.text}
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiBlog(slug: { eq: $slug }) {
      id
      slug
      title
      description
      cover {
        localFile {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
        children {
            text
            type
            url
            code
          }
          image {
            url
          }
      }
    }
  }
`

export default ArticlePage
