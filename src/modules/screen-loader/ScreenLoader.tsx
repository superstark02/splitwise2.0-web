import { CircularProgress } from '@mui/material';
import React from 'react';

export const ScreenLoader = () => {
    return <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
    </div>
}