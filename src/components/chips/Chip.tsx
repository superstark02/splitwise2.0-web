import Chip from "@mui/material/Chip";
import * as React from "react";

export default function ChipComp(props: {
  handleDelete?: Function;
  onClick?: Function;
  title: String;
}) {
  const { handleDelete, title, onClick = () => {} } = props;

  if (!handleDelete) {
    return <Chip label={title} variant="outlined" onClick={() => onClick()} />;
  }

  return (
    <Chip label={title} variant="outlined" onDelete={() => handleDelete()} />
  );
}
