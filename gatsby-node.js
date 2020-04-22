const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the post slugs.
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        const [year] = new Date(node.frontmatter.date)
            .toLocaleDateString("en-GB", {
                year: "numeric",
            })
            .split("/")
        const slug = value.replace("/blog/", "").replace(/\/$/, "")
        const url = `/blog/${year}${slug}`

        createNodeField({
            name: `slug`,
            node,
            value: url,
        })
    }
}

const path = require(`path`)

// 1. This is called once the data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {

  /* === PAGINAITON === */

  const blogListLayout = path.resolve(`./src/layouts/blog-list.js`)
  const postsPerPage = 9
  const postsWithoutFeatured = posts.filter(({ node }) => {
    return !node.frontmatter.featured
  })
  const numPages = Math.ceil(postsWithoutFeatured.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: blogListLayout,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
      },
    })
  })

  /* === INDIVIDUAL === */

  // 1.1 Getting the method to create pages
  const { createPage } = actions
  // 1.2 Tell which layout Gatsby should use to thse pages
  const blogLayout = path.resolve(`./src/layouts/blog-post.js`)

  // 2 Return the method with the query
  return graphql(`
    query blogPosts {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
            html
          }
        }
      }
    }
  `).then(result => {
    // 2.1 Handle the errors
    if (result.errors) {
      console.error(result.errors)
      reject(result.errors)
    }

    // 2.2 Our posts are here
    const posts = result.data.allMarkdownRemark.edges

    // 3 Loop throught all posts
    posts.forEach((post, index) => {
      // 3.1 Finally create posts
      createPage({
        path: post.node.fields.slug,
        component: blogLayout,
        context: {
          slug: post.node.fields.slug,
        },
      })
    })
  })
}