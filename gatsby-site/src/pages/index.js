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
import * as styles from "../style/index.module.scss"
import "../style/indexPage.scss"



const IndexPage = () => {
  const { allStrapiBlog } = useStaticQuery(graphql`
    query {
      allStrapiBlog(sort: {updatedAt: DESC}, limit: 3) {
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
          className="view-wrap"
            >
          <Canvas />
          </div>

          <div className="content-wrap">
            <div
                className="view-wrap"
            >
              <Hero />
            </div>
          </div>
          <ServiceLink />
          <div className="content-wrap">
            <div
                className="view-wrap"
            >



              <section>
                <div>
                  <div id="Achievements" className="contentWrapMain" >
                    <ArticlesGrid articles={allStrapiBlog.nodes} />
                    <div className="Link-wrap linkEnd">
                      <Link
                        to={`page`}
                        className="Link-button"
                      >
                          実績一覧を見る<IoArrowForwardSharp />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
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
