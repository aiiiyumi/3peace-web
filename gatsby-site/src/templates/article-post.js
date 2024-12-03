import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import Layout from "../components/layout"
import Seo from "../components/seo"
import CompanyCom from '../components/company'
import "../style/post.scss"
import "../components/layout.scss"
import PostInner from "../components/article/post-inner";


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
          className="view-wrap"
      >

        <header className="container-blog max-w-4xl py-8">
          <h1 className="text-4xl leading-relaxed font-bold text-primary">{article.title}</h1>
          <p className="mt-4 text-2xl text-primary textDiscription">{article.description}</p>
          <span>{article.updatedAt}</span>
        <GatsbyImage
            image={getImage(article?.image?.localFile)}
            alt="実績の画像"
            className="mt-6"
            sizes="(min-width: 1000px) 1000px, 100vw"
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
          <PostInner />


        </main>
        <div className="Link-wrap linkBoth">

            <Link
              to={"/"}
              className="Link-button"
            >
                <IoArrowBackSharp />戻る
            </Link>
            <Link
              to={"../../page"}
              className="Link-button"
            >
                実績一覧を見る<IoArrowForwardSharp />
            </Link>
          </div>
      <CompanyCom />
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
            gatsbyImageData
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
