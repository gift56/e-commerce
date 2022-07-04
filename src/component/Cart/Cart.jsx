import React from 'react';
import { Container, Button, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

const Cart = ({ cart }) => {
    const isEmpty = false;
    const classes = useStyles();

    console.log(cart)

    const EmptyCart = (() => {
        return <Typography variant='subtitle1'>Your have no items in your shopping cart, start adding some!</Typography>
    })

    const FilledCart = () => {
        return (
            <>
                <Grid spacing={3}>
                    {/* {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <div>{item.name}</div>
                        </Grid>
                    ))} */}
                    hello
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h3'>SubTotal: $50</Typography>
                    <div>
                        <Button type='button' className={classes.emptyButton} size='large' variant='contained' color='secondary'>Empty Cart</Button>
                        <Button type='button' className={classes.checkoutButton} size='large' variant='contained' color='primary'>Checkout</Button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart

