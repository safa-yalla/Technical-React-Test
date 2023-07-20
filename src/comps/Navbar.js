import { IconContext } from "react-icons";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {SidebarData} from "./Sidebar";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Flex } from "@chakra-ui/layout";


const Navbar = () => {
const [sidebar, setSidebar] = useState(false);
const showSidebar = () =>setSidebar(!sidebar);

	return ( 
		<>
		
		<IconContext.Provider value={{ color: "white"}}>
			<div className="navbar">
				<Link to ="#" className="menu-bars" >
				<FaIcons.FaBars onClick={showSidebar}/>
				</Link>
			   <img style={{ width: 100, height: 100, padding:'10px'}} src="/dumbbell-modified.png" alt="Logo" className="logo"/>
			   <img style={{ width: 60, height: 60}} src="/profile.png" alt="Logo"/>

			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose color="black"/>
              </Link>
            </li>
					{SidebarData.map((item, index)=>{
						return(
							<li key = {index} className={item.cName}>
								<Link to={item.path}>
									<span>{item.title}</span>
									{item.icons}
								</Link>
							</li>
						);
					})}
				</ul>
		
			</nav>
		</IconContext.Provider>
		</>
	 );
}
// import * as React from 'react';
//import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
//import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
//import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
//import Container from '@mui/material/Container';
//import Avatar from '@mui/material/Avatar';
//import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
//import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';

//const pages = ['Products', 'Pricing', 'Blog'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

//function Navbar() {
//  const [anchorElNav, setAnchorElNav] = useState('');
//  const [anchorElUser, setAnchorElUser] = useState('');
//const [sidebar, setSidebar] = useState(false);
//const showSidebar = () =>setSidebar(!sidebar);
//  const handleOpenNavMenu = (event) => {
//    setAnchorElNav(event.currentTarget);
//  };
//  const handleOpenUserMenu = (event) => {
//    setAnchorElUser(event.currentTarget);
//  };

//  const handleCloseNavMenu = () => {
//    setAnchorElNav(null);
//  };

//  const handleCloseUserMenu = () => {
//    setAnchorElUser(null);
//  };

//  return (
//    <AppBar position="static">
//      <Container maxWidth="xl">
//        <Toolbar disableGutters>
//          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//          <Typography
//            variant="h6"
//            noWrap
//            component="a"
//            href="/"
//            sx={{
//              mr: 2,
//              display: { xs: 'none', md: 'flex' },
//              fontFamily: 'monospace',
//              fontWeight: 700,
//              letterSpacing: '.3rem',
//              color: 'inherit',
//              textDecoration: 'none',
//            }}
//          >
//            LOGO
//          </Typography>

//          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//            <IconButton
//              size="large"
//              aria-label="account of current user"
//              aria-controls="menu-appbar"
//              aria-haspopup="true"
//              onClick={handleOpenNavMenu}
//              color="inherit"
//            >
//              <MenuIcon />
//            </IconButton>
//            <Menu
//              id="menu-appbar"
//              anchorEl={anchorElNav}
//              anchorOrigin={{
//                vertical: 'bottom',
//                horizontal: 'left',
//              }}
//              keepMounted
//              transformOrigin={{
//                vertical: 'top',
//                horizontal: 'left',
//              }}
//              open={Boolean(anchorElNav)}
//              onClose={handleCloseNavMenu}
//              sx={{
//                display: { xs: 'block', md: 'none' },
//              }}
//            >
//              {SidebarData.map((item, index)=>{
//						return(
//							<li key = {index} className={item.cName}>
//								<Link to={item.path}>
//									<span>{item.title}</span>
//									{item.icons}
//								</Link>
//							</li>
//						)
//					})}
//            </Menu>
//          </Box>
//          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//          <Typography
//            variant="h5"
//            noWrap
//            component="a"
//            href=""
//            sx={{
//              mr: 2,
//              display: { xs: 'flex', md: 'none' },
//              flexGrow: 1,
//              fontFamily: 'monospace',
//              fontWeight: 700,
//              letterSpacing: '.3rem',
//              color: 'inherit',
//              textDecoration: 'none',
//            }}
//          >
//            LOGO
//          </Typography>
//          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//            {SidebarData.map((item, index) => (
//              <Button
//                key={index}
//                onClick={handleCloseNavMenu}
//                sx={{ my: 2, color: 'white', display: 'block' }}
//              >
//                {item.title}
//              </Button>
//            ))}
//          </Box>

//          <Box sx={{ flexGrow: 0 }}>
//            <Tooltip title="Open settings">
//              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//              </IconButton>
//            </Tooltip>
//            <Menu
//              sx={{ mt: '45px' }}
//              id="menu-appbar"
//              anchorEl={anchorElUser}
//              anchorOrigin={{
//                vertical: 'top',
//                horizontal: 'right',
//              }}
//              keepMounted
//              transformOrigin={{
//                vertical: 'top',
//                horizontal: 'right',
//              }}
//              open={Boolean(anchorElUser)}
//              onClose={handleCloseUserMenu}
//            >
//              {settings.map((setting) => (
//                <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                  <Typography textAlign="center">{setting}</Typography>
//                </MenuItem>
//              ))}
//            </Menu>
//          </Box>
//        </Toolbar>
//      </Container>
//    </AppBar>
//  );
//}
//export default ResponsiveAppBar;
export default Navbar;