import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const { markdownRemark } = data
  const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src

  return (
    <div>
      <img src={imageSource} alt={markdownRemark.frontmatter.title} />
      <h1>{markdownRemark.frontmatter.title}</h1>
      <p>{markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`