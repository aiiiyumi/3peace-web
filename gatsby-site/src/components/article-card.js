import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.slug}`}
      className="post-link overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div>
        <GatsbyImage
          image={getImage(article.image.localFile)}
            alt={article.image.alternativeText}
            className="post-link-image"
          />
      </div>
      <div className="post-liunk-text">
        <h3 className="font-bold text-neutral-700">{article.title}</h3>
        <p className="post-link-body">{article.description}</p>
          <p className="post-link-date">{article.updatedAt}</p>
      </div>

    </Link>
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
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`

export default ArticleCard
