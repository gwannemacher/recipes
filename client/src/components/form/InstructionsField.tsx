import React from 'react';
import TextField from '@mui/material/TextField';

const InstructionsField = (props) => {
    return (
        <TextField
            fullWidth
            multiline
            placeholder="enter instructions, separated by a new line"
            id="instructions"
            name="instructions"
            label="instructions"
            value={props.value}
            onChange={props.handleChange}
            error={props.error}
            helperText={props.helperText}
        />
    );
};

export default InstructionsField;
