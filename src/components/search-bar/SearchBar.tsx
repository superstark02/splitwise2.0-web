import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const SearchBar = () => {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField fullWidth id="filled-basic" label="Search connections" variant="outlined" />
        </Box>
    );
}
