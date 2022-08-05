import React, { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { AppBar,
   Toolbar,
    useScrollTrigger,
    Typography,
    Tabs,
    Tab,
    styled,
    Button,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Menu,
  Paper } from "@mui/material";


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


const Header = (props) => {
  //handles change of tab value
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleChange = (event, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === '/services' && value !== 1) 
    { 
      setValue(1)
    } else if (window.location.pathname === '/blog' && value !== 2) 
    { 
       setValue(2)
    }
       else if (window.location.pathname === '/about' && value !== 3) 
    { 
      setValue(3)
    }
      else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4)
    }
      else if (window.location.pathname === '/estimate' && value !== 5) {
               setValue(5)}
          }, [value]);

  return (
    <>
    <ElevationScroll>
    <AppBar container position='fixed' >
      <Toolbar disabledGutters={true}>
        <Button sx={{ padding: 0, }} component={Link} to='/'>
        <img alt="BCT logo" className="logo" src={Logo} />
        </Button>
        <Typography variant="h3" color="third">
          Bridge City Tech
          </Typography>

          <Tabs value={value} 
          onChange={handleChange}  
          textColor="#ffffff"
          indicatorColor="secondary"
          aria-label="secondary tabs example" sx={{ marginLeft: 'auto', minWidth: 5,  }}>
          <StyledTab component={Link} to='/' label="home" />
          <StyledTab 
          aria-owns={anchorEl ? 'simpleMenu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined} 
          onMouseOver={event => handleClick(event)}
          component = {Link} to='services'label="services" />
          <StyledTab component = {Link} to='blog'label="blog" />
          <StyledTab component = {Link} to='about'label="about" />
          <StyledTab component = {Link} to='contact'label="contact" />
          </Tabs>
      
          <Button variant='contained' color= "secondary" sx={{fontFamily: "Raleway", color: '#ffffff', backgroundColor:'#0286FF', borderRadius: 10, marginLeft:'50px', marginRight: '50px'}}>
            Free Quote
          </Button>
       
          <Menu anchorEl={anchorEl} 
          open={open} 
          onClose={handleClose}
          MenuListProps={{onMouseLeave: handleClose}}
          classes={{ paper: 'menu' }}          
          >
            <MenuItem onClick={() => {handleClose(); setValue(1)} }
             component = {Link} 
             to='services'>
               Services :
               </MenuItem>
            <MenuItem onClick={() => {handleClose(); setValue(1)} }
             component = {Link} 
             to='customsoftware'>
               Custom Software
               </MenuItem>
            <MenuItem onClick={() => {handleClose(); setValue(2)} } component = {Link} to='mobileapps'>Mobile Apps</MenuItem>
            <MenuItem onClick={() => {handleClose(); setValue(3)} } component = {Link} to='websites'>UI/UX Design</MenuItem>
            <MenuItem onClick={() => {handleClose(); setValue(3)} } component = {Link} to='websites'>Web Development</MenuItem>
            <MenuItem onClick={() => {handleClose(); setValue(4)} } component = {Link} to='seo'>SEO Optimization</MenuItem>
            </Menu>
  
          </Toolbar>
    </AppBar>
    </ElevationScroll>
    </>
  );
};
export default Header;
