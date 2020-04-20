import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPost from "../templates/news-post"
import { graphql } from "gatsby"


const NewsList = () => (
    <Layout>
        <SEO title="NP" />
        <h1>NP</h1>
    </Layout>
)

export const newsListQuery = graphql`
    query
`

export default NewsList