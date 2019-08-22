import React, {useState} from 'react';
// import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      marginBottom:'15px'
    },
});

  
function Groomsman() {
    return (
        <Layout>
            <img src={require("../images/groomsmen-dance-2.gif")} />
            <h1>OH WE ARE GOING TO PARTY!!!!</h1>
            <h3>break out those smores!</h3>
        </Layout>

    
  );
}

export default Groomsman;

// NewsForm.propTypes = {
// }

// NewsForm.defaultProps = {
// }