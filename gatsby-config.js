module.exports = {
  siteMetadata: {
    title: 'Polling App2',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/poll/*`] },
    }
  ]
}
