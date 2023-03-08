import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const [toggleCardView, setToggleCardView] = useState("/cardoverview");
  const [homeIsVisible, setHomeIsVisible] = useState(true);

  const onClickHandler = () => {
    setToggleCardView((prevState) => {
      if (prevState === "/" || prevState === "") {
        return "/cardoverview";
      } else {
        return "/";
      }
    });
    setHomeIsVisible((prevState) => !prevState);
  };

  return (
    <AppBar color="secondary">
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h4">React Users</Typography>
        <Button
          component={Link}
          to={toggleCardView}
          variant="contained"
          sx={{ position: "absolute", right: "50px" }}
          onClick={onClickHandler}
        >
          Switch to {homeIsVisible ? "Card" : "List"} View
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
