import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPost from "../templates/news-post"
import { StaticQuery, graphql } from "gatsby"
// import { node } from "prop-types"


// const NewsList = (props) => {

export default ({ data }) => {
    const posts = props.data.allMarkdownRemark.edges
    // const { currentPage } = props.pageContext

    return(
      <StaticQuery
        query={graphql`
        query($skip: Int!, $limit: Int!) {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                skip: $skip
                limit: $limit
              ) {
                totalCount
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      date(formatString: "DD MMMM YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 100)
                  }
                }
              }
          }
      `}

        render={data => (
          <Layout>
              <SEO title="NP" />
              {posts.map(({ node }) => (
                  <NewsPost
                      key={node.id}
                      slug={node.fields.slug}
                      title={node.frontmatter.title}
                      date={node.frontmatter.date}
                      body={node.excerpt}
                  />
              ))}
          </Layout>
        )}
/>
    );

              }



// export default NewsList
