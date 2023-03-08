import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }} color="secondary">
      <Toolbar
        sx={{
          display: "flex",

          alignItems: "flex-end",
        }}
      >
        <Typography variant="body2" gutterBottom paddingBottom={1}>
          © {new Date().getFullYear()} CopyRight BIT
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
