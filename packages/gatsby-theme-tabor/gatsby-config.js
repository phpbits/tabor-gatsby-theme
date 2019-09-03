const path = require(`path`)
// Plugins
const autoprefixer = require("autoprefixer")

module.exports = ({ wordPressUrl }) => ({
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `${wordPressUrl}/graphql`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ["last 2 versions"],
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: require.resolve(`./src/utils/typography`),
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://phpbits.us12.list-manage.com/subscribe/post?u=5597485458f20da5305e44c55&amp;id=6729a2bb96', // add your MC list endpoint here; see instructions below
      }
    },
  ],
})
