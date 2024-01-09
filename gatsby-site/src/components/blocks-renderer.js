
import React from "react"
import { graphql } from "gatsby"
import BlockRichText from "./block-rich-text"
import BlockMedia from "./block-media"
import BlockQuote from "./block-quote"

const componentsMap = {
  STRAPI__COMPONENT_SHARED_RICH_TEXT: BlockRichText,
  STRAPI__COMPONENT_SHARED_MEDIA: BlockMedia,
  STRAPI__COMPONENT_SHARED_QUOTE: BlockQuote,
}

const Block = ({ block }) => {
  const Component = componentsMap[block.__typename]

  if (!Component) {
    return null
  }

  return <Component data={block} />
}

const BlocksRenderer = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block, index) => (
        <Block key={`${index}${block.__typename}`} block={block} />
      ))}
    </div>
  )
}

export const query = graphql`
  fragment Blocks on STRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI_BLOGBlocks {
    __typename
    ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
      strapiBlogMarkdownTextnode: body {
        __typename
        data {
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_MEDIA {
      file {
        mime
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_QUOTE {
      title
      quoteBody: body
    }
  }
`

export default BlocksRenderer
