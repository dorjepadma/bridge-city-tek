import React from "react";
import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// import { theme } from "./ui/Theme";


function ElevationScroll(props) {
  const { children } = props;
  //elevates header when scrolling
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  return (
    <ElevationScroll>
      <ThemeProvider > 
    <AppBar position='fixed' color="primary">
      <Toolbar>Bridge City Tech</Toolbar>
    </AppBar>
    </ThemeProvider>
    </ElevationScroll>
  );
}
