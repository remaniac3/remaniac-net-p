import React from "react"
// import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogPostList from "../layouts/blog-list"

const NewsPage = () => (
    <Layout>
        <SEO title="News" />

        <BlogPostList />
    </Layout>
)

export default NewsPage