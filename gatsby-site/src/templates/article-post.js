import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../style/post.scss"


const ArticlePage = ({ data }) => {
  const article = data.strapiBlog
  // const Markdown = data.strapiBlogMarkdownTextnode



const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
  }



  return (
    <Layout as="article">
      <Seo seo={seo} />
      <header className="container-blog max-w-4xl py-8">
        <h1 className="text-6xl font-bold text-neutral-700">{article.title}</h1>
        <p className="mt-4 text-2xl text-neutral-500">{article.description}</p>
        <span>{article.updatedAt}</span>
       <GatsbyImage
          image={getImage(article?.image?.localFile)}
          alt={article?.image?.alternativeText}
          className="mt-6"
        />
      </header>
      <main className="mt-8">

        <div>
          <h2 className="text-4xl font-bold text-neutral-700">Markdown</h2>
          <div className="post-wrap"
              dangerouslySetInnerHTML={{
                __html: article?.Markdown.data.childMarkdownRemark.html,
              }}

            ></div>

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
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.77)
          }
        }
      }

      id
      Markdown {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }


`



export default ArticlePage
