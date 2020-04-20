import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <p>I like trains.</p>
        <p><Link to="/">Back</Link></p>
    </Layout>
)

export default AboutPage