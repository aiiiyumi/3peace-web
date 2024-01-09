/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://127.0.0.1:1337",
  accessToken: process.env.STRAPI_TOKEN,
          collectionTypes: [
          {
              singularName: "blog",
              endpoint: "api/blog",
              api: {
                qs: {
                populate: "*"
              }
            },
            queryParams: {
              publicationState:process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                image: "*",
                images: "*",
                blocks: {
                  populate: "*",
                },
                image: {
                  populate: "*",
                },
                Markdown: "*",
                strapiBlogMarkdownTextnode: "*",
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "global",
            queryParams: {
              populate: {
                Favicon: "*",
                DefaultSeo: {
                  populate: "*",
                },
                image: {
                  populate: "*",
                }
              },
            },
          },
  ],
        queryLimit: 1000,
  maxParallelRequests: 20,
  depthLimit: 50,
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "https://your-site-domain/",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};


module.exports = {

  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 5000,
              },
            },
          ],
        },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
              ignoreFileExtensions: [],
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-emoji',
        ]
      }
    },
  ],
}
