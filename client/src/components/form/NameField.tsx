import React from 'react';
import TextField from '@mui/material/TextField';

const NameField = (props) => {
    return (
        <TextField
            fullWidth
            id="name"
            name="name"
            label="name"
            placeholder="recipe name"
            value={props.value}
            onChange={props.handleChange}
            error={props.error}
            helperText={props.helperText}
        />
    );
};

export default NameField;
