import React from "react"

const StyledDivider = ({split}) => {
    const styles = {
        fullLength:{
            // overflow: "visible", /* For IE */
            borderTop: "1px solid",
            border: "none",
            backgroundColor:"#000000",
            color: "#000000",
        },
        splitTime:{
            borderTop: "1px solid",
            border: "none",
            backgroundColor:"#000000",
            color: "#000000",
            // width:"40%",
            flex:2,
            margin:"15px"
        }
    }
    return(
        <hr style={split ? styles.splitTime : styles.fullLength}/>
    )
}

export default StyledDivider