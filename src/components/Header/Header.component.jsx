import React from "react";

import { AppBar, Toolbar, useScrollTrigger, Typography, Tabs, Tab, styled, createTheme, ThemeProvider, Button, Box} from "@mui/material";

import theme from '../ui/Theme.js';


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
  color: "#ffffff",
  fontFamily: 'Raleway',
  fontWeight: 'bold',
  fontSize: '1rem',
 
}));

const Header = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <ElevationScroll>
    <AppBar container position='fixed' >
      <Toolbar disabledGutters={true}>
        <img src={Logo} alt="BCT logo" className="logo" />
        <Typography variant="h3" color="third">
          Bridge City Tech
          </Typography>
       

          <Tabs value={value} onChange={handleChange}  textColor="#ffffff"
        indicatorColor="secondary"
        aria-label="secondary tabs example" sx={{ marginLeft: 'auto', minWidth: 5,  }}>
          <StyledTab label="Home" />
          <StyledTab label="Services" />
          <StyledTab label="Blog" />
          <StyledTab label="About" />
          <StyledTab label="Contact" />
          </Tabs>
      
          <Button variant='contained' color= "secondary" sx={{fontFamily: "Raleway", color: '#ffffff', backgroundColor:'#0398dc', borderRadius: 10, marginLeft:'50px', marginRight: '50px'}}>Free Quote</Button>
          </Toolbar>
    </AppBar>
    </ElevationScroll>
    </>
  );
}
export default Header
