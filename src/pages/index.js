import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "80px",
        }}
      >
        <Image
          fluid={data.file.childImageSharp.fluid}
          style={{ width: "50%", height: "50%", position: "relative" }}
        />
        <h1
          className="swing"
          style={{ paddingTop: "300px", position: "absolute" }}
        >
          ...coming sew soon
        </h1>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    file(relativePath: { eq: "fox-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
