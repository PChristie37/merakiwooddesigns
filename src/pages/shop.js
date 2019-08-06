import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/styledDivider"
import Product from "../components/product"
import {StaticQuery, graphql } from "gatsby"

const Shop = () => (
  <Layout>
    <SEO title="shop" />
    <div style={{display:'flex', flex:1, flexDirection:'row'}}>
      <Divider split={true} />
        <h2>Products</h2>
      <Divider split={true} />
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
                sku {
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
            "sku":p.node.data.sku.text,
            "name":p.node.data.display_name.text,
            "price": p.node.data.price.text,
            "description": p.node.data.description.text,
            "imgSrc": p.node.data.image.url
          }
          return(<Product key={p.node.id} productDetails={pDetails} />)
        })}
        </div>
      )}
    />
  </Layout>
)

export default Shop
