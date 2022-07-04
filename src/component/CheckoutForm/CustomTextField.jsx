import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form/dist/useFormContext';

const CustomTextField = () => {
    const { control } = useFormContext();
    
    return (
        <Grid item xs={12} sm={6}>
            <Controller as={TextField} control={control} />
        </Grid>
    )
}

export default CustomTextField
