import ConstructionIcon from '@mui/icons-material/Construction';
import React from 'react';

export const SomethingWentWrong = () => {
    return <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
                <ConstructionIcon />
            </div>
            <div>
                Something Went Wrong!!
            </div>
        </div>
    </div>
}