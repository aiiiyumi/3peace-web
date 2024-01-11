import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"


import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"
import Canvas from "../components/canvas/canvas"
import ArticlesGrid from "../components/article/articles-grid"
import ServiceLink from "../components/service/service-link"
import SponsorCom from '../components/sponsor';
import CompanyCom from '../components/company'
import { IoArrowForwardSharp } from "react-icons/io5";
import * as styles from "../style/index.module.css"
import "../style/indexPage.scss"



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

            <ServiceLink />
            <div className="index-wrap">
              <ArticlesGrid articles={allStrapiBlog.nodes} />
              <div className="Link-wrap linkEnd">
                <Link
                  to={"article-list"}
                  className="Link-button"
                >
                    実績一覧を見る<IoArrowForwardSharp />
                </Link>
              </div>
            </div>
            <SponsorCom />
            <CompanyCom />



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
