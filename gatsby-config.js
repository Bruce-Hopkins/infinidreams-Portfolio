module.exports = {
  siteMetadata: {
    title: `Infinidreams`,
    description: `I'm Bruce Hopkins Jr, and I'm a web developer. See my portfolio.`,
    author: `@Infinidreams`,
    siteUrl: `http://www.infinidream.net/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Infinidreams`,
        short_name: `Infinidreams`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `006D77`,
        display: `minimal-ui`,
        icon: 'src/images/icon.png'

      },

    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ],

  pathPrefix: "/",
  
}