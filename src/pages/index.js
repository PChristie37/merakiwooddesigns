import React from "react"
import Layout from "../components/layout"
import HomepageTreeImage from "../components/homepageTreeImage"
import SEO from "../components/seo"
import Divider from "../components/styledDivider"
// import Gallery from 'react-photo-gallery';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
        <h1 align="center">Meraki Wood Designs</h1>
        <p align="center">PROFESSIONALISM, ARTISTRY, CRAFT</p>
        <div style={{flex:2, display:'flex', flexDirection:'row', justifyContent:"center" }}>
          <HomepageTreeImage />
        </div>
        <p align="center">WELCOME</p>
        <h4 align="center">
          Thanks for stopping by! We are very excited to share what we are working on.
          <br/> Meraki Wood Designs will be selling on Etsy soon! 
          <br/> Please Stay Tuned! 
        </h4>
        <div style={{display:'flex', flex:1, flexDirection:'row'}}>
          <Divider split={true} />
            <h2>Featured Products</h2>
          <Divider split={true} />
        </div>
        <div>
          <p align="center">New products are coming soon!</p>
        </div>

        <div style={{display:'flex', flex:1, flexDirection:'row'}}>
          <Divider split={true} />
            <h2>Photo Gallery</h2>
          <Divider split={true} />
        </div>

        <div style={{display:'flex', flex:1, flexDirection:'row'}}>
          <Divider split={true} />
            <h2>Project Gallery</h2>
          <Divider split={true} />
        </div>

        {/* <Gallery photos={photos} /> */}

      </div>
    </Layout>
  )
}
export default IndexPage
