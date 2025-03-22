import ArchiveIcon from '@mui/icons-material/Archive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { AppBarMain } from './components/app-bar/AppBarMain.tsx';
import { FriendsMain } from './modules/friends/FriendsMain.tsx';
import { NewMain } from './modules/new/NewMain.tsx';

// get user data
// get friends list and spent and debt list

export default function App() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const component = [<FriendsMain />, <NewMain />]

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
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
          <BottomNavigationAction label="Friends" icon={<RestoreIcon />} />
          <BottomNavigationAction label="New" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Account" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
