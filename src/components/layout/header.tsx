import React from "react";
import { Typography } from "@material-ui/core";

export default function CustomHeader() {
  return (
    <div className="header">
      <Typography variant="h3" className="header-title">
        Covid 19 Tracker
      </Typography>      
    </div>
  );
}
