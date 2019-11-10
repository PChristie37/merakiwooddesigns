import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  headersBold:{
    fontWeight: 'bold',
    color: 'black'
  },
  sizesBold:{
    fontWeight: 'bold',
    color: 'black'
  },
  details:{
      marginTop: 5,
  }
}));

export default function ProductDetailsDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
    props.closeDialog()
  };

  const handleEtsyLink = () => {

  }
  
  const handleMaxWidthChange = event => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = event => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle className={classes.headersBold} id="max-width-dialog-title">{props.productDetails.name}</DialogTitle>
        <DialogContent>
            {props.productDetails.height !== null ?
                <DialogContentText>
                    <h4 className={classes.headersBold}>Dimensions</h4>
                    <p>Height: {props.productDetails.height}; Width: {props.productDetails.width}; {props.productDetails.depth !== null && props.productDetails.depth.length ? `Depth: ${props.productDetails.depth};` : null }</p>
                </DialogContentText>
            : null }
            
            {props.productDetails.materials !== null ? 
                <DialogContentText>
                    <h4 className={classes.headersBold}>Materials</h4>
                    <p>{props.productDetails.materials}</p>
                </DialogContentText>
            :   null}

            {props.productDetails.long_description !== null ? 
                <DialogContentText>
                    <h4 className={classes.headersBold}>Details</h4>
                    <p>{props.productDetails.long_description}</p>
                </DialogContentText>
            :   null}
        </DialogContent>
        <DialogActions>
          <Button target="_blank" href={props.productDetails.etsyLink} color="primary">
            See more on Etsy
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}