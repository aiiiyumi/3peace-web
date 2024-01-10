import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"


import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"
import PostLink from "../components/post-link"
import Canvas from "../components/canvas"
import ArticlesGrid from "../components/articles-grid"
import ServiceLink from "../components/service-link"
import * as styles from "../components/index.module.css"
import "../style/indexPage.css"


const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "実績一覧を見る",
    url: "article-list",
    badge: false,
    description:
      "スリーピース株式会社の実績の一覧",
  },
  {
    text: "業務内容",
    url: "page-4",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "Page 3",
    url: "page-3",
    badge: false,
    description:
      "Test page",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`



const IndexPage = () => {
  const { allStrapiBlog } = useStaticQuery(graphql`
    query {
      allStrapiBlog {
        nodes {
          ...ArticleCard

        }
      }
    }
  `)

  return (
    <Layout>
      <div className="Point">
      <Seo seo={{ metaTitle: "Home" }} />
      <div className={styles.textCenter}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
          className="view-wrap"
            >
              <Canvas />
          </div>
          <div className="content-wrap">
            <div
              style={{
                margin: `0 auto`,
                maxWidth: `var(--size-content)`,
                padding: `var(--size-gutter)`,
              }}
                className="view-wrap"
                  >
                    <Hero />
                    <StaticImage
                    src="../images/example.png"
                    loading="eager"
                    width={64}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                      style={{ marginBottom: `var(--space-3)` }}
                      className="Point"
                    />
                  <p className={styles.intro}>
                    <b>Example pages:</b>{" "}
                    {samplePageLinks.map((link, i) => (
                      <React.Fragment key={link.url}>
                        <Link to={link.url}>{link.text}</Link>
                        {i !== samplePageLinks.length - 1 && <> </>}
                      </React.Fragment>
                    ))}
                    <br />
                    Edit <code>src/pages/index.js</code> to update this page.
              </p>
              <ServiceLink />
              <div className="index-wrap">
                <ArticlesGrid articles={allStrapiBlog.nodes} />
                <div className="Link-wrap">
                  <Link
                    to={"article-list"}
                    className="Link-button"
                  >
                      実績一覧を見る
                  </Link>
                </div>
              </div>


                <PostLink />
                <PostLink />
                <PostLink />
                <ul className={styles.list}>
                  {links.map(link => (
                    <li key={link.url} className={styles.listItem}>
                      <a
                        className={styles.listItemLink}
                        href={`${link.url}${utmParameters}`}
                      >
                        {link.text} ↗
                      </a>
                      <p className={styles.listItemDescription}>{link.description}</p>
                    </li>
                  ))}
                </ul>
                {moreLinks.map((link, i) => (
                  <React.Fragment key={link.url}>
                    <a href={`${link.url}${utmParameters}`}>{link.text}</a>
                    {i !== moreLinks.length - 1 && <> · </>}
                  </React.Fragment>
                ))}
              </div>
          </div>
        </div>


      </div>
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
