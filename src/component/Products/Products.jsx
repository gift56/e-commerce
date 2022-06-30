import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    {
        id: 1,
        name: "Shoes",
        description: "Running shoes.",
        price: "$5",
        image: 'https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2018/08/lifestyle-and-performance-sneakers-gear-patrol-full-lead.jpg?crop=0.6701030927835051xw:1xh;center,top&resize=980:*'
    },
    {
        id: 2,
        name: "Macbook",
        description: "Apple macbook.",
        price: "$10",
        image: 'https://hnsfpau.imgix.net/5/images/detailed/152/MacBook.Pro.M1.SG.1.jpg?fit=fill&bg=0FFF&w=785&h=441&auto=format,compress'
    },
];


const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                )))}
            </Grid>
        </main>
    )
}

export default Products
