import React, {useState} from 'react';
// import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import SEO from "../components/seo"


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      marginBottom:'15px'
    },
});

  
function Questionaire() {
    const [groomsmanQuestion, setGroomsman] = useState(true)
    const [checkedGroomsman, setCheckedGroomsman] = useState(false)
    const [complete, setComplete] = useState(undefined)

    return (
        <Layout>
            {console.log(checkedGroomsman   )}
            <SEO title="Home" />
            {groomsmanQuestion ?
            <div>
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email"  name="email" /></label>
                </p>
                <p>
                    <button onClick={()=>setGroomsman(false)}>Subscribe To Get Updates!</button>
                </p>
            </div>
            :
            <form name="groomsman" method="POST" data-netlify="true" action="/groomsman">
                <input type="hidden" value="groomsman" />
                <p>
                    Will you suit up with me (Peter) and be my Groomsman?
                </p>
                <p>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div>
                        <input type="radio" name="site_name" 
                            value={checkedGroomsman} 
                            checked={checkedGroomsman} 
                            onChange={()=>setCheckedGroomsman(!checkedGroomsman)} /> YES!  
                        </div>
                        <div>
                        <input type="radio" name="site_name" 
                            value={checkedGroomsman} 
                            checked={checkedGroomsman} 
                            onChange={()=>setCheckedGroomsman(!checkedGroomsman)} /> YES!   
                        </div>
                        <div>
                        <input type="radio" name="site_name" 
                            value={checkedGroomsman} 
                            checked={checkedGroomsman} 
                            onChange={()=>setCheckedGroomsman(!checkedGroomsman)} /> YES!   
                        </div>
                        <div>
                        <input type="radio" name="site_name"
                            disabled={true} 
                            value={checkedGroomsman} 
                            // checked={checkedGroomsman}   
                            onChange={()=>setCheckedGroomsman(!checkedGroomsman)} /> NO!   
                        </div>
                    </div>
                </p>
                <p>
                    <button disabled={!checkedGroomsman} onClick={()=>setComplete("augustAnswered")} type="submit">Complete to become a Groomsman!</button>
                </p>
            </form>
            }
        {complete === "augustAnswered" ? <h1>YAY! I AM SO HAPPY!</h1> : null}
        </Layout>

    
  );
}

export default Questionaire;

// NewsForm.propTypes = {
// }

// NewsForm.defaultProps = {
// }