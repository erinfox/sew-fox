import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "200px",
      }}
    >
      <h1>Sew Fox is coming sew soon 🧵</h1>
      {/* <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </div>
  </Layout>
)

export default IndexPage
