import React, {useState} from 'react';
// import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      marginBottom:'15px'
    },
  });

  
function NewsForm() {
    const [formActive, setFormActive] = useState(false)
    return (
        <div>
            <Button size="small" onClick={()=>setFormActive(!formActive)}>
                {!formActive ? `Subscribe for News` : `Close form`}
            </Button>
            {!formActive ? null : 
                <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>   
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Your Role: <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                        </select></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            }
        </div>
  );
}

export default NewsForm;

// NewsForm.propTypes = {
// }

// NewsForm.defaultProps = {
// }