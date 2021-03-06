import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form'

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name={name}
                required={required}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextField {...field} fullWidth label={label} required={required} />}
            />
        </Grid>
    )
}

export default FormInput
