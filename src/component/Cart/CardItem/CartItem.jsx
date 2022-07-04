import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyle from './styles';

const CartItem = ({ item }) => {
    const classes = useStyle();
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}> 

            </CardContent>
        </Card>
    )
}

export default CartItem
