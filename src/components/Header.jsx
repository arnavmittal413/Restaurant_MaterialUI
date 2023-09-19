import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../image/logo.svg"
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link , NavLink } from "react-router-dom";
import "../styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggler = () => {
    setMobileOpen(!mobileOpen);
    
  };
  

  const drawer= (
    

    <Box onClick={handleToggler} sx={{ textAlign: "center" }}>
      
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1 ,my:2 }}
      >
        
        <img src={Logo} alt="logo" height={'70'} width={'200'} />
      </Typography>
      <Divider />
      <ul className="navigation-mobile">
        <li>
          <NavLink activeClassName="active" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleToggler}
            >
              <MenuIcon  />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              
              <img src={Logo} alt="logo" height={'70'} width={'250'} />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-bar">
                <li>
                  <NavLink activeClassName="active"  to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleToggler}
            sx={{ display: { xs: "block", sm: "none" },"& .MuiDrawer-paper":{
              boxSizing:"border-box",
              width:"240px"
            } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
