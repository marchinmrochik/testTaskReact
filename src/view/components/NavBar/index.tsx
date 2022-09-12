import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {userSignOut} from "../../../init/store/actions/userActions";
import {
    AppBar,
    Avatar,
    Box, CssBaseline,
    Divider, Drawer, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Toolbar, Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

import styles from './styles';

export const NavBar = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const toggleSlider = () => {
        setOpen(!open);
    };

    const sideList = () => (
        <Box sx={styles.sideListContainer} component="div">
            <Avatar
                sx={styles.avatar}
            > A
            </Avatar>
            <Divider />
            <List>
                <ListItem disablePadding sx={{display: 'block'}}>
                    <ListItemButton onClick={handleLogout}
                                    sx={{
                                        justifyContent: open ? 'initial' : 'center',
                                        ...styles.itemButton
                                    }}
                    >
                        <ListItemIcon
                            sx={{
                                mr: open ? 3 : 'auto',
                                ...styles.itemIcon
                            }}
                        >
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText sx={{opacity: open ? 1 : 0}} primary={
                            <Typography color={'#fff'}>Sign out</Typography>
                        } />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    const handleLogout = () => dispatch(userSignOut())

    return (<>
        <CssBaseline/>
        <Box position={'fixed'} component="nav" width='100%'>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleSlider}
                        edge="start"
                        sx={{
                            marginRight: 5,
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Products Page
                    </Typography>
                    <Drawer anchor="left" open={open} onClose={toggleSlider}>
                        {sideList()}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    </>)
}