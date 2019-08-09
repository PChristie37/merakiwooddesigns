import React from "react"
import { Link } from "gatsby"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HamburgerIcon from "../components/hamburgerIcon"

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <HamburgerIcon />
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
            <Link
            to="/"
            activeStyle={{fontWeight: `bold`}}
            style={{
                color: `black`,
                textDecoration: `none`,
                fontSize:16
            }}
            >
            HOME
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link
            to="/shop"
            activeStyle={{fontWeight: `bold`}}
            style={{
                color: `black`,
                textDecoration: `none`,
            }}
            >
            SHOP
            </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
