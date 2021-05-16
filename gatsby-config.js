module.exports = {
  siteMetadata: {
    title: `NODEV`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        name: `NODEV`,
        short_name: `NODEV`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#18194f`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
