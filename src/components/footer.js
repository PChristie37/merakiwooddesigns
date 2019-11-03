import React from "react"
import InstagramLogo from "../components/instagramLogo"
import EtsyLogo from "../components/etsylogo"
import useWindowSize from "../components/useWindow"
const Footer = () => {
    const wSize = useWindowSize()
    const styles = {
        largeFooter:{
            margin: `0 auto`,
            maxWidth: wSize.width !== undefined ? (wSize.width * .8) : "80%",
            maxHeight:'30px',
            display:'flex',
            flex:1,
            flexDirection:'row',
            justifyContent:'flex-start',
        },
        smallFooter:{
            display:'flex',
            flex:1,
            flexDirection:'column',
            justifyContent:'flex-start'
        },
        fItemSmallEnd:{

        },
        fItemLargeEnd:{
            flex:1, 
            display:'flex', 
            paddingTop:15, 
            justifyContent:'flex-end', 
            flexDirection:'row'
        },
        fItemSmallStart:{
            flex:1, 
            display:'flex',
            justifyContent:'center',
        },
        fItemLargeStart:{
            flex:1,
            display:'flex',
            paddingTop:15,
            justifyContent:'flex-start',
            flexDirection:'row'
        }

    }
    return(
        <footer
            style={{
                marginTop:'auto',
                background: `#F4EBDE`,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
            }}
        >
              
            <div style={wSize.width > 600 || wSize.width == undefined ? styles.largeFooter : styles.smallFooter}>
                <div style={wSize.width > 600 || wSize.width == undefined ? styles.fItemLargeStart : styles.fItemSmallStart}>
                    <p style={{fontSize:`12px`}}>Copyright © 2019 Meraki Wood Designs - All Rights Reserved.</p>
                </div>
                <div style={wSize.width > 600 || wSize.width == undefined ? styles.fItemLargeEnd : styles.fItemSmallStart}>
                    <a style={{marginRight:3}} href="https://www.etsy.com/shop/MerakiWoodDesigns" target="_blank">
                        <EtsyLogo />
                    </a> 
                    <a href="https://www.instagram.com/merakiwooddesigns/" target="_blank">
                        <InstagramLogo />
                    </a> 
                </div>
            </div>
    
        </footer>
    )
}

export default Footer