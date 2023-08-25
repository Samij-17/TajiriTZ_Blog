import React, { useContext, useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Drawer, Divider, IconButton, List, ListItem, ListItemText, useMediaQuery, useTheme, Paper, } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserContext } from "../userContext";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState (false);
    const {userInfo, setUserInfo}= useContext(UserContext);
    const theme= useTheme();
    const isMobile= useMediaQuery (theme.breakpoints.down('md'));

    const username= userInfo && userInfo.username;    

    const handleDrawerToggle = () => {
        setDrawerOpen (!drawerOpen);
    };

    useEffect(() => {
        fetch('http://localhost:5000/profile', {
            credentials: 'include',
        }).then (response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    },[]);

    const navItems = [
        // {text: "Uwekezaji", path: "/uwekezaji"},
        // {text: "Bajeti", path: "/Bajeti"},
        // {text: "Akiba", path: "/Akiba"},
        // {text: "Mikopo", path: "/Mikopo"},
        {text: "About us", path: "/about"},
        {text: "Contact Us", path: "/contact"},
    ];

    if (username && isMobile) {
        navItems.push(
            {text: "Create new post", path: "/create"},
            {text: "Logout", path: "/", onClick: logout});
    }


    function logout() {
        fetch ('http://localhost:5000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    return (
        <AppBar position="sticky" color="default" elevation={0} sx={{paddingTop: 2, marginY: 4, backgroundColor: 'white'}}>
            <Toolbar>
                <Typography variant= {isMobile ? "h4" : "h3"} component={Link} to="/"  style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit'}}>
                    TajiriTZ
                </Typography>
                <Typography variant= "body1"  component= {Link} to="/blog" color="textSecondary"   sx={{flexGrow: 1, textDecoration: 'none', fontSize: 23, '&:hover': { color: ' black', transition: 'color 0.3s ease-in-out'}}}>
                    Blog
                </Typography>
                {!isMobile && username && (
                    <Box display="flex" gap={3} alignItems="center" marginRight={3}>
                            <Typography component={Link} to= "/create" variant= "body1" color="textSecondary"   sx={{fontSize: 23, textDecoration: 'none', '&:hover': { color: ' black', transition: 'color 0.3s ease-in-out'}}}>
                                Create new post
                            </Typography>
                            <Typography component={Link} to= "/" onClick={logout} variant= "body1" color="textSecondary"  sx={{fontSize: 23, textDecoration: 'none', '&:hover': { color: ' black', transition: 'color 0.3s ease-in-out'}}}>
                                Logout
                            </Typography>
                        </Box>
                )}
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <List>
                {navItems.map((item, index) => (
                        <ListItem button component= {Link} to={item.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }} onClick={item.onClick}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                ))}
            </List>
            </Drawer>
            <Paper elevation={1}>
            <Divider elevation/>
            </Paper>
        </AppBar>
);
};

export default Navbar;
