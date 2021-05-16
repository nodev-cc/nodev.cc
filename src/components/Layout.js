import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./Layout.scss"

import icon from "../images/icon.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <header>
        <Link to="/">
          <img src={icon} alt="icon"/>
          <span>{siteTitle}</span>
        </Link>
        <menu>
          <button>
            <span/>
            <span/>
            <span/>
          </button>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            |
            <li><Link to="/hacknotts-cn">HackNotts@CN</Link></li>
          </ul>
        </menu>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          &copy; &nbsp;
          {new Date().getFullYear()}
          &nbsp;
          <Link to="/">{siteTitle}</Link>
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nottingham.ac.uk"
          >
            University of Nottingham
          </a>
          &nbsp;|&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nottingham.edu.cn"
          >
            China Campus
          </a>
        </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
