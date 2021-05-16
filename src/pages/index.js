import * as React from "react"

import Typical from "react-typical"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="hero">
      <h2>We are</h2>
      <Typical
        steps={[
          "The Nottingham University Developers' Community", 1000,
          "A community for creators", 1000,
          "A community for creators, for hackers", 1000,
          "A community for creators, for hackers and for everyone", 2000,
        ]}
        loop={Infinity}
        wrapper="h1"
      />
    </div>
  </Layout>
)

export default IndexPage
