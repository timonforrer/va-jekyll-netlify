require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Voltage Arc`,
    description: `Wilder, kompromissloser Hardrock. Das ist Voltage Arc. Junge Hardrock und Metal Band aus Beinwil am See, Aargau`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'voltagearc',
        defaultLang: 'de-ch',
        path: '/preview',
        previews: true
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyTiycvkXZLfi2WO`, // may instead specify via env, see below
        tables: [
          {
            baseId: `appCQEn8NaoT0PdTa`,
            tableName: `Gigs`,
            tableView: `Grid view`, // optional
            queryName: `gigs`, // optional
            tableLinks: [`Venue`] // optional, for deep linking to records across tables.
          },
          {
            baseId: `appCQEn8NaoT0PdTa`,
            tableName: `Venues`,
            tableView: `Grid view`,
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCdARchfQvlOBcMNZynTPRCg'],
        apiKey: process.env.YOUTUBE_API_KEY,
        maxVideos: 50
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: '[local]--[hash:base64:5]'
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Barlow:900', 'IBM Plex Sans:600,400']
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
