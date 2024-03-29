require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Meraki Wood Designs`,
    description: `Custom Wood crafts and designs for weddings, events, and special gifts.`,
    author: `Peter Christie`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#F4EBDE`,
        theme_color: `#F4EBDE`,
        display: `minimal-ui`,
        icon: `src/images/MW_logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.CMS_ENDPOINT}`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
