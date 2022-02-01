import React from "react";

import { AppBar, Toolbar, useScrollTrigger, Typography, Tabs, Tab, Box, styled } from "@mui/material";

import Logo from '../../assets/images/BCTlogo.png'

import './Header.styles.scss'



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
const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "auto",
  color: "secondary"
}));

const Header = () => {
  return (
    <>
    <ElevationScroll>
    <AppBar position='fixed' >
      <Toolbar disabledGutters={true}>
        <img src={Logo} alt="BCT logo" className="logo" />
        <Typography variant="h3" color="secondary">
          Bridge City Tech
          </Typography>
          <Tabs sx={{ marginLeft: "auto", fontSize: "4rem" }}>
          <StyledTab label="Home" />
          <StyledTab label="Services" />
          <StyledTab label="Blog" />
          <StyledTab label="About" />
          <StyledTab label="Contact" />
          </Tabs>
          </Toolbar>
    </AppBar>
    </ElevationScroll>
    </>
  );
}
export default Header
