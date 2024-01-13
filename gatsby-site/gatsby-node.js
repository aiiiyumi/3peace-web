/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")
const { paginate } = require(`gatsby-awesome-pagination`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const articlePost = path.resolve("./src/templates/article-post.js")
  const result = await graphql(
    `
      {
        allStrapiBlog {
          nodes {
            title
            slug
            image {
              alternativeText
              localFile {
                url
              }
            }
            blocks {
              type
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            totalCount
            perPage
            pageCount
            currentPage
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )
    return
  }

  const articles = result.data.allStrapiBlog.nodes

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/article/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }

  // paginate({
  //   createPage,
  //   items: allStrapiBlog,
  //   itemsPerPage: 2,
  //   itemsPerFirstPage: 0,
  //   pathPrefix: '/articles',
  //   component: path.resolve('./src/pages/article-list.js'),
  // })


  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })


}
