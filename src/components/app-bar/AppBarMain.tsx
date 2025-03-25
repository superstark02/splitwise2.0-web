import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContex } from "../../context/Context.tsx";

export const AppBarMain = (props: {
  title?: string;
  icon?: any;
  onIconClick?: Function;
}) => {
  const { title, icon, onIconClick = () => {} } = props;
  const { user } = React.useContext(AppContex);
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "48px" }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => onIconClick()}
          >
            {icon ?? <></>}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title ?? "Hi, " + user?.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
