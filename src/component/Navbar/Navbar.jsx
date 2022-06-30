import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons'

const Navbar = () => {
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src="" alt="commercesLogo" height="25px" className={classes.image} />
                        Commerce-World
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
