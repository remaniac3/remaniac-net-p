import React from 'react'
import { graphql, Link } from 'gatsby'

const BlogPostList = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data

  return (
    <div>
      {allMarkdownRemark.edges.map(({ node }) => {
        const imageSource = node.frontmatter.image.childImageSharp.fluid.src

        return (
          <div>
            <Link to={node.fields.slug}>
              <img src={imageSource} alt={node.frontmatter.title} />
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <p>{node.frontmatter.date}</p>
          </div>
        )
      })}

      <ul>
        {Array.from({ length: pageContext.numPages }).map((item, i) => {
          const index = i + 1
          const link = index === 1 ? '/blog' : `/blog/page/${index}`

          return (
            <li>
              {pageContext.currentPage === index ? (
                <span>{index}</span>
              ) : (
                <a href={link}>{index}</a>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BlogPostList

export const query = graphql`
  query blogPostsList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
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
    }
  }
`