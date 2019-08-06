import React from 'react';
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      marginBottom:'15px'
    },
    media: {
      minHeight: 350,
      maxHeight: 400,
    },
    cardActions:{
        backgroundColor:`#F4EBDE`
    }
  });

  
function Product(props) {
    const p = props.productDetails
    const imgUrl = props.imgUrl
    const classes = useStyles();
    function register(){
        alert("You registered for " + p.sku)
    }
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={p.imgSrc}
                    title={p.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {p.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {p.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" onClick={register}>
                    Add To Cart
                </Button>
                <Button size="small">
                    Learn More
                </Button>
            </CardActions>
        </Card>
  );
}

export default Product;

Product.propTypes = {
    productDetails: PropTypes.object
}

Product.defaultProps = {
    productDetails:{
        "sku":"woodBoard",
        "name":"Wedding Chalk Board",
        "price": "29.99",
        "description": "Blah Blah Blah Blah Blah Blah Blah"
    }
}