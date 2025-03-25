import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { ScreenLoader } from "../screen-loader/ScreenLoader.tsx";
import { getInitialData } from "./ApiClient.ts";
import { Friend } from "../../interface/Friends.ts";
import { SomethingWentWrong } from "../work-in-progress/SomethingWentWrong.tsx";
import { AppContex } from "../../context/Context.tsx";

export const FriendsMain = () => {
  const { setUser } = useContext(AppContex);

  const { data, isLoading, error } = useQuery({
    queryKey: ["myData"],
    queryFn: () => getInitialData(),
  });

  useEffect(() => {
    setUser(data?.data.userData);
  }, [data?.data]);

  if (isLoading) {
    return <ScreenLoader />;
  }

  if (error) {
    return <SomethingWentWrong />;
  }

  return (
    <List>
      {data?.data.connections.map((item: Friend) => (
        <ListItemButton key={item.connectionId}>
          <ListItemAvatar>
            <Avatar alt="Profile Picture" src={item.connectedToPhoto} />
          </ListItemAvatar>
          <ListItemText
            primary={item.connectedToName}
            secondary={
              item.debt ? (
                `Owes: ${item.debt}`
              ) : (
                <div style={{ color: "#2ecc71" }}>Settled</div>
              )
            }
          />
        </ListItemButton>
      ))}
    </List>
  );
};
