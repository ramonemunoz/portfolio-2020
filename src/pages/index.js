import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Marquee from "../components/marquee"
import Seo from "../components/seo"
import scrollTo from "gatsby-plugin-smoothscroll"
import "../styles/index.scss"

const IndexPage = ({ data }) => (
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
            <Link to="/about/#about">ABOUT</Link>
          </h2>
          <h2>
            <Link to="/contact/#contact">CONTACT</Link>
          </h2>
          <h2 className="show-mobile">
            <button onClick={() => scrollTo("#work")}>WORK</button>
          </h2>
        </div>
        <Marquee />
      </div>
    </div>
    <div id="work" className="content">
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.frontmatter.postid} className="col-two">
          <Link to={post.node.frontmatter.path}>
            <Img sizes={post.node.frontmatter.imgmain.childImageSharp.sizes} />
          </Link>
        </div>
      ))}
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
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___postid] }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            imgmain {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            published
            postid
          }
        }
      }
    }
  }
`

export default IndexPage
