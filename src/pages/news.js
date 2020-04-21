import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPage = () => (
    <Layout>
        <SEO title="News" />
        <h1>News</h1>



    </Layout>
)
    
// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM YYYY")
//           }
//           fields {
//               slug
//           }
//           excerpt(pruneLength: 100)
//         }
//       }
//     }
//   }
// `

export default NewsPage

// {data.allMarkdownRemark.edges.map(({ node }) => (
//   <div key={node.id}>
//     <Link
//         to={node.fields.slug}
//     >
//         <h3>
//         {node.frontmatter.title}{" "}
//         <span style={{fontSize: "0.75rem"}}>
//             — {node.frontmatter.date}
//         </span>
//         </h3>
//         <p>{node.excerpt}</p>
//     </Link>
//   </div>
// ))}