import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Pagination from "../components/pagination"
import Layout from "../components/layout"
import CompanyCom from '../components/company'
import "../style/post.scss"
import "../components/layout.scss"
import * as styles from "../components/article/article.module.scss"
import { IoArrowBackSharp } from "react-icons/io5";


const List = ({ data, pageContext }) => {



  return (
    <Layout>
      <div
          className="view-wrap"
      >
        <div className="container-blog text-primary">
          <h1 className="text-6xl font-bold text-neutral-700">Achievements</h1>
          <h2 className="text-primary contentTitle">実績</h2>

        {data.allStrapiBlog.nodes.map(article => (
          <div className={styles.articleWrap} key={article.slug}>
            <Link
              to={`../article/${article.slug}`}
              className={`${styles.article} overflow-hidden rounded-lg bg-pink-800/5 shadow-sm transition-shadow hover:shadow-md`}
            >
              <div>
                <GatsbyImage
                  image={getImage(article.image.localFile)}
                    alt={article.image.alternativeText}
                  className={styles.articleImage}
                  sizes="(min-width: 1000px) 1000px, 100vw"
                  />
              </div>

              <div className={styles.articleText}>
                <h3 className="font-bold text-lg">{article.title}</h3>
                <p className={styles.articleBody}>{article.description}</p>
                <p className={`${styles.articleDate} m-0`}>{article.updatedAt}</p>
              </div>

            </Link>
          </div>
        ))}


        <div className="Link-wrap">
          <Pagination pageContext={pageContext}/>
        </div>
        <div className="Link-wrap linkStart">
            <Link
              to={"/"}
              className="Link-button"
            >
                <IoArrowBackSharp />戻る
            </Link>
          </div>
        </div>
        <CompanyCom />
      </div>

    </Layout>
  )
}

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allStrapiBlog(skip: $skip, limit: $limit)  {
      nodes {
        slug
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
      }
    }
  }
`


export default List
