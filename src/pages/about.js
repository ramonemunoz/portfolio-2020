import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Marquee from "../components/marquee"
import Seo from "../components/seo"
import ScrollableAnchor from "react-scrollable-anchor"
import { configureAnchors } from "react-scrollable-anchor"

// scroll more quickly than the default 400ms
configureAnchors({ scrollDuration: 1000 })

const AboutPage = ({ data }) => (
  <div className="container">
    <Seo />
    <div className="fixed-container">
      <div className="about">
        <h1>Ramon Munoz</h1>
        <div className="profile-pic">
          <Img fluid={data.profileImg.childImageSharp.fluid} alt="alt text" />
        </div>
        <div className="about-link">
          <h2>
            <Link to="/">HOME</Link>
          </h2>
          <h2>
            <Link to="/contact/#contact">CONTACT</Link>
          </h2>
        </div>
        <Marquee />
      </div>
    </div>
    <div className="content">
      <div className="col-one">
        <ScrollableAnchor id={"about"}>
          <div className="about-container">
            <h1>Hi, I’m Ramon</h1>
            <p>
              I'm a seasoned front-end developer with many years of real-world
              design and web development experience.
            </p>
            <p>
              The excitement of seeing my work come to life, online or on a
              circuit board, is what first sparked my interest in development
              and design. These days, I transform ideas into realities. That
              challenge means I’m always learning and expanding my toolset in
              preparation for my next opportunity.
            </p>
          </div>
        </ScrollableAnchor>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query {
    profileImg: file(relativePath: { eq: "RAMON_MUNOZ_NEW.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
