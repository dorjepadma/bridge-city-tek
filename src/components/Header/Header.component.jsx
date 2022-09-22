import React, { useState }from "react";
import { Link, Outlet } from "react-router-dom";


    import {
      MDBIcon,
      MDBContainer,
      MDBNavbar,
      MDBNavbarBrand,
      MDBNavbarToggler,
      MDBNavbarNav,
      MDBNavbarLink,
      MDBCollapse,
      MDBTypography,
    } from 'mdb-react-ui-kit';
// import theme from '../ui/Theme.js';


import Logo from '../../assets/images/BCTlogo.png'

import './Header.styles.scss'




const Header = () => {
  //handles change of tab value
  const [showNavSecond, setShowNavSecond] = useState(false);
  
  return (
    <div>
    <div className="header">
    <MDBNavbar expand='lg' light bgColor='primary'>
      <MDBContainer fluid className>
      <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
          <MDBIcon sx={{ padding: 0, }} component={Link} to='/'>
          <img alt="BCT logo" className="logo" src={Logo} />
          </MDBIcon>
          
          <MDBTypography variant="h3" color="white">
            Bridge City Tek
          </MDBTypography>

          <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink href='websites'>WEBSITES</MDBNavbarLink>
            <MDBNavbarLink href='customSoftware'>CUSTOM SOFTWARE</MDBNavbarLink>
            <MDBNavbarLink href='mobileapps'>MOBILE APPS</MDBNavbarLink>
            <MDBNavbarLink href='seo'>SEO OPTIMIZATION</MDBNavbarLink>
            <MDBNavbarLink href='blog'>BLOG</MDBNavbarLink>
            <MDBNavbarLink href='contact'>CONTACT</MDBNavbarLink>
          </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
    </MDBNavbar>
    </div>
    <Outlet/>
    </div>
  );
};
export default Header;
