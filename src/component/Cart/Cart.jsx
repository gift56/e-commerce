import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const Cart = () => {
    const isEmpty = true;
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3'>
                Your Shopping Cart
            </Typography>
        </Container>
    )
}

export default Cart
