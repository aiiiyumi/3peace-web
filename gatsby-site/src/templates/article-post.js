import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import { StaticImage } from "gatsby-plugin-image"
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
          className="view-wrap"
      >

        <header className="container-blog max-w-4xl py-8">
          <h1 className="text-6xl font-bold text-primary">{article.title}</h1>
          <p className="mt-4 text-2xl text-primary">{article.description}</p>
          <span>{article.updatedAt}</span>
        <GatsbyImage
            image={getImage(article?.image?.localFile)}
            alt={article?.image?.alternativeText}
            className="mt-6"
          />
        </header>
        <main className="mt-8">

          <div className="text-primary">
            <div className="markdown-wrap"
                dangerouslySetInnerHTML={{
                  __html: article?.Markdown.data.childMarkdownRemark.html,
                }}

            >

            </div>


          </div>

          <div className="Link-wrap linkBoth">

            <Link
              to={"/"}
              className="Link-button"
            >
                <IoArrowBackSharp />戻る
            </Link>
            <Link
              to={"../../article-list"}
              className="Link-button"
            >
                実績一覧を見る<IoArrowForwardSharp />
            </Link>
          </div>

        </main>
      </div>

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
            gatsbyImageData(
              aspectRatio: 1.77
              )
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
