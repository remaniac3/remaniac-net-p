import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <SEO title={post.frontmatter.title} />
            <Layout>
                <div>
                    <h1>{post.frontmatter.title}</h1>
                    <h4>{post.frontmatter.date}</h4>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>

            <Link to="/news">← Go Back</Link>
            </Layout>
        </div>
    )
  }

export const query = graphql`
  query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
          html
          frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
          }
      }
  }
`