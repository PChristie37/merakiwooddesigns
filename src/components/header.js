import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import Image from "../components/shoppingCartImage"
import SearchImage from "../components/searchImage"
import SearchBar from "../components/searchBar"
import useWindowSize from "../components/useWindow"
import HamburgerMenu from "../components/hamburgerMenu"

const Header = ({ siteTitle }) => {
  const [searchBarActive, toggleSBar] = useState(false)
  const wSize = useWindowSize()

  return(
  <header
    style={{
      background: `#F4EBDE`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: (wSize.width * .8),
        maxHeight: (wSize.height * .1),
        padding: `1.45rem 1.0875rem`,
        display:'flex',
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
      }}
    >
    
    {wSize.width > 400 ? 
      <div style={{flex:1, display:'flex', justifyContent:'flex-start', flexDirection:'row'}}>
      <p style={{ margin:0, flex:.3 }}>
        <Link
          to="/"
          activeStyle={{fontWeight: `bold`}}
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize:16,
            fontFamily:`'Montserrat', sans-serif, light`,
            // boxShadow: `inset 0 -4px 0 black, inset 0 -4.5px 0 #F4EBDE`
          }}
        >
          HOME
        </Link>
      </p>

      <p style={{ margin: 0, flex:1 }}>
        <Link
          to="/shop"
          activeStyle={{fontWeight: `bold`}}
          style={{
            color: `black`,
            textDecoration: `none`,
            fontFamily:`'Montserrat', sans-serif`

          }}
        >
          SHOP
        </Link>
      </p> </div> : <HamburgerMenu />
    }


      {/* <div style={{flex:1, display:'flex', justifyContent:'center', flexDirection:'row'}}>
        {siteTitle}
      </div> */}

      <div style={{flex:1, display:'flex', justifyContent:'flex-end', flexDirection:'row'}}>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'row', marginRight:'15px'}} >
          <div>
            {searchBarActive ? <SearchBar onChange={()=>console.log('word')} /> : <></>}
          </div>
          <div onClick={()=>toggleSBar(!searchBarActive)}>
            {searchBarActive ? <SearchImage /> : <SearchImage  />}
          </div>
        </div>
        <div style={{ }}>
          <Image />
        </div>
      </div>

    </div>
  </header>
)
        }
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header