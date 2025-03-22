import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { currentUser } from "../../constants/index.ts";

export const FriendsMain = () => {
    return <List>
        {currentUser.connections.map(({ name, spent, debt }, index) => (
            <ListItemButton key={index + name}>
                <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={""} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={`Owes: ${spent}`} />
            </ListItemButton>
        ))}
    </List>
}