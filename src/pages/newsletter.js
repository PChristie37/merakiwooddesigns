import React, {useState} from 'react';
// import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      marginBottom:'15px'
    },
});

  
function Newsletter() {
    return (
        <Layout>
            <SEO title="Home" />
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <button type="submit">Subscribe To Newsletter</button>
                </p>
            </form>
        </Layout>

    
  );
}

export default Newsletter;

// NewsForm.propTypes = {
// }

// NewsForm.defaultProps = {
// }