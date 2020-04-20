
// Create page slugs(path).
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node,getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: `news` + slug
        })
    }
  }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const templates = {
        newsPlayground: path.resolve("src/pages/news-playground.js"),
    }

    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                    }
                  }
                }
            }
        }
    `)
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/news-post.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })

}