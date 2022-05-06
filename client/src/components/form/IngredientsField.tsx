import React from 'react';
import TextField from '@mui/material/TextField';

const IngredientsField = (props) => {
    return (
        <TextField
            fullWidth
            multiline
            placeholder="enter ingredients, separated by a new line"
            id="ingredients"
            name="ingredients"
            label="ingredients"
            value={props.value}
            onChange={props.handleChange}
            error={props.error}
            helperText={props.helperText}
        />
    );
};

export default IngredientsField;
