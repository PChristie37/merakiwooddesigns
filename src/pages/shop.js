import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/styledDivider"
import Product from "../components/product"
import ProductDetails from "../components/productDetails"
import {StaticQuery, graphql } from "gatsby"

const Shop = () => {
  const [learnMore, setLearnMore] = useState(false)
  const [activeProduct, setAProduct] = useState(null)

  function learnMoreProduct(pDetails){
    setAProduct(pDetails)
    setLearnMore(true)
    console.log(pDetails)
  }
  
  useEffect(() => {
    if (learnMore === false) {
      setAProduct(null)
    } 
  }, [activeProduct]);

  return(
  <Layout>
    <SEO title="shop" description="Wood design craft products" />
    <div style={{display:'flex', flex:1, flexDirection:'row'}}>
      <Divider split={true} />
        <h2>Products</h2>
      <Divider split={true} />
    </div>
    <div>
    {learnMore ? 
      <ProductDetails open={learnMore} productDetails={activeProduct} closeDialog={()=>setLearnMore(false)}/>
      :
      null
    }
    </div>

    <StaticQuery
      query={graphql`
      query MyQuery {
        allPrismicFullProduct(limit: 10) {
          edges {
            node {
              id
              data {
                description {
                  text
                }
                display_name {
                  text
                }
                image {
                  url
                  alt
                }
                price {
                  text
                }
                linktoetsy {
                  text
                }
                long_description {
                  text
                }
                height {
                  text
                }
                depth {
                  text
                }
                width {
                  text
                }
                materials {
                  text
                }
              }
            }
          }
        }
      }
      `}
      render={data => (
        <div style={{display:'flex', flex: 1, flexDirection:'row', justifyContent:'space-between',flexWrap: 'wrap' }}>
        {data.allPrismicFullProduct.edges.map((p)=>{
          let pDetails = {
            "materials":p.node.data.materials.text,
            "name":p.node.data.display_name.text,
            "price": p.node.data.price.text,
            "description": p.node.data.description.text,
            "imgSrc": p.node.data.image.url,
            "etsyLink": p.node.data.linktoetsy.text,
            "long_description":p.node.data.long_description.text,
            "height":p.node.data.height.text,
            "depth":p.node.data.depth.text,
            "width":p.node.data.width.text,
          }
          return(<Product key={p.node.id} productDetails={pDetails} learnMore={() => learnMoreProduct(pDetails)} />)
        })}
        </div>
      )}
    />
  </Layout>
)}

export default Shop
