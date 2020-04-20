
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
            value: `news` + slug,
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

    // const posts = result.data.allMarkdownRemark.edges
    // const postsPerPage = 4
    // const numPages = Math.ceil(posts.length / postsPerPage)
    // Array.from({ length: numPages }).forEach((_, i) => {
    //     createPage({
    //         path: i === 0 ? `/news` : `/news/${i + 1}`,
    //         component: path.resolve("./src/templates/news-list-template.js"),
    //         context: {
    //             limit: postsPerPage,
    //             skip: i * postsPerPage,
    //             numPages,
    //             currentPage: i + 1,
    //         },
    //     })
    // })

    const postsPerPage = 4
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, i) => {
        const isFirstPage = i === 0
        const currentPage = i + 1

        if(isFirstPage) return

        createPage({
            path: `/news/${currentPage}`,
            component: templates.newsPlayground,
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                currentPage
            }
        })
    })

}