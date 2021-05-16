import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import "./404.scss"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not found" />
    <div className="hero-404">
      <h1>Not Found</h1>
      <p>This page does not exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage
