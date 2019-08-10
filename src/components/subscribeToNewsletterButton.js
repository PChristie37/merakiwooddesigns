import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from "gatsby"
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
      backgroundColor:`#F4EBDE`,
      '&:hover': {
        backgroundColor: `#80645b`,
      },
      // color:'green',
      size:'small',
      disableFocusRipple:true
    }
  }));

export default function SubscribeToNewsletterButton() {
    const classes = useStyles();
    return (
        <Fab onClick={()=>navigate("/newsletter")} variant="extended" aria-label="Subscribe To Newsletter" className={classes.fab}>
          Subscribe To Newsletter
        </Fab>
    );
  }
