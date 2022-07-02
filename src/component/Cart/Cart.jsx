import React from 'react';
import App from '../../App';
// import { Container, Button, Typography, Grid } from '@material-ui/core';
// import useStyles from './styles';

const Cart = ({ Cart }) => {
    console.log(Cart)

    return <div style={{ marginTop: '50vh' }}>ade</div>
    // const classes = useStyles();
    // const isEmpty = !Cart.line_items.length;

    // console.log(Cart)

    // const EmptyCart = (() => {
    //     return <Typography variant='subtitle1'>Your have no items in your shopping cart, start adding some!</Typography>
    // })

    // const FilledCart = () => {
    //     return (
    //         <>
    //             <Grid spacing={3}>
    //                 {Cart.line_items.map((item) => (
    //                     <Grid item xs={12} sm={4} key={item.id}>
    //                         <div>{item.name}</div>
    //                     </Grid>
    //                 ))}
    //             </Grid>
    //             <div className={classes.cardDetails}>
    //                 <Typography variant='h3'>SubTotal: {Cart.subtotal.formatted_with_symbol}</Typography>
    //                 <div>
    //                     <Button type='button' className={classes.emptyButton} size='large' variant='contained' color='secondary'>Empty Cart</Button>
    //                     <Button type='button' className={classes.checkoutButton} size='large' variant='contained' color='primary'>Checkout</Button>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }

    // return (
    //     <Container>
    //         <div className={classes.toolbar} />
    //         <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
    //         {isEmpty ? <EmptyCart /> : <FilledCart />}
    //     </Container>
    // )
}

export default Cart

