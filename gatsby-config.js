module.exports = {
  siteMetadata: {
    title: `Voltage Arc`,
    description: `Wilder, kompromissloser Hardrock. Das ist Voltage Arc. Junge Hardrock und Metal Band aus Beinwil am See, Aargau`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'voltagearc', // (required)
        path: '/preview', // (optional, default: /preview)
        previews: true, // (optional, default: false)
        // pages: [{ // (optional)
        //   type: 'Post',         // TypeName from prismic
        //   match: '/news/:uid',  // Pages will be generated under this pattern (optional)
        //   path: '/news',        // Placeholder page for unpublished documents
        //   component: require.resolve('./src/templates/post.jsx'),
        // }],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Oswald:700', 'IBM Plex Sans:600,400']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `voltagearc`,
        short_name: `VA`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
