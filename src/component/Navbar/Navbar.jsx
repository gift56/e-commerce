import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commercelogo.jpg';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="commercesLogo" height="25px" className={classes.image} />
                        Commerce-World
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton  aria-label='Show cart items' color='inherit'>
                                <Link to='/cart' style={{color:'inherit'}}>
                                    <Badge badgeContent={totalItems} color='secondary'>
                                        <ShoppingCart />
                                    </Badge>
                                </Link>
                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
