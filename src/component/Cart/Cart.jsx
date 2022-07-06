import React from 'react';
import { Container, Button, Typography, Grid, CssBaseline } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CardItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>Your have no items in your shopping cart, <Link to='/' className={classes.link}>start adding some</Link>!</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h3' className={classes.title}>SubTotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button type='button' className={classes.emptyButton} size='large' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button type='button' className={classes.checkoutButton} size='large' variant='contained' color='primary'><Link to='/checkout' style={{ textDecoration: 'none' }} className={classes.btnColor}>Checkout</Link></Button>
                </div>
            </div>
        </>
    )
    if (!cart.line_items) return 'Loading....';
    return (
        <>
            <CssBaseline />
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
        </>
    )
}

export default Cart