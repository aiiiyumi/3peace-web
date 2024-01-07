import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"


const ArticlePage = ({ data }) => {
  const article = data.strapiBlog
  const Rich = data.strapiBlogMarkdownTextnode



const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
  }



  return (
    <Layout as="article">
      <Seo seo={seo} />
      <header className="container max-w-4xl py-8">
        <h1 className="text-6xl font-bold text-neutral-700">{article.title}</h1>
        <p className="mt-4 text-2xl text-neutral-500">{article.description}</p>
        <span>{article.updatedAt}</span>
        {Rich.Markdown.html}<br />
       <GatsbyImage
          image={article?.image?.localFile}
          alt={"Come on!"}
          className="mt-6"
        />
      </header>
      <main className="mt-8">

        <div>

          {Rich.Markdown}<br />
          {<BlocksRenderer blocks={article.blocks || []} /> }

        </div>

      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiBlog(slug: { eq: $slug })  {
      id
      description
      title
      updatedAt(formatString: "MMMM DD, YYYY")
      image {
        alternativeText
        localFile {
          url
          childrenImageSharp {
           gatsbyImageData(aspectRatio: 1.77)
            }
        }
      }
      flatText
    }

    strapiBlogMarkdownTextnode {
      childrenMarkdownRemark {
        html
        id
      }
      id
      Markdown
    }
  }
`



export default ArticlePage
