import * as React from "react"

import Typewriter from "typewriter-effect"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="hero">
      <h2>We are</h2>
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .changeDelay(50)
            .typeString("The Nottingham University Developers' Community.")
            .pauseFor(3000)
            .deleteAll()
            .typeString("A community for hackers")
            .pauseFor(1000)
            .typeString(", for creators")
            .pauseFor(1000)
            .typeString(" and for everyone.")
            .pauseFor(3000)
            .deleteAll()
            .start()
          }}
          options={{
            loop: true,
          }}
        />
      </h1>
    </div>
  </Layout>
)

export default IndexPage
