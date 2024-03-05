import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import PrintIcon from "@mui/icons-material/Print";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";

function RightActions() {
  const buttons = [
    { label: "Text 1", icon: <SaveAsIcon />, color: "green" },
    { label: "Text 2", icon: <PrintIcon />, color: "green" },
    { label: "Text 3", icon: <PlaylistAddCheckIcon />, color: "green" },
    { label: "Text 4", icon: <SummarizeIcon />, color: "green" },
    { label: "Text 5", icon: <SwipeRightIcon />, color: "green" },
  ];

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "",
      }}
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant="text"
          style={{ color: button.color }}
          startIcon={button.icon}
        >
          {button.label}
        </Button>
      ))}
    </Box>
  );
}

export default RightActions;
