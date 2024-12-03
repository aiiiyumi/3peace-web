import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from './article.module.scss';

const ArticleCard = ({ article }) => {
  return (
    <div className={styles.articleWrap}>
      <Link
        to={`/article/${article.slug}`}
        className={`${styles.article} overflow-hidden rounded-lg bg-pink-800/5 shadow-sm text-left transition-shadow hover:shadow-md`}
      >
        <div>
          <GatsbyImage
            image={getImage(article.image.localFile)}
            alt="実績の画像"
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
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_BLOG {
    id
    slug
    title
    description
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
`

export default ArticleCard
