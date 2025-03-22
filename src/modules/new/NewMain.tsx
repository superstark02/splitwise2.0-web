import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { currentUser } from '../../constants/index.ts';
import { Button } from '@mui/material';

export const NewMain = () => {
    const [checked, setChecked] = React.useState<String[]>([]);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {currentUser.connections.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={labelId}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value.id)}
                                    checked={checked.includes(value.id)}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value.name + 1}`}
                                        src={`/static/images/avatar/${value.name + 1}.jpg`}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={value.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <div style={{ padding: "10px" }} >
                <Button style={{ width: "100%" }} variant="contained" >
                    Add Expense
                </Button>
            </div>
        </div>
    );
}
