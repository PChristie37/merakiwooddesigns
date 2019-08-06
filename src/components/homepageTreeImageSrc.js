import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Image = () => {
  return useStaticQuery(graphql`
        query {
            homepageTree: file(relativePath: { eq: "homepage_tree.JPG" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    }
            }
            }
        }`)
}

export default Image
