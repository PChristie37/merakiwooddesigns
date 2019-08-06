import React from "react"
import PropTypes from "prop-types"

const SearchBar = (props) => {
    
    return (
        <input
            type="text"
            {...props}
        />
    )
}

export default SearchBar

SearchBar.propTypes = {
    placeholder: PropTypes.string,
}

SearchBar.defaultProps = {
    placeholder: `Search`,
}