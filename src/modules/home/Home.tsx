import AddCircleIcon from '@mui/icons-material/AddCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';
import { FriendsMain } from '../friends/FriendsMain.tsx';
import { NewMain } from '../new/NewMain.tsx';
import { AppBarMain } from '../../components/app-bar/AppBarMain.tsx';

export const Home = () => {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);

    const component = [<FriendsMain />, <NewMain />]
    return <Box sx={{ pb: 7 }} ref={ref}>
        <AppBarMain />
        {component[value]}
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Friends" icon={<PersonIcon />} />
                <BottomNavigationAction label="New" icon={<AddCircleIcon />} />
                <BottomNavigationAction label="Account" icon={<ManageAccountsIcon />} />
            </BottomNavigation>
        </Paper>
    </Box>
}