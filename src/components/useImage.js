import {useState, useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby"

export default function useImage(imageName) {
    // const isClient = typeof window === 'object';
  
    function getSrc() {
        let imgQuery = useStaticQuery(graphql`
        query {
            imgSrcQuery: file(relativePath: { eq: "homepage_tree.JPG" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    aspectRatio
                    src
                    sizes
                    }
            }
            }
        }`)


      return imgQuery.imgSrcQuery.childImageSharp.fluid
    }
  
    const [imgSrc, setImgSrc] = useState(getSrc);
  
    return imgSrc;
}