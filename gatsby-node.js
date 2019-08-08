const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    {
      gigs: allAirtable(filter: {table: {eq: "Gigs"}, data: {State: {eq: "fixed"}}}) {
        edges {
          node {
            data {
              slug: Slug
            }
          }
        }
      }
    }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const gigTemplate = path.resolve(`src/templates/gig.jsx`)
  result.data.gigs.edges.forEach(({ node }) => {
    const path = node.data.slug
    createPage({
      path,
      component: gigTemplate,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        slug: path,
      },
    })
  })
}