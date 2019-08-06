import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
        homepageTree: file(relativePath: { eq: "homepage_tree.JPG" }) {
        childImageSharp {
            fixed(width: 672, height: 504) {
                src
                ...GatsbyImageSharpFixed
              }
        }
      }
    }
  `)
  return <Img style={{borderStyle:'solid', borderColor:'#F4EBDE', borderWidth:'8px'}} fixed={data.homepageTree.childImageSharp.fixed} />
}

export default Image
