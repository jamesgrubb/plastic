/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`, // this entry has to be the first or will not work as per FAQ
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
  ],
}
