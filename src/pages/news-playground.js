import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPost from "../templates/news-post"
import { graphql } from "gatsby"
import { node } from "prop-types"


const NewsList = (props) => {
    const posts = props.data.allMarkdownRemark.edges
    const { currentPage } = props.pageContext

    return(
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
    )
}

// graphql = {aaaaaaaaaaaaa why isnt it working}

export const newsListQuery = graphql`
    query newsListQuery($skip: Int!, $limit: Int!) {
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
`

export default NewsList