import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { SearchBar } from "../../components/search-bar/SearchBar.tsx";
import { Friend } from "../../interface/Friends.ts";
import { ScreenLoader } from "../screen-loader/ScreenLoader.tsx";
import { SomethingWentWrong } from "../work-in-progress/SomethingWentWrong.tsx";
import { AddDetails } from "./AddDetails.tsx";
import { getConnections } from "./ApiClient.ts";
import { Link } from "react-router-dom";
import { ADD_EXPENSE_PAGE } from "../../routes/Routes.ts";
import { AppContex } from "../../context/Context.tsx";

export const NewMain = () => {
  const { checked, setChecked, setConnections } = React.useContext(AppContex);
  const [openBs, setOpenBs] = React.useState<boolean>(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["connections"],
    queryFn: () => getConnections(),
  });

  React.useEffect(() => {
    setConnections(data?.data);
  }, [data?.data, setConnections]);

  React.useEffect(() => {
    setChecked([]);
  }, []);

  if (isLoading) {
    return <ScreenLoader />;
  }

  if (error) {
    return <SomethingWentWrong />;
  }

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
      <div style={{ padding: "10px", position: "sticky", top: 0 }}>
        <SearchBar />
      </div>
      <List
        dense
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          marginBottom: "30px",
        }}
      >
        {data?.data.map((value: Friend) => {
          const labelId = `checkbox-list-secondary-label-${value.connectionId}`;
          return (
            <ListItem
              key={labelId}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value.connectionId)}
                  checked={checked.includes(value.connectionId)}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value.connectionId + 1}`}
                    src={value.connectedToPhoto}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={value.connectedToName} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <div
        style={{
          padding: "10px 0px",
          position: "sticky",
          bottom: "60px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          style={{ width: "90%" }}
          to={checked.length ? ADD_EXPENSE_PAGE : ""}
        >
          <Button
            style={{ width: "100%" }}
            disabled={checked.length === 0}
            variant="contained"
          >
            Add Details
          </Button>
        </Link>
      </div>
      <AddDetails openBs={openBs} setOpenBs={setOpenBs} />
    </div>
  );
};
