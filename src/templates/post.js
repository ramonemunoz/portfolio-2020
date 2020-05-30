import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <div className="container">
      <Seo />
      <div className="fixed-container">
        <div className="about">
          <h1>{post.frontmatter.title}</h1>
          <p
            className="project-description"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="about-link">
            <h2>
              <Link to="/">HOME</Link>
            </h2>
            <h2>
              <Link to="/about/">ABOUT</Link>
            </h2>
            <h2>
              <Link to="/contact/">CONTACT</Link>
            </h2>
            <h2>
              <a className="show-mobile pulsate-css down-arrow" href="#top">
                &darr;
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="col-three">
          <div className="post-container">
            <Img sizes={post.frontmatter.hero.childImageSharp.sizes} />
          </div>
        </div>
        <div className="col-two">
          <div className="post-container">
            <Img sizes={post.frontmatter.bodyone.childImageSharp.sizes} />
          </div>
        </div>
        <div className="col-two">
          <div className="post-container">
            <Img sizes={post.frontmatter.bodytwo.childImageSharp.sizes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
        hero {
          childImageSharp {
            sizes(maxWidth: 800) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        bodyone {
          childImageSharp {
            sizes(maxWidth: 800) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        bodytwo {
          childImageSharp {
            sizes(maxWidth: 800) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        postid
      }
    }
  }
`
